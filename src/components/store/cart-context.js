import React, { useState, useEffect } from 'react'

const CartContext = React.createContext({
  cartItems: [],
  cartAmount: 0,
  addItem: item => {},
  removeItem: id => {}
})

export default CartContext
