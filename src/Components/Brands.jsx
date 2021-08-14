import classes from './Brands.module.scss';
import ProductLink from '../UI/ProductLink';
import Container from '../UI/Container';

function Brands() {
  return (
    <Container>
      <div className={classes.brands}>
        <section className={classes.sony}>
          <div className={classes.description}>
            <h2>Sony's new speakers generation</h2>
            <ProductLink className="fit" productID="?brand=sony" />
          </div>
        </section>
        <section className={classes.jbl}>
          <div className={classes.description}>
            <h2>&nbsp;JBL's performance headphones</h2>
            <ProductLink className="fit" productID="?brand=jbl" />
          </div>
        </section>
        <section className={classes.akai}>
          <div className={classes.description}>
            <h2>Akai's powerful amplifiers</h2>
            <ProductLink className="fit" productID="?brand=akai" />
          </div>
        </section>
      </div>
    </Container>
  );
}

export default Brands;
