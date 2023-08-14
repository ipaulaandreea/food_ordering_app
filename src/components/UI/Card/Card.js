import classes from './Card.module.css'
import react from 'react';
import { Fragment } from 'react';

const Card = (props) =>{
    return (
        <div className={classes['card']}>{props.children}</div>
    )
}

export default Card;