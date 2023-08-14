import react, { useState, useContext } from 'react' 
import { Fragment } from 'react';
import classes from './MealItem.module.css';
import Card from '../../UI/Card/Card';
import MealItemForm from '../MealItemForm/MealItemForm';

const MealItem=(props)=>{

    const [addingToCart, setAddingToCart]=useState('false')
    const submitHandler=(enteredOrderItem)=>{
        const orderData={
            ...enteredOrderItem
        }
        props.onAddToCart(enteredOrderItem); 

    }
    return (
        <li className={classes['meal']}>
            <div> 
                <h3 className={classes['meal']['h3']}>{props.name}</h3>
                <div className={classes['description']}>{props.description}</div>
                <div className={classes['price']}>${props.price}</div>
            </div>
            <div><MealItemForm onSubmit={submitHandler} /></div>
        </li>
    )
}

export default MealItem;