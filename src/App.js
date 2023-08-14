import React, { useState, useContext } from 'react'
import { Fragment } from 'react'
import Header from './components/Layout/Header/Header'
import Meals from './components/Meals/Meals'
import Modal from './components/UI/Modal/Modal'
import Cart from './components/Cart/Cart'
import CartProvider from './components/store/CartProvider'
import CartContext from './components/store/cart-context'

function App () {
  const [displayCart, setDisplayCart] = useState(false)

  const displayCartHandler = () => {
    setDisplayCart(true)
  }

  const hideCartHandler = () => {
    setDisplayCart(false)
  }

  return (
    <CartProvider>
      {displayCart && <Cart onHideCart={hideCartHandler} />}
      <Header onDisplayCart={displayCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  )
}

export default App
