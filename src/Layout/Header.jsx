import classes from './Header.module.scss';
import Container from '../UI/Container';
import logo from '../assets/logo.png';
import { NavLink, Link,useHistory } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useContext,useEffect } from 'react';
import globalContext from '../globalState';
import {auth} from '../firebase'
import { useState } from 'react';

function Header({user}) {
  const [{basketItems },] = useContext(globalContext);
  const [scrolled, setScrolled] = useState('')
  useEffect(() => {
    window.onscroll = e =>{
      if(window.scrollY > 300){
        setScrolled('scrolled')
      }else{
        setScrolled('')
      }
    }
  }, [])

  const history = useHistory();

  let navClasses = classes.nav
  if(scrolled){
    navClasses += " "+classes.scrolled
  }else{
    navClasses = classes.nav
  }

  return (
    <nav className={navClasses}>
      <Container className={classes.navbar}>
        <Link to="/" className={classes.logo}>
          <img src={logo} alt="logo" />
        </Link>
        <div className={classes.navMenu}>
          <ul>
            <li>
              <NavLink
                exact
                className={classes.navLink}
                activeClassName={classes.active}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                className={classes.navLink}
                activeClassName={classes.active}
                to="/products"
              >
                Products
              </NavLink>
            </li>
          </ul>
        </div>
        <div className={classes.userMenu}>
          {auth.currentUser ? (
            <div className={classes.accountDropdown}>
              <div className={classes.account}>
                <AccountCircleIcon />
                {user}
                <ExpandMoreIcon />
              </div>
              <div className={classes.accountDropdownMenu}>
                <ul>
                  <li>
                    <Link to="/myaccount">My account</Link>
                  </li>
                  <li>
                    <Link to="/myorders">My orders</Link>
                  </li>
                  <li>
                    <button  onClick={() => {
                      history.push('/')
                      auth.signOut()
                      }} className={classes.logout}>Log out</button>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <>
              <Link
                to="/login"
                className={classes.btn + ' ' + classes.btnLogin}
              >
                Log in
              </Link>
              <Link
                to="/signup"
                className={classes.btn + ' ' + classes.btnSignup}
              >
                Sign up
              </Link>
            </>
          )}
          <Link to="/checkout" className={classes.cartIcon}>
            <ShoppingCartIcon className={classes.white} />
            {basketItems!==0 && <span className={classes.basketall}>{basketItems}</span>}
          </Link>
        </div>
      </Container>
    </nav>
  );
}

export default Header;
