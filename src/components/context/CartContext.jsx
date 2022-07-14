
import React, { createContext, useState } from 'react'

export const CartContext = createContext()
const { Provider } = CartContext


export const CartProvider = ({children}) => {
  const [products, setProducts] = useState([])

  const addItem = (item, quantity) =>{
    console.log('se agrego un producto');
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

  const removeItem = itemId =>{
    console.log('Se elimino un producto')
    setProducts(prevProducts => prevProducts.filter(product => product.id !== itemId))
  }

  const clear = () =>{
    console.log('Se removieron todos los productos')
    setProducts([])
  }

  const isInCart = id =>{
    console.log('Esta en el carrito')
    return products.some(product => product.id === id)
  }

  return (
    <Provider value={{products, addItem, removeItem, clear}}>
      {children}
    </Provider>
  )
}
