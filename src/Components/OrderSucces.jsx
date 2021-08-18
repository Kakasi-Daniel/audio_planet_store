import classes from "./OrderSucces.module.scss";
import {useHistory,Link} from 'react-router-dom';
import {auth} from '../firebase'
import {useState,useEffect} from 'react';

function OrderSucces({orderID}) {

    const [seconds, setSeconds] = useState(10);

    const history = useHistory();

    useEffect(() =>{
        const interval = setInterval(() =>{
            setSeconds(prev => prev-1)
        },1000)
        return () => {
            clearInterval(interval)
        }
    },[])

   
    if(seconds === 0){
        history.push('/');
    }

    return (
        <div className={classes.orderSucces}>
            <div className={classes.thankGif}>
              <img draggable="false" src="https://c.tenor.com/AEq_MsuoaXsAAAAC/leonardo-dicaprio-thank-you.gif" alt="thank_you" />
            </div>
            <h2>Thanks for your muney!</h2>
            <p>Your order ID is : <span>{orderID}</span></p>
            {auth.currentUser && <p>You can view all your orders in <Link to="myorders" >My orders</Link> section</p>}
            <p>You will be redirected to <Link to="/">main page</Link> in {seconds} seconds</p>
        </div>
    )
}

export default OrderSucces
