import classes from './ProductsTypes.module.scss'
import Container from '../UI/Container'
import ProductType from './ProductType'
import spekersPreview from '../assets/speker_preview.png'
import headphonesPreview from '../assets/headphone_preview.png'
import ampsPreview from '../assets/amp_preview.png'

function ProductsTypes() {
    return (
        <Container className={classes.productsTypes} >
            <ProductType preview={headphonesPreview} type="headphones" typeName="headphones"/>
            <ProductType preview={spekersPreview} type="speakers" typeName="speakers"/>
            <ProductType preview={ampsPreview} type="amps" typeName="amp's"/>
        </Container>
    )
}

export default ProductsTypes
