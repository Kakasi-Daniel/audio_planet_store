import Header from './Layout/Header'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './Pages/Home'
import Footer from './Layout/Footer'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Products from './Pages/Products'
import {auth} from './firebase'
import {useContext,useEffect} from 'react'
import UserContext from './globalState';

function App() {

  const [,dispatchGlobal] = useContext(UserContext)

  useEffect(()=>{
    auth.onAuthStateChanged((user) => {
      if(user){
        dispatchGlobal({type:'SET_USER',user:user})
      }else{
        dispatchGlobal({type:'SET_USER',user:null})
      }
    })
  },[])

  return <>
  <Router>
    <Header/>
    <Switch>
    <Route path="/" exact>
      <Home/>
    </Route>
    <Route path="/login">
      <Login/>
    </Route>
    <Route path="/signup" >
      <Signup/>
    </Route>
    <Route path="/products" exact>
      <Products/>
    </Route>
    <Route path="/products/:productID">
    </Route>
    <Route path="/checkout">
    </Route>
    </Switch>
    <Footer/>
  </Router>
    
  </>;
}

export default App;
