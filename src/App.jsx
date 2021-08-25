import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import UserDetailsUpdate from './Components/UserDetailsUpdate';
import { auth } from './firebase';
import { useContext, useEffect, useState, lazy, Suspense } from 'react';
import UserContext from './globalState';
import ScrollToTop from './ScrollToTop';
import loading from './assets/loading.gif';

import Header from './Layout/Header';
import Footer from './Layout/Footer';

//Pages
import Home from './Pages/Home';
const Login = lazy(() => import('./Pages/Login'));
const Signup = lazy(() => import('./Pages/Signup'));
const Products = lazy(() => import('./Pages/Products'));
const Product = lazy(() => import('./Pages/Product'));
const Checkout = lazy(() => import('./Pages/Checkout'));
const MyAccount = lazy(() => import('./Pages/MyAccount'));
const MyOrders = lazy(() => import('./Pages/MyOrders'));
const Order = lazy(() => import('./Pages/Order'));
const OrderDetails = lazy(() => import('./Pages/OrderDetails'));

function App() {
  const [{ user }, dispatchGlobal] = useContext(UserContext);
  const [username, setUsername] = useState(user?.displayName);
  const [showUpdate, setShowUpdate] = useState(false);
  const [errorLogin, setErrorLogin] = useState(false);
  const [inputsError, setInputsError] = useState(false);

  const onUsernameChangedHandler = (newUsername, show = false) => {
    setUsername(newUsername);
    if (show) {
      setShowUpdate(true);
      setTimeout(() => {
        setShowUpdate(false);
      }, 4000);
    }
  };

  const loginFailedHandler = (err) => {
    if (err) {
      setErrorLogin(err.message);
      setTimeout(() => {
        setErrorLogin(false);
      }, 4000);
    }
  };

  const inputsErrorHandler = (error) => {
    setInputsError(error);
    setTimeout(() => {
      setInputsError(false);
    }, 4000);
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUsername(user.displayName);
        dispatchGlobal({ type: 'SET_USER', user: { ...user } });
      } else {
        dispatchGlobal({ type: 'SET_USER', user: null });
      }
    });

    const fromLocal = localStorage.getItem('stored')
      ? JSON.parse(localStorage.getItem('stored'))
      : null;

    if (fromLocal) {
      dispatchGlobal({ type: 'SET_FROM_LOCAL', store: fromLocal });
    }
  }, [dispatchGlobal]);

  return (
    <>
      {showUpdate && (
        <UserDetailsUpdate
          text="User details succesfully updated"
          color="green"
        />
      )}
      {errorLogin && <UserDetailsUpdate text={errorLogin} color="red" />}
      {inputsError && <UserDetailsUpdate text={inputsError} color="red" />}
      <Router>
        <ScrollToTop />
        <Header user={username} />
        <Suspense
          fallback={
            <div className="centeredSpinner">
              <img src={loading} alt="loading..." />
            </div>
          }
        >
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>

            <Route path="/products" exact>
              <Products />
            </Route>
            <Route path="/products/:productID">
              <Product />
            </Route>
            <Route path="/checkout">
              <Checkout />
            </Route>

            <Route path="/placeorder">
              <OrderDetails inputsError={inputsErrorHandler} />
            </Route>

           {!user && <Route path="/login">
              <Login loginFailed={loginFailedHandler} />
            </Route>}

            {!user && <Route path="/signup">
              <Signup
                signUpFailed={loginFailedHandler}
                onUsernameChanged={onUsernameChangedHandler}
              />
            </Route>}

            {user && <Route path="/myaccount">
              <MyAccount onUsernameChanged={onUsernameChangedHandler} />
            </Route>}

           {user &&  <Route path="/myorders" exact>
              <MyOrders />
            </Route>}

            {user && <Route path="/myorders/:orderID">
              <Order />
            </Route>}

            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </Suspense>
        <Footer />
      </Router>
    </>
  );
}

export default App;
