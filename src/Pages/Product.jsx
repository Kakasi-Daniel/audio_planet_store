import classes from './Product.module.scss';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProductByID } from '../http';
import Container from '../UI/Container';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import globalState from '../globalState';
import { useContext } from 'react';
import loadingGif from '../assets/loading.gif';
import Brands from '../Components/Brands';
import ProductsTypes from '../Components/ProductsTypes';

function Product() {
  const [product, setProduct] = useState(null);
  const [ammountToAdd, setAmmount] = useState(1);
  const [ammountError, setAmmountError] = useState(false);
  const { productID } = useParams();
  const [, dispatchGlobal] = useContext(globalState);

  const addItemHandler = () => {
    if (!ammountError) {
      dispatchGlobal({
        type: 'ADD_TO_BASKET',
        product: {
          productImage: product.photo,
          productName: product.fullname,
          productPrice: product.price,
          productID: productID
        },
        ammount: +ammountToAdd,
      });
    }
  };

  const inputChangeHandler = (e) => {
    if (e.target.value > 0 || e.target.value === '') {
      setAmmount(e.target.value);
    }
    if (e.target.value < 1 || e.target.value === '') {
      setAmmountError(true);
    } else {
      setAmmountError(false);
    }
  };

  useEffect(() => {
    getProductByID(productID).then((product) => {
      setProduct(product);
    });
  }, [productID]);

  return (
    <>
      <Container>
        {product ? (
          <div className={classes.product}>
            <div className={classes.productDetails}>
              <div className={classes.productImage}>
                <img src={product.photo} alt="" />
              </div>
              <div className={classes.productTextDetail}>
                <p>{product.brand}</p>
                <h2>{product.fullname}</h2>
                <p>{product.price} RON</p>
              </div>
            </div>
            <div className={classes.addProduct}>
              <div
                className={
                  ammountError
                    ? classes.addProductControls + ' ' + classes.ammountError
                    : classes.addProductControls
                }
              >
                <button
                  className={classes.minus}
                  onClick={() =>
                    setAmmount((prev) => {
                      if (prev > 1) {
                        return prev - 1;
                      } else {
                        setAmmountError(false);
                        return 1;
                      }
                    })
                  }
                >
                  -
                </button>
                <input
                  onChange={inputChangeHandler}
                  value={ammountToAdd}
                  min="1"
                  type="number"
                />
                <button
                  className={classes.plus}
                  onClick={() =>
                    setAmmount((prev) => {
                      setAmmountError(false);
                      return +prev + 1;
                    })
                  }
                >
                  +
                </button>
              </div>
              <button onClick={addItemHandler} className={classes.add}>
                ADD TO BASKET&nbsp;&nbsp;<span></span>
                <AddShoppingCartIcon />
              </button>
            </div>
          </div>
        ) : (
          <img
            className={classes.loadingGif}
            src={loadingGif}
            alt="loading..."
          />
        )}
      </Container>
      <Container>
        <div className={classes.productInfo}>
          <div className={classes.productDescription}>
            <h3>Feature</h3>
            <p>
              Featuring a genuine leather head strap and premium earcups, these
              headphones deliver superior comfort for those who like to enjoy
              endless listening. It includes intuitive controls designed for any
              situation. Whether you’re taking a business call or just in your
              own personal space, the auto on/off and pause features ensure that
              you’ll never miss a beat.
            </p>
            <p>
              The advanced Active Noise Cancellation with built-in equalizer
              allow you to experience your audio world on your terms. It lets
              you enjoy your audio in peace, but quickly interact with your
              surroundings when you need to. Combined with Bluetooth 5. 0
              compliant connectivity and 17 hour battery life, the XX99 Mark II
              headphones gives you superior sound, cutting-edge technology, and
              a modern design aesthetic.
            </p>
          </div>
          <div className={classes.productInBox}>
            <h3>In the Box</h3>
            <p>
              <span className={classes.orange}>x1</span>&nbsp;Product Unit
            </p>
            <p>
              <span className={classes.orange}>x2</span>&nbsp;Replacement Stuff
            </p>
            <p>
              <span className={classes.orange}>x1</span>&nbsp;User Manual
            </p>
            <p>
              <span className={classes.orange}>x1</span>&nbsp;Audio Cable 3.5mm
              5 meters
            </p>
            <p>
              <span className={classes.orange}>x1</span>&nbsp;Travel Bag
            </p>
          </div>
        </div>
        <div className={classes.productImages}>
          <div>
            <img
              src="https://a331998513.github.io/audiophile-ecommerce-website/static/media/image-gallery-1.fec85b48.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://a331998513.github.io/audiophile-ecommerce-website/static/media/image-gallery-2.a88a2477.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://a331998513.github.io/audiophile-ecommerce-website/static/media/image-gallery-3.431f9028.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://c0.wallpaperflare.com/preview/251/57/262/adjusting-audio-black-and-white-close-up.jpg"
              alt=""
            />
          </div>
        </div>
      </Container>
        <ProductsTypes/>
      <Brands />
    </>
  );
}

export default Product;
