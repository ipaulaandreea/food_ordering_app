import react from 'react' 
import { Fragment } from 'react';
import classes from './MealItem.module.css';
import Card from '../../UI/Card/Card';

const MealItem=(props)=>{
    return (
        <li className={classes['meal']}>
            <div> 
                <h3 className={classes['meal']['h3']}>{props.name}</h3>
                <div className={classes['description']}>{props.description}</div>
                <div className={classes['price']}>${props.price}</div>
            </div>
            <div></div>
        </li>
    )
}

export default MealItem;