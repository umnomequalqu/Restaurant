import classes from './MealForm.module.css'
import Input from '../../UI/Input'
import {useRef,useState} from 'react';
const MealItemForm = props=>{
    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef();
    function submitHandler(event){
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;
        if(
            enteredAmount.trim().lenght === 0 ||
            enteredAmountNumber < 1 ||
            enteredAmountNumber > 10 ){
                setAmountIsValid(false);
                return;
            }
            props.onAddToCart(enteredAmountNumber);
    }
    return(
        <>
         <form className={classes.form} onSubmit={submitHandler}>
            <Input
            ref={amountInputRef}
            label="Amount"
            input={{
                id: 'amount',
                type: 'number',
                min: '1',
                max: '10',
                step: '1',
                defaultValue:'1',
            }}
            />
            <button> Add</button>
            {!amountIsValid &&<p>Só é possível colocar números de 1 a 10</p>}
         </form>
        </>
    )
}

export default MealItemForm