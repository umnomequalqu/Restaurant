import CartIcon from "../Cart/Carticon"
import classes from './HeaderCartButton.module.css'
import { useContext } from "react"
import CartContext from "../../store/cart-context"
const HeaderCartButton = props =>{
    const cartCtx = useContext(CartContext);
    const numberOfCartItems = cartCtx.items.reduce((curNumber,item)=>{
        return curNumber + item.amount
    },0);
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