import classes from './HeaderCartButton.module.css';
import React from 'react';
import { useState } from 'react';
import { Fragment } from 'react';
import CartIcon from '../../Cart/CartIcon.js'
import Modal from '../../UI/Modal/Modal'

const HeaderCartButton=(props)=>{


    return(
        <React.Fragment>
            <button className={classes['button']} onClick={props.onClick}>
                <span className={classes['icon']}><CartIcon /></span>
                <span>Your Cart</span>
                <span className={classes['badge']}>3</span>
                </button>
        </React.Fragment>

    )
}

export default HeaderCartButton;
