import classes from './CheckoutProduct.module.scss';
import DeleteIcon from '@material-ui/icons/Delete';
import {Link} from 'react-router-dom'
import { forwardRef } from 'react';

const CheckoutProduct = forwardRef((props,ref) => {

    const addToBasketOne = () =>{
        const productToAdd = {productID: props.id};
        props.onIncrease(productToAdd)
    }

    const decreaseFromBasketOne = () =>{
        props.onDecrease(props.id)
    }

    const deleteHandler = () =>{
        props.onDelete(props.id)
    }

    return (
        <div ref={ref} className={classes.product} >
            <Link to={'products/'+props.id} className={classes.productDescription}>
                <div className={classes.productImage}>
                    <img draggable="false" src={props.image} alt="" />
                </div>
                <div className={classes.productText}>
                    <h3>{props.name}</h3>
                    <p>{props.price} RON buc.</p>
                </div>
            </Link>
            <div className={classes.controls}>
                <div className={classes.ammountControls}>
                    <button onClick={decreaseFromBasketOne} className={classes.minus} >-</button>
                    <p>{props.ammount}</p>
                    <button  onClick={addToBasketOne} className={classes.plus}>+</button>
                </div>
                <button onClick={deleteHandler} className={classes.deleteItem}><DeleteIcon/></button>
            </div>
        </div>
    )
})

export default CheckoutProduct
