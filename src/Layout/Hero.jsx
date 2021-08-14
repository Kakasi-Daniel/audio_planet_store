import classes from './Hero.module.scss';
import headphones from '../assets/leather_headphones.png'
import Container from '../UI/Container'
import ProductLink from '../UI/ProductLink'

function Hero() {
    return (
       <div className={classes.hero} >
           <Container className={classes.sides} >
           <div className={classes.heroText}>
               <p className={classes.newProduct}>NEW PRODUCT</p>
               <h1>
               <span>Bang & Olufsen</span> new leather headphones
               </h1>
               <p className={classes.description} >
               Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
               </p>
               <ProductLink className={classes.fit} productID='/bangleather'/>
           </div>
           <div className={classes.heroImage}>
            <img draggable='false' src={headphones} alt="headphones" />
           </div>
           </Container>
       </div>
    )
}

export default Hero
