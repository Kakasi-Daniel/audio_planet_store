
import classes from './Signup.module.scss';

import { Link ,useHistory} from 'react-router-dom';
import { auth } from '../firebase';
import { useState,useContext } from 'react';
import globalContext from '../globalState';

function Signup({onUsernameChanged,signUpFailed}) {

    const [,dispatch] = useContext(globalContext);


    let history = useHistory();
  const [inputs, setInputs] = useState({
    username: '',
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

  const submitHandler = (e) => {
    e.preventDefault();

    if(inputs.username.trim().length > 5){
      auth.createUserWithEmailAndPassword(inputs.email, inputs.password)
      .then((userCredential) => {
        auth.currentUser.updateProfile({
            displayName: inputs.username,
          }).then(() => {
            dispatch({type:'SET_USER',user: auth.currentUser})
            onUsernameChanged(inputs.username)
            history.replace('/myaccount')
          }).catch((error) => {
            console.log('username change error')
          });  
          
      })
      .catch((error) => {
        signUpFailed(error)
      });
    }else{
      signUpFailed({message:"Username should be at least 6 charachters long!"})
    }
  };

  return (
    <div className={classes.loginContainer}>
      <div>
        <div className={classes.logo}>
          <img src="https://media0.giphy.com/media/RMTQiRYAuvvJb1k6al/giphy.gif" alt="logo" />
        </div>
        <h2>Join the greatest audiophile community</h2>
        <form onSubmit={submitHandler}>
          <div className={classes.inputContainer}>
            <label htmlFor="name">Enter your name:</label>
            <input
              value={inputs.username}
              onChange={changeHandle('username')}
              placeholder="John Doe"
              id="name"
              type="name"
            />
          </div>
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
            <label htmlFor="password">Create a password:</label>
            <input
              value={inputs.password}
              onChange={changeHandle('password')}
              placeholder="StRoNgPassWord3152"
              id="password"
              type="password"
            />
          </div>
          <p>
            Aleardy have an account{' '}
            <Link to="/login">Log in into your existing account</Link>
          </p>
          <button type="submit">Sign up</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
