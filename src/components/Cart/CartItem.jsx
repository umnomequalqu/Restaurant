import React from 'react'
import classes from './cartItem.module.css'
function CartItem(props) {
    const price = 'r$${props.price.toFixed(2)}';
    return(
        <li className={classes['cart-item']}>
            <h2>{props.name}</h2>
            <div className={classes.summary}>
                <span className={classes.price}>{price}</span>
                <span className={classes.price}>x {props.amount}</span>
            </div>
            <div className={classes.actions}>
                <button onClick={props.onRemove}>-</button>
                <button onClick={props.onAdd}>+</button>
            </div>
        </li>


    
    )
    }
    export default CartItem
