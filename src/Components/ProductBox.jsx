import classes from './ProductBox.module.scss';
import ProductLink from '../UI/ProductLink'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import globalState from '../globalState';
import {useContext} from 'react';

function ProductBox(props) {
    const [,dispatchGlobal] = useContext(globalState);

    const addItemHandler = () => {
        dispatchGlobal({
            type: "ADD_TO_BASKET",
            productsAmmount: 1,
            product: props.productID
        })
    }

    return (
        <div className={classes.product} >
            <div className={classes.productImage} ><img src={props.productImage} alt="productImage" /></div>
            <p className={classes.productName} >{props.productName}</p>
            <p>{props.productPrice} RON</p>
            <ProductLink productID={"/"+props.productID} />
            <button onClick={addItemHandler} className={classes.add} >ADD TO BASKET&nbsp;&nbsp;<span></span><AddShoppingCartIcon/></button>
        </div>
    )
}

export default ProductBox
