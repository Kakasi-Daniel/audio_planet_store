import classes from './Checkout.module.scss'
import Container from '../UI/Container'
import {useContext} from 'react';
import globalContext from '../globalState'
import CheckoutProduct from '../Components/CheckoutProduct'
import gocart from '../assets/gocart.gif'
import {Link} from 'react-router-dom'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import NumberFormat from 'react-number-format';

function Checkout() {

    const [{basket,basketTotal,basketItems},dispatchGlobal] = useContext(globalContext);

    const stepOne = (product) =>{
        dispatchGlobal({type:"ADD_TO_BASKET", product:product , ammount: 1})
    }

    const backOne = (product) => [
        dispatchGlobal({type:"DECREASE_ONE", productID: product})
    ]
    const deleteItem = (product) => [
        dispatchGlobal({type:"REMOVE_FROM_BASKET", productID: product})
    ]

    return (

        <Container>
            {basketItems !== 0 && <><div className={classes.links} >
                <Link to="products" className={classes.products} ><ArrowBackIosIcon/>Back to Products<span></span></Link>
                <Link to="placeorder" className={classes.order} >Go to order details<ArrowForwardIosIcon/><span></span></Link>
            </div>
                <h2 className={classes.summary} >You have {basketItems} {basketItems===1 ? 'item' : "items"} in you basket with a total of <NumberFormat value={basketTotal.toFixed(2)} displayType={'text'} thousandSeparator={true} /> RON</h2>
            </>}
            {basketItems===0 ? <div className={classes.gotocart} >
                <div>
                <img src={gocart} alt="" />
                <p>You got no products in your cart</p>
                <Link to="/products" >Go get some products</Link>
                </div>
            </div> : basket.map(product => {
                return(
                    <CheckoutProduct  onDelete={deleteItem} onDecrease={backOne} onIncrease={stepOne} ammount={product.productAmmount} name={product.productName} price={product.productPrice} image={product.productImage} id={product.productID}/>
                )
            })}
        </Container>
    )
}

export default Checkout
