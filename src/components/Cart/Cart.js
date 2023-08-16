import classes from './Cart.module.css'
import CartItem from './CartItem/CartItem'
import Modal from '../UI/Modal/Modal'
import { useState, useContext, useReducer } from 'react'
import CartContext from '../store/cart-context'

// const cartItems = [{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }]

const Cart = props => {
  const cartCtx = useContext(CartContext)
  const items = cartCtx.cartItems
  const hasItems = items.length > 0
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;


  const cartItemAddHandler=(item)=>{
    cartCtx.addItem({...item, amount:1});
  }

  const cartItemRemoveHandler=(id)=>{
    cartCtx.removeItem(id);
  }
  return (
    <Modal onClose={props.onHideCart}>
      <ul className={classes['cart-items']}>
        {items.map(item => (
          <li>
            <CartItem
              key={item.id}
              name={item.name}
              amount={item.amount}
              price={item.price}
              onRemove={cartItemRemoveHandler.bind(null, item.id)}
              onAdd={cartItemAddHandler.bind(null, item)}
            />
          </li>
        ))}
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onHideCart}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  )
}

export default Cart
