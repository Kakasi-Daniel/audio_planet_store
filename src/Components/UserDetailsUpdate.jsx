import classes from './UserDetailsUpdate.module.scss'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';

function UserDetailsUpdate({text,color}) {
    return (
        <div className={classes.notification + " " + classes[color]} >
            <p>{text}</p>
            <VerifiedUserIcon/>
        </div>
    )
}

export default UserDetailsUpdate
