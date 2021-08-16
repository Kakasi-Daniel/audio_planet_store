import classes from './ProductBox.module.scss';
import ProductLink from '../UI/ProductLink'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import globalState from '../globalState';
import {useContext} from 'react';
import {Link} from 'react-router-dom'

function ProductBox(props) {
    const [,dispatchGlobal] = useContext(globalState);

    const addItemHandler = () => {
        dispatchGlobal({
            type: "ADD_TO_BASKET",
            product: {...props},
            ammount: 1
        })
    }

    return (
        <div className={classes.product} >
            <Link to={"products/" + props.productID} className={classes.productImage} ><img draggable="false" src={props.productImage} alt="productImage" /></Link>
            <p className={classes.productName} >{props.productName}</p>
            <p>{props.productPrice.toFixed(2)} RON</p>
            <ProductLink productID={"/"+props.productID} />
            <button onClick={addItemHandler} className={classes.add} >ADD TO BASKET&nbsp;&nbsp;<span></span><AddShoppingCartIcon/></button>
        </div>
    )
}

export default ProductBox
