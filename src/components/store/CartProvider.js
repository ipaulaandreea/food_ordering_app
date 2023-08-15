import CartContext from './cart-context'
import { useReducer } from 'react';

const defaultCart={
  items:[],
  amount:0
}
const cartReducer=(state, action ) => {
  if (action.type='ADD_ITEM') {
    const updatedItems=state.items.concat(action.item)
    const updatedAmount=state.amount+action.item.amount*action.item.price
    return {
      items: updatedItems,
      amount: updatedAmount
    }
  }

  if (action.type='REMOVE_ITEM') {
    return;

  }

}

const CartProvider = props => {

  
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCart)


  const addItemToCartHandler = item => {
    dispatchCartAction({ type: 'ADD_ITEM', item: item})

  }

  const removeItemFromCartHandler = id => {
    dispatchCartAction({ type: 'REMOVE_ITEM', id: id})

  }

  const cartContext = {
    cartItems: cartState.items,
    cartAmount: cartState.amount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler
  }

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
}
export default CartProvider
