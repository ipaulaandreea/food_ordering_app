import CartContext from './cart-context'

const CartProvider = props => {


  //   useEffect(() => {
  //     const storedCartItems = localStorage.getItem('cart')

  //     if (storedCartItems === '') {
  //       setIsLoggedIn(true)
  //     }
  //   }, [])

  const addItemToCartHandler = item => {}

  const removeItemFromCartHandler = id => {}

  const cartContext = {
    cartItems: [],
    amount: 0,
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
