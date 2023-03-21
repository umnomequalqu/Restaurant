import classes from './Cart.module.css'
import Modal from '../UI/Modal'
import {useContext} from "react";
import cartContext from "../../store/cart-context";
const Cart = props =>{
    const cartCtx = useContext(cartContext);
    const totalAmount = `R$${cartCtx.totalAmount.toFixed(2)}`

    const hasItems = cartCtx.items.lenght > 0 ;
    const cartItems = 
    <ul className={classes['cart-items']}>
        {cartCtx.items.map((item)=>(<li key={item.id}>{item.name}</li>))}</ul>
return(
    <>
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{
                totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button 
                className={classes['button--alt']}
                onClick={props.onClose} 
                >
                    Close
                    </button>
                    {hasItems && <button className={classes.button} >Order</button>}
            </div>
        </Modal>
    </>
)
}

export default Cart