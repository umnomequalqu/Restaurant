import CartIcon from "../Cart/Carticon"
import classes from './HeaderCartButton.module.css'
const HeaderCartButton = props =>{
    return(
        <button className={classes.button} onClick={props.onShowCart}>
            <span className={classes.icon}><CartIcon/>
            </span >
            <span>Your Cart</span>
            <span className={classes.badge}>4444</span>
        </button>
    )
}
export default HeaderCartButton