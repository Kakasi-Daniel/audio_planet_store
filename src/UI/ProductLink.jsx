import {Link} from 'react-router-dom'
import classes from './ProductLink.module.scss'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function ProductLink(props) {
    return (
        <Link  className={classes.btn + " " + props.className} to={"/products"+props.productID} >SEE PRODUCT&nbsp;<ArrowForwardIosIcon />
        <span className={classes.overlay} ></span></Link>
    )
}

export default ProductLink
