import React, { useState, useReducer, useContext, useRef } from 'react';
import classes from './MealItemForm.module.css';
import Input from '../../UI/Input/Input';
import CartContext from '../../store/cart-context';

const MealItemForm=(props)=>{
    const amountInputRef=useRef();
    const [isValid, setIsValid]=useState(true)

    const submitHandler=(event)=>{
        event.preventDefault();
        const enteredAmount=amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;
        
        if (enteredAmount.trim().length===0 || enteredAmountNumber<1 || enteredAmountNumber>5){
            setIsValid(false);
            return;
        }
        else{
            props.onAddToCart(enteredAmountNumber);
        }
    }

    

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input 
                ref={amountInputRef}
                label="Amount" 
                input={{
                    id:'amount_' + props.id, 
                    type: 'number', 
                    min: '1',
                    max:'5', 
                    step:'1', 
                    defaultValue:'1', 
                }} 
                />
        <button className={classes.button} type='submit'>+ Add</button>
        {!isValid && "Please select an appropriate amount"}
        </form>
    )
}

export default MealItemForm;