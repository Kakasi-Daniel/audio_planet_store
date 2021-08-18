import classes from './Order.module.scss';
import { useParams } from 'react-router-dom';
import { useContext, useState,useEffect } from 'react';
import globalContext from '../globalState';
import { getOrderByID } from '../http';
import NumberFormat from 'react-number-format';
import Container from '../UI/Container';
import {Link} from 'react-router-dom'

function Order() {
  const [{ user }] = useContext(globalContext);
  const [order, setOrder] = useState();
  const params = useParams();

  useEffect(() => {
      if(user){
          getOrderByID(user.uid,params.orderID).then(fetchedOrder =>{
              setOrder({...fetchedOrder})
          })
      }
  }, [user,params.orderID])

  console.log(order)

  return (
      <Container className={classes.order} >
          <div className={classes.orderHeader} >
              <h2>Items buyed: {order?.totalItems}</h2>
              <p>Order placed in {order?.date} with a total value of <NumberFormat
                value={order?.totalAmmount.toFixed(2)}
                displayType={'text'}
                thousandSeparator={true}
              /> RON</p>
          </div>

          <div className={classes.orderDetails} >
            <h3>Order details</h3>
            <p><span>Name:</span> {order?.orderDetails.personal.name}</p>
            <p><span>Phone:</span> {order?.orderDetails.personal.phone}</p>
            <p><span>County:</span> {order?.orderDetails.details.county}</p>
            <p><span>Address:</span> {order?.orderDetails.details.address}</p>
            <p><span>City:</span> {order?.orderDetails.details.city}</p>
            <p><span>Postal code:</span> {order?.orderDetails.details.postal}</p>
          </div>

          <div className={classes.orderItems} >
            {
                order?.basket.map(product =>{
                    return(
                        <Link to={"/products/"+product.productID} key={product.productID} className={classes.orderProduct} >
                            <div className={classes.productDetails} >
                                <div className={classes.imageContainer} >
                                    <img draggable="false" src={product.productImage} alt="productimage" />
                                </div>
                                <div>
                                    <p>{product.productName}</p>
                                    <p>{product.productPrice.toFixed(2)} RON</p>
                                </div>
                            </div>
                            <p className={classes.productAmmount} >x{product.productAmmount}</p>
                        </Link>
                    )
                })
            }
          </div>
      </Container>
  );
}

export default Order;
