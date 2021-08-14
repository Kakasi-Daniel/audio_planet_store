import classes from './Footer.module.scss';
import Container from '../UI/Container'
import logo from '../assets/logo.png'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import EmailIcon from '@material-ui/icons/Email';

function Footer() {
    return (
        <footer className={classes.footer} >
            <Container className={classes.footerSections} >
                <div className={classes.left}>
                    <div className={classes.logo} >
                        <img draggable='false' src={logo} alt="logo_foote" />
                    </div>
                    <p>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
                    <p>
                        fake ecommerce app by Daniel Kakasi &copy;
                    </p>
                </div>
                <div className={classes.right}>
                    <div className={classes.social}>
                        <a href="/"><TwitterIcon/></a>
                        <a href="/"><InstagramIcon/></a>
                        <a href="/"><PinterestIcon/></a>
                        <a href="/"><WhatsAppIcon/></a>
                        <a href="/"><EmailIcon/></a>  
                        <a href="/"><FacebookIcon/></a>  
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer
