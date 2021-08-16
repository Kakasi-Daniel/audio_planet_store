import classes from './MyAccount.module.scss';
import { auth,database } from '../firebase';
import Container from '../UI/Container';
import { useState,useEffect } from 'react';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import SendIcon from '@material-ui/icons/Send';
import EmailIcon from '@material-ui/icons/Email';
import {useHistory} from 'react-router-dom';
import {useContext} from 'react'
import globalContext from '../globalState';
import {getUserDetailsByID} from '../http';

function MyAccount({onUsernameChanged}) {
  const [emailSent, setEmailSent] = useState(false);
  const sendVerificationEmail = () => {
    auth.currentUser.sendEmailVerification();
    setEmailSent(true);
  };
  const [{user},dispatch] = useContext(globalContext)

  const history = useHistory()

  const [inputs, setInputs] = useState({
      personal:{
        name:"",
        phone: ""
      },
      details: {
        county: "",
        city: "",
        address: "",
        postal: ""
      }
  })

  useEffect(() => {
    

    if(user){
        getUserDetailsByID(user.uid).then(data =>{
            setInputs({
                personal:{
                    name: user.displayName,
                    phone: data?.phone || ""
                  },
                  details: {
                    county: data?.county || "",
                    city: data?.city || "",
                    address: data?.address || "",
                    postal: data?.postal || ""
                  }
            })
        })
    }

    
        
  }, [user])

  

  const onSubmitHandler = (e) => {
      e.preventDefault()

    auth.currentUser.updateProfile({
        displayName: inputs.personal.name,
      }).then(() => {
        onUsernameChanged(inputs.personal.name,true)
      }).catch((error) => {
        console.log('there was an error')
      });

      database.ref('users/' + auth.currentUser.uid+"/userDetails").set({
        phone: inputs.personal.phone,
        county: inputs.details.county,
        city: inputs.details.city,
        address: inputs.details.address,
        postal: inputs.details.postal
      }, (error) => {
        if (error) {
          console.log('updateing user detail failed' + error)
        } else {
          console.log("user details saved")
        }
      });
      history.push('/')
  }

  const onInputChangeGenerator = (type,field) => {
      return function (e){
          setInputs(prevInputs =>{

            const newType = {...prevInputs[type]}
            newType[field] = e.target.value

              return {
                    ...prevInputs,
                    [type]:{
                        ...newType
                    }
                  }
              })
          }
      }
  

  return (
    <Container className={classes.myAccountPage}>
      {auth.currentUser && 
      <>
        <h2>Here you can change your account details for future orders</h2>
        <div className={classes.emailVerification}>
          {auth.currentUser?.emailVerified ? (
            <h2 className={classes.emailVerified}>You email is verified! &nbsp; <VerifiedUserIcon/></h2>
          ) : (
            <div className={classes.sendEmail}>
              <h2 className={classes.emailNotVerified}>
                Your email is not verified!
              </h2>
              {!emailSent ? (
                <button className={classes.sendEmailBtn} onClick={sendVerificationEmail}>
                    <EmailIcon/>&nbsp;
                  Send verification email
                  &nbsp;
                  <SendIcon/>
                </button>
              ) : (
                <h2 className={classes.emailSent} >Verification email has been sent</h2>
              )}
            </div>
          )}
        </div>

        <form onSubmit={onSubmitHandler} className={classes.userDetails} >
                <label  className={classes.inputLabel} htmlFor="name">
                    Name
                    <input 
                    onChange={onInputChangeGenerator("personal","name")}
                    value={inputs.personal.name}
                    placeholder="Chuck Norris"
                    id="name" type="name" />
                </label>
                <label  className={classes.inputLabel} htmlFor="phone">
                    Phone number
                    <input 
                    onChange={onInputChangeGenerator("personal","phone")}
                    value={inputs.personal.phone}
                    placeholder="07xxxxxxxx"
                    id="phone" type="tel" />
                </label>
                <label  className={classes.inputLabel} htmlFor="county">
                    County
                    <input 
                    onChange={onInputChangeGenerator("details","county")}
                    value={inputs.details.county}
                    placeholder="Cluj"
                    id="county" type="county" />
                </label>
                <label  className={classes.inputLabel} htmlFor="city">
                    City
                    <input 
                    onChange={onInputChangeGenerator("details","city")}
                    value={inputs.details.city}
                    placeholder="Cluj-Napoca"
                    id="city" type="city" />
                </label>
                <label  className={classes.inputLabel} htmlFor="address">
                    Address
                    <input 
                    onChange={onInputChangeGenerator("details","address")}
                    value={inputs.details.address}
                    placeholder="street nr. bl."
                    id="address" type="address" />
                </label>
                <label  className={classes.inputLabel} htmlFor="postal">
                    Postal code
                    <input 
                    onChange={onInputChangeGenerator("details","postal")}
                    value={inputs.details.postal}
                    placeholder="407035"
                    id="postal" type="postal" />
                </label>
                <button  className={classes.submitBtn} type="submit" >Save account details</button>
        </form>
        </>
      }
    </Container>
  );
}

export default MyAccount;
