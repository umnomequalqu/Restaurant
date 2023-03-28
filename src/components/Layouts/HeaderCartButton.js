import CartIcon from "../Cart/Carticon"
import classes from './HeaderCartButton.module.css'
import { useContext, useEffect, useState } from "react"
import CartContext from "../../store/cart-context"
const HeaderCartButton = props =>{
    const cartCtx = useContext(CartContext);
    const numberOfCartItems = cartCtx.items.reduce((curNumber,item)=>{
        return curNumber + item.amount
    },0);
    const [btnIsHigh,setBtnIsHigh] = useState(false);
    const btnClasses = `${classes.button} ${ btnIsHigh ? classes.bump : ''}`;
    const {items} = cartCtx
    useEffect(()=>{
        if(items.lenght === 0){
            return
        }
        setBtnIsHigh(true);

        const timer = setTimeout(()=>{
            setBtnIsHigh(false);
        },300)
        return ()=>{
            clearTimeout(timer);
        }
    },[items])
    return(
        <button className={btnClasses} onClick={props.onShowCart}>
            <span className={classes.icon}><CartIcon/>
            </span >
            <span>Your Cart</span>
            <span className={classes.badge}>{
                numberOfCartItems
            }</span>
        </button>
    )
}
export default HeaderCartButton