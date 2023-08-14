import React, { useState, useEffect, useContext } from 'react';
import classes from './MealItemForm.module.css';
import Input from '../../UI/Input/Input';

const MealItemForm=(props)=>{
    const [enteredAmount, setEnteredAmount] = useState(1);
    

    useEffect(()=>{
        const mealPrice=enteredAmount*props.price;
    },[enteredAmount]);


    const amountChangeHandler = event => {
        setEnteredAmount(event.target.value)
    }

    const submitHandler=(event)=>{
        event.preventDefault();
        const mealData={
            amount: enteredAmount,
            
        };
    
    props.onSubmit(mealData)
    setEnteredAmount(1);
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input 
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
        </form>
    )
}

export default MealItemForm;