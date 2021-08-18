import Header from './Layout/Header';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Home from './Pages/Home';
import Footer from './Layout/Footer';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Products from './Pages/Products';
import Product from './Pages/Product';
import Checkout from './Pages/Checkout';
import MyAccount from './Pages/MyAccount';
import MyOrders from './Pages/MyOrders';
import Order from './Pages/Order';
import OrderDetails from './Pages/OrderDetails';
import UserDetailsUpdate from './Components/UserDetailsUpdate';
import { auth } from './firebase';
import { useContext, useEffect, useState } from 'react';
import UserContext from './globalState';
import ScrollToTop from './ScrollToTop';

function App() {
  const [{user}, dispatchGlobal] = useContext(UserContext);
  const [username,setUsername] = useState(user?.displayName)
  const [showUpdate,setShowUpdate] = useState(false)
  const [errorLogin,setErrorLogin] = useState(false)
  const [inputsError,setInputsError] = useState(false)

  const onUsernameChangedHandler = (newUsername,show=false) =>{
    setUsername(newUsername);
    if(show){
      setShowUpdate(true)
      setTimeout(()=>{
        setShowUpdate(false)
      },4000)
    }
  }


  const loginFailedHandler = err =>{
    if(err){
      setErrorLogin(err.message)
      setTimeout(()=>{
        setErrorLogin(false)
      },4000)
    }
  }

  const inputsErrorHandler = error =>{
    
      setInputsError(error)
      setTimeout(()=>{
        setInputsError(false)
      },4000)
    
  }

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUsername(user.displayName);
        dispatchGlobal({ type: 'SET_USER', user: { ...user } });
      } else {
        dispatchGlobal({ type: 'SET_USER', user: null });
      }
    });

    const fromLocal = localStorage.getItem('stored') ? JSON.parse(localStorage.getItem('stored')) : null;

    if(fromLocal){
      dispatchGlobal({type:"SET_FROM_LOCAL", store:fromLocal})
    }
    
  }, [dispatchGlobal]);

  return (
    <> 
    {showUpdate && <UserDetailsUpdate text="User details succesfully updated" color="green" />}
    {errorLogin && <UserDetailsUpdate text={errorLogin} color="red" />}
    {inputsError && <UserDetailsUpdate text={inputsError} color="red" />}
      <Router>
        <ScrollToTop />
        <Header user={username}/>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/login">
            <Login loginFailed={loginFailedHandler} />
          </Route>
          <Route path="/signup">
            <Signup signUpFailed={loginFailedHandler} onUsernameChanged={onUsernameChangedHandler} />
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
          <Route path="/myaccount">
            <MyAccount onUsernameChanged={onUsernameChangedHandler} />
          </Route>
          <Route path="/myorders" exact>
            <MyOrders/>
          </Route>
          <Route path="/placeorder">
            <OrderDetails inputsError={inputsErrorHandler} />
          </Route>
          <Route path="/myorders/:orderID">
            <Order/>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
