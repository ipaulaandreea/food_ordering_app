import CartContext from './cart-context'
import { useReducer } from 'react';

const defaultCart={
  items:[],
  totalAmount:0
}
const cartReducer=(state, action ) => {
  if (action.type==='ADD_ITEM') {
    const updatedAmount=state.totalAmount+action.item.amount*action.item.price

    const existingCartItemIndex=state.items.findIndex((item)=>item.id===action.item.id)
    const existingCartItem=state.items[existingCartItemIndex];
    let updatedItems;

    if (existingCartItem){
      const updatedItem={
        ...existingCartItem, amount: action.item.amount+existingCartItem.amount
      };
      updatedItems=[...state.items];
      updatedItems[existingCartItemIndex]=updatedItem;
    }

    else {
      updatedItems=state.items.concat(action.item)
    }
    
    return {
      items: updatedItems,
      totalAmount: updatedAmount
    }
  }

  if (action.type==='REMOVE_ITEM') {
    const existingCartItemIndex=state.items.findIndex((item)=>item.id===action.id)
    const existingCartItem=state.items[existingCartItemIndex];
    const updatedAmount=state.totalAmount-existingCartItem.price
    let updatedItems;

    if (existingCartItem.amount===1) {
      updatedItems=state.items.filter(item=>item.id !==action.id);
    }
    else {
      const updatedItem={...existingCartItem, amount: existingCartItem.amount-1}
      updatedItems=[...state.items];
      updatedItems[existingCartItemIndex]=updatedItem;



    }
    return {
      items: updatedItems,
      totalAmount: updatedAmount
    }

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
    totalAmount: cartState.totalAmount,
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
