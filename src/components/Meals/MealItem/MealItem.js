import react, { useState, useContext } from 'react'
import { Fragment } from 'react'
import classes from './MealItem.module.css'
import Card from '../../UI/Card/Card'
import MealItemForm from '../MealItemForm/MealItemForm'
import CartContext from '../../store/cart-context'

const MealItem = props => {
  const cartCtx = useContext(CartContext)
  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: props.id,
      amount: amount,
      price: props.price,
      name: props.name
    })
  }

  return (
    <li className={classes['meal']}>
      <div>
        <h3 className={classes['meal']['h3']}>{props.name}</h3>
        <div className={classes['description']}>{props.description}</div>
        <div className={classes['price']}>${props.price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  )
}

export default MealItem
