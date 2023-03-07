import classes from './MealItem.module.css'
import MealItemForm from './MealForm';
const MealItem= props =>{

    const price = `R$${props.price.toFixed(2)}`;

    return(
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div classname={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
                </div>
            <div><MealItemForm/></div>
        </li>
    )
}

export default MealItem;