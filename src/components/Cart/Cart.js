import classes from './Cart.module.css'
import CartItem from './CartItem/CartItem'
import Modal from '../UI/Modal/Modal'
import { useState, useContext } from 'react';
import CartContext from '../store/cart-context'

const cartItems = [{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }]

const Cart = props => {
  const cartCtx = useContext(CartContext)
    const [count, setCount]=useState(0);

    const addItemHandler=(event)=>{
        event.preventDefault();
        setCount(count + 1 )

    }

    const removeItemHandler=(event)=>{
        event.preventDefault();
        setCount(count - 1 )
    }


  // const cartItems=localStorage.getitem('cart');

  return (
    <Modal onClose={props.onHideCart}>
      <ul className={classes['cart-items']}>
        {cartItems.map(cartItem => (
          <li>
            <CartItem onRemove={removeItemHandler} onAdd={addItemHandler}
            amount={cartItem.amount}
              name={cartItem.name}
              price={cartItem.price}
             
            />
          </li>
        ))}
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  )
}

export default Cart
