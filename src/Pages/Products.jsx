import classes from './Products.module.scss';
import Container from '../UI/Container';
import { useState, useEffect,useRef} from 'react';
import Product from '../Components/ProductBox';
import { getArrayProducts } from '../http';
import arrayShuffle from 'array-shuffle';
import loadingGif from '../assets/loading.gif'

function Products() {
  const [types, setTypes] = useState([]);
  const [brands, setBrands] = useState([]);
  const [fetchedProducts, setfetchedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const typeRef = useRef()
  const brandRef = useRef()

  const getParameterByName = (name, url = window.location.href) => {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

  useEffect(() => {
    getArrayProducts().then((products) => {
      const shuffledProducts = arrayShuffle(products);
      setfetchedProducts(shuffledProducts);
      setLoading(false)
    });
    const brand = getParameterByName('brand')
    const type = getParameterByName('type')
    
    if(brand){
      brandRef.current.click();
    }
    if(type){
      typeRef.current.click();
    }


  }, []);

  let DISPLAYED_PRODUCTS =
    fetchedProducts.length === 0 ? [] : [...fetchedProducts];

  const filter = (method) => {
    if (method === 'types') {
      return function (e) {
        if (types.includes(e.target.value)) {
          setTypes((prev) => {
            return prev.filter((type) => type !== e.target.value);
          });
        } else {
          setTypes((prev) => {
            return [...prev, e.target.value];
          });
        }
      };
    }
    if (method === 'brands') {
      return function (e) {
        if (brands.includes(e.target.value)) {
          setBrands((prev) => {
            return prev.filter((type) => type !== e.target.value);
          });
        } else {
          setBrands((prev) => {
            return [...prev, e.target.value];
          });
        }
      };
    }
  };

  let filteredProducts = [];

  if (types.length !== 0) {
    types.forEach((type) => {
      filteredProducts = filteredProducts.concat(
        DISPLAYED_PRODUCTS.filter((product) => product.type === type)
      );
    });

    DISPLAYED_PRODUCTS = [...filteredProducts];
    filteredProducts = [];
  }

  if (brands.length !== 0) {
    brands.forEach((brand) => {
      filteredProducts = filteredProducts.concat(
        DISPLAYED_PRODUCTS.filter((product) => product.brand === brand)
      );
    });

    DISPLAYED_PRODUCTS = [...filteredProducts];
    filteredProducts = [];
  }

  const [accordions, setAccordions] = useState({
    types: false,
    brands: false,
  });

  const shrink = (type) => {
    return function () {
      setAccordions((prev) => {
        return {
          ...prev,
          [type]: !prev[type],
        };
      });
    };
  };

  return (
    <Container className={classes.productsPage}>
      <aside className={classes.sidebar}>
        <div
          className={
            accordions.types
              ? `${classes.filterSection} ${classes.shrink}`
              : classes.filterSection
          }
        >
          <div className={classes.filterLabel} onClick={shrink('types')}>
            Types
          </div>
          <div className={classes.filterContent}>
            <div className={classes.filterOption}>
              <input
                ref={(getParameterByName('type') === 'headphones') ? typeRef : null}
                value="headphones"
                onChange={filter('types')}
                type="checkbox"
                id="headphones"
              />
              <label htmlFor="headphones">Headphones</label>
            </div>
            <div className={classes.filterOption}>
              <input
              ref={(getParameterByName('type') === 'speakers') ? typeRef : null}
                value="speakers"
                onChange={filter('types')}
                type="checkbox"
                id="speakers"
              />
              <label htmlFor="speakers">Speakers</label>
            </div>
            <div className={classes.filterOption}>
              <input
              ref={(getParameterByName('type') === 'amps') ? typeRef : null}
                value="amps"
                onChange={filter('types')}
                type="checkbox"
                id="amps"
              />
              <label htmlFor="amps">Amp's</label>
            </div>
          </div>
        </div>
        <div
          className={
            accordions.brands
              ? `${classes.filterSection} ${classes.shrink}`
              : classes.filterSection
          }
        >
          <div className={classes.filterLabel} onClick={shrink('brands')}>
            Brands
          </div>
          <div className={classes.filterContent}>
            <div className={classes.filterOption}>
              <input
              ref={(getParameterByName('brand') === 'jbl') ? brandRef : null}
                value="jbl"
                onChange={filter('brands')}
                type="checkbox"
                id="jbl"
              />
              <label htmlFor="jbl">JBL</label>
            </div>
            <div className={classes.filterOption}>
              <input
                value="B&O"
                onChange={filter('brands')}
                type="checkbox"
                id="B&O"
              />
              <label onChange={filter('brands')} htmlFor="B&O">
                Bang & Olufsen
              </label>
            </div>
            <div className={classes.filterOption}>
              <input
              ref={(getParameterByName('brand') === 'sony') ? brandRef : null}
                value="sony"
                onChange={filter('brands')}
                type="checkbox"
                id="sony"
              />
              <label htmlFor="sony">Sony</label>
            </div>
            <div className={classes.filterOption}>
              <input
              ref={(getParameterByName('brand') === 'akai') ? brandRef : null}
                value="akai"
                onChange={filter('brands')}
                type="checkbox"
                id="akai"
              />
              <label htmlFor="akai">Akai</label>
            </div>
          </div>
        </div>
      </aside>
      <section className={classes.productsList}>
        {loading && <img  className={classes.loading} src={loadingGif} alt="loading.." />}
        
        {DISPLAYED_PRODUCTS?.map((product) => {
          return (
            <Product
              key={product.ID}
              productImage={product.photo}
              productName={product.full_name}
              productPrice={product.price}
              productID={product.ID}
            />
          );
        })}
      </section>
    </Container>
  );
}

export default Products;
