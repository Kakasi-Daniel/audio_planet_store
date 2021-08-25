import classes from './Login.module.scss'
import logo from '../assets/logo.png'
import { Link ,useHistory} from 'react-router-dom';
import {auth} from '../firebase'
import {useState} from 'react'

function Login({loginFailed}) {
    let history = useHistory();
    const [inputs, setInputs] = useState({
        email: '',
        password: '',
      });
    
      const changeHandle = (type) => {
        return function (e) {
          setInputs((prev) => {
            return {
              ...prev,
              [type]: e.target.value,
            };
          });
        };
      };

    const submitHandler = e =>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(inputs.email, inputs.password)
  .then((userCredential) => {
    console.log('login succes')
    history.replace('/')
  })
  .catch((error) => {
    loginFailed(error)
  });

    }

    return (
        <div className={classes.loginContainer} >
            <div>
                <div className={classes.logo}>
                    <img src={logo} alt="logo" />
                </div>
            <h2>Log in into you account</h2>
            <form onSubmit={submitHandler} >
                <div className={classes.inputContainer}>
                    <label htmlFor="email">Enter your email:</label>
                    <input
              value={inputs.email}
              onChange={changeHandle('email')}
              placeholder="example@host.com"
              id="email"
              type="email"
            />
                </div>
                <div className={classes.inputContainer}>
                    <label htmlFor="pass">Enter your password:</label>
                    <input
              value={inputs.password}
              onChange={changeHandle('password')}
              placeholder="StRoNgPassWord3152"
              id="pass"
              type="password"
            />
                </div>
                <p>Don't have an account? <Link to='/signup'>Create new account</Link></p>
                <button type="submit" >Login</button>
            </form>
            </div>
        </div>
    )
}

export default Login
