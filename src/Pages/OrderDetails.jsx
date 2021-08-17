import classes from './OrderDetails.module.scss';
import { auth, database } from '../firebase';
import Container from '../UI/Container';
import { useState, useEffect } from 'react';
import { useContext } from 'react';
import globalContext from '../globalState';
import { getUserDetailsByID, sendOrder, sendOrderNoAccount } from '../http';
import CheckIcon from '@material-ui/icons/Check';
import SendIcon from '@material-ui/icons/Send';
import CheckoutProduct from '../Components/CheckoutProduct';
import { useHistory } from 'react-router-dom';
import NumberFormat from 'react-number-format';
import rand from 'random-key';
import OrderSucces from '../Components/OrderSucces';
import FlipMove from 'react-flip-move';

function OrderDetails() {
  const [{ user, basket, basketItems, basketTotal }, dispatchGlobal] =
    useContext(globalContext);
  const [payWithCard, setPayWithCard] = useState(true);
  const [orderSent, setOrderSent] = useState(false);
  const [orderID, ] = useState(rand.generate())
  

  const history = useHistory();

  const sendOrderHandler = (e) => {
    e.preventDefault();
    setOrderSent(true);
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;

    if (user) {
      sendOrder(basket, basketItems, basketTotal, today, inputs, orderID);
    } else {
      sendOrderNoAccount(
        basket,
        basketItems,
        basketTotal,
        today,
        inputs,
        orderID
      );
    }
    dispatchGlobal({ type: 'DELETE_BASKET' });
  };

  const methodChangeHandler = (e) => {
    e.preventDefault();
    setPayWithCard((prev) => !prev);
  };

  const [inputs, setInputs] = useState({
    personal: {
      name: '',
      phone: '',
    },
    details: {
      county: '',
      city: '',
      address: '',
      postal: '',
    },
    card: {
      cardholder: '',
      cardnumber: '',
      cardcvc: '',
      cardexpire: '',
    },
  });

  useEffect(() => {
    if (user) {
      getUserDetailsByID(user.uid).then((data) => {
        setInputs({
          personal: {
            name: user.displayName,
            phone: data?.phone || '',
          },
          details: {
            county: data?.county || '',
            city: data?.city || '',
            address: data?.address || '',
            postal: data?.postal || '',
          },
          card: {
            cardholder: "It's on me this time ",
            cardnumber: '4242 4242 4242 4242',
            cardcvc: '999',
            cardexpire: '',
          },
        });
      });
    }
  }, [user]);

  const stepOne = (product) => {
    dispatchGlobal({ type: 'ADD_TO_BASKET', product: product, ammount: 1 });
  };

  const backOne = (product) => {
    dispatchGlobal({ type: 'DECREASE_ONE', productID: product });
  };
  const deleteItem = (product) => {
    dispatchGlobal({ type: 'REMOVE_FROM_BASKET', productID: product });
  };

  const onInputChangeGenerator = (type, field) => {
    return function (e) {
      setInputs((prevInputs) => {
        const newType = { ...prevInputs[type] };
        newType[field] = e.target.value;

        return {
          ...prevInputs,
          [type]: {
            ...newType,
          },
        };
      });
    };
  };

  if (!basketItems && !orderSent) {
    history.push('checkout');
  }

  return (
    <Container className={classes.myAccountPage}>
      {!orderSent ? (
        <>
          <form onSubmit={sendOrderHandler} className={classes.userDetails}>
            <label className={classes.inputLabel} htmlFor="name">
              Name
              <input
                onChange={onInputChangeGenerator('personal', 'name')}
                value={inputs.personal.name}
                placeholder="Chuck Norris"
                id="name"
                type="name"
              />
            </label>
            <label className={classes.inputLabel} htmlFor="phone">
              Phone number
              <input
                onChange={onInputChangeGenerator('personal', 'phone')}
                value={inputs.personal.phone}
                placeholder="07xxxxxxxx"
                id="phone"
                type="tel"
              />
            </label>
            <label className={classes.inputLabel} htmlFor="county">
              County
              <input
                onChange={onInputChangeGenerator('details', 'county')}
                value={inputs.details.county}
                placeholder="Cluj"
                id="county"
                type="county"
              />
            </label>
            <label className={classes.inputLabel} htmlFor="city">
              City
              <input
                onChange={onInputChangeGenerator('details', 'city')}
                value={inputs.details.city}
                placeholder="Cluj-Napoca"
                id="city"
                type="city"
              />
            </label>
            <label className={classes.inputLabel} htmlFor="address">
              Address
              <input
                onChange={onInputChangeGenerator('details', 'address')}
                value={inputs.details.address}
                placeholder="street nr. bl."
                id="address"
                type="address"
              />
            </label>
            <label className={classes.inputLabel} htmlFor="postal">
              Postal code
              <input
                onChange={onInputChangeGenerator('details', 'postal')}
                value={inputs.details.postal}
                placeholder="407035"
                id="postal"
                type="postal"
              />
            </label>
            <button
              type="button"
              onClick={methodChangeHandler}
              className={
                !payWithCard
                  ? classes.paymentMethodBtn + ' ' + classes.active
                  : classes.paymentMethodBtn
              }
            >
              Pay at product delivery &nbsp;{!payWithCard && <CheckIcon />}{' '}
            </button>
            <button
              type="button"
              onClick={methodChangeHandler}
              className={
                payWithCard
                  ? classes.paymentMethodBtn + ' ' + classes.active
                  : classes.paymentMethodBtn
              }
            >
              Pay by Card &nbsp;{payWithCard && <CheckIcon />}{' '}
            </button>
            {payWithCard && (
              <>
                <label className={classes.inputLabel} htmlFor="cardholder">
                  Card Holder Name
                  <input
                    onChange={onInputChangeGenerator('card', 'cardholder')}
                    value={inputs.card.cardholder}
                    placeholder="Jean-Claude Van Damme"
                    id="cardholder"
                    type="cardholder"
                  />
                </label>
                <label className={classes.inputLabel} htmlFor="cardnumber">
                  Card Number
                  <input
                    onChange={onInputChangeGenerator('card', 'cardnumber')}
                    value={inputs.card.cardnumber}
                    placeholder="4242 4242 4242 4242"
                    id="cardnumber"
                    type="cardnumber"
                  />
                </label>
                <label className={classes.inputLabel} htmlFor="cardcvc">
                  Card CVC
                  <input
                    onChange={onInputChangeGenerator('card', 'cardcvc')}
                    value={inputs.card.cardcvc}
                    placeholder="222"
                    id="cardcvc"
                    type="number"
                  />
                </label>
                <label className={classes.inputLabel} htmlFor="expire">
                  Card Expiration Date
                  <input
                    onChange={onInputChangeGenerator('card', 'expire')}
                    value={inputs.card.expire}
                    id="expire"
                    type="date"
                  />
                </label>
              </>
            )}
            <button className={classes.submitBtn} type="submit">
              Place Order &nbsp;
              <SendIcon />
            </button>
          </form>

          <h2 className={classes.summary}>
            You have{' '}
            <span>
              {basketItems} {basketItems === 1 ? 'item' : 'items'}
            </span>{' '}
            in you basket with a total of{' '}
            <span>
              <NumberFormat
                value={basketTotal.toFixed(2)}
                displayType={'text'}
                thousandSeparator={true}
              />{' '}
              RON
            </span>
          </h2>

          <FlipMove>
          {basket?.map((product) => {
            return (
              <CheckoutProduct
                key={product.productID}
                onDelete={deleteItem}
                onDecrease={backOne}
                onIncrease={stepOne}
                ammount={product.productAmmount}
                name={product.productName}
                price={product.productPrice}
                image={product.productImage}
                id={product.productID}
              />
            );
          })}
          </FlipMove>
        </>
      ) : 
          <OrderSucces orderID={orderID}/>
      }
    </Container>
  );
}

export default OrderDetails;
