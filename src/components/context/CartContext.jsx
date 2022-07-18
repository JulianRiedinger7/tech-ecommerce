
import React, { createContext, useEffect, useState } from 'react'

export const CartContext = createContext()
const { Provider } = CartContext


export const CartProvider = ({children}) => {
  const [products, setProducts] = useState([])
  const [quantity, setQuantity] = useState(0)

  const getTotalQuantity = () => {
    const qty = products.reduce((acc,product) => acc + product.quantity,0)
    setQuantity(qty)
  }

  useEffect(()=>{
    getTotalQuantity()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[products])

  const addItem = (item, quantity) =>{
    const productToAdd = {
      ...item,
      quantity
    }

    if(isInCart(productToAdd.id)){
      const productsCopy = [...products]
      const equalProduct = productsCopy.find(product => product.id === productToAdd.id)
      equalProduct.quantity += productToAdd.quantity
      setProducts(productsCopy)

    } else setProducts(prevProducts => [...prevProducts, productToAdd]) 
  }

  const removeItem = itemId => setProducts(prevProducts => prevProducts.filter(product => product.id !== itemId))
  
  const clear = () => {
    setProducts([])
    setQuantity(0)
  }

  const isInCart = id => products.some(product => product.id === id)

  const addDiscount = (price, discountPercentage) => Math.round(price - (price * discountPercentage / 100))

  return (
    <Provider value={{products, addItem, removeItem, clear, addDiscount, quantity}}>
      {children}
    </Provider>
  )
}
