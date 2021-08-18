import classes from './MyOrders.module.scss';
import { getUserOrdersByID } from '../http';
import NumberFormat from 'react-number-format';
import { useState, useEffect, useContext } from 'react';
import globalContext from '../globalState';
import Container from '../UI/Container';
import { Link } from 'react-router-dom';
import VisibilityIcon from '@material-ui/icons/Visibility';

function MyOrders() {
  const [orders, setOrders] = useState([]);
  const [{ user }] = useContext(globalContext);

  console.log(orders);

  useEffect(() => {
    if (user) {
      getUserOrdersByID(user.uid).then((fetchedOrders) => {
        setOrders([...fetchedOrders]);
      });
    }
  }, [user]);

  return (
    <Container className={classes.orders}>
      {orders.length ? (
        <>
          {orders.map((order, index) => {
            return (
              <div key={order.orderID} className={classes.order}>
                <p>
                  {index + 1}. &nbsp;Order ID : <span>{order.orderID}</span>
                </p>
                <p>
                  Order placed in <span>{order.date}</span> with a total of{' '}
                  <span>
                    <NumberFormat
                      value={order.total.toFixed(2)}
                      displayType={'text'}
                      thousandSeparator={true}
                    />{' '}
                    RON
                  </span>
                </p>
                <Link
                  className={classes.toOrder}
                  to={'myorders/' + order.orderID}
                >
                  See order details &nbsp;
                  <VisibilityIcon />
                </Link>
              </div>
            );
          })}
        </>
      ) : (
        <div className={classes.noOrders}>
          <div className={classes.noOrdersContent}>
            <h2>
              You have no orders made yet.{' '}
              <Link to="/products">Go make some</Link>{' '}
            </h2>
            <img
              draggable="false"
              src="https://c.tenor.com/4EauhAI5810AAAAM/lets-order-menu.gif"
              alt="makeorders"
            />
          </div>
        </div>
      )}
    </Container>
  );
}

export default MyOrders;
