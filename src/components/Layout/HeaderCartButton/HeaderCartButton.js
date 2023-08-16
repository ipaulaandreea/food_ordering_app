import classes from './HeaderCartButton.module.css'
import React from 'react'
import { useState, useContext, useEffect } from 'react'
import { Fragment } from 'react'
import CartIcon from '../../Cart/CartIcon.js'
import Modal from '../../UI/Modal/Modal'
import CartContext from '../../store/cart-context'

const HeaderCartButton = props => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false)

  const cartCtx = useContext(CartContext)
  const { cartItems } = cartCtx
  const nrItems = cartCtx.cartItems.reduce((currentAmount, item) => {
    return currentAmount + item.amount
  }, 0)

  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`
  useEffect(() => {
    if (cartItems.length === 0) {
      return
    }
    setBtnIsHighlighted(true)

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false)
    }, 300)
    return () => {
      clearTimeout(timer)
    }
  }, [cartItems])

  return (
    <React.Fragment>
      <button className={btnClasses} onClick={props.onClick}>
        <span className={classes['icon']}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes['badge']}>{nrItems}</span>
      </button>
    </React.Fragment>
  )
}

export default HeaderCartButton
