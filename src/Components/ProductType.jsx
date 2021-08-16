import classes from './ProductType.module.scss';
import { Link } from 'react-router-dom';

function ProductType(props) {
  return (
    <Link className={classes.prodType} to={`/products?type=${props.type}`}>
      <p>
        <img draggable="false" src={props.preview} alt="type_preview" />
        See our {props.typeName}
      </p>
    </Link>
  );
}

export default ProductType;
