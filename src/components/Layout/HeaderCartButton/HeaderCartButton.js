import classes from './HeaderCartButton.module.css';
import React from 'react';
import { useState, useContext } from 'react';
import { Fragment } from 'react';
import CartIcon from '../../Cart/CartIcon.js'
import Modal from '../../UI/Modal/Modal'
import CartContext from '../../store/cart-context';

const HeaderCartButton=(props)=>{

    const cartCtx=useContext(CartContext);
    const nrItems=cartCtx.cartItems.reduce((currentAmount, item)=>{return currentAmount + item.amount}, 0)

    return(
        <React.Fragment>
            <button className={classes['button']} onClick={props.onClick}>
                <span className={classes['icon']}><CartIcon /></span>
                <span>Your Cart</span>
                <span className={classes['badge']}>{nrItems}</span>
                </button>
        </React.Fragment>

    )
}

export default HeaderCartButton;
