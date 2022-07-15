import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import CartProduct from './CartProduct'

const Cart = () => {

  const { products, addDiscount, clear } = useContext(CartContext)

  const totalPrice = products.reduce((acc,product) => {
    const priceWithDiscount = addDiscount(product.price, product.discountPercentage)
    return acc + (priceWithDiscount * product.quantity)
  }, 0)

  return (
    <>
      {products.length === 0 
        ? (<div className=' text-center text-2xl'>
            <h2 className=' my-6'>No tienes productos en el carrito</h2>
            <Link to='/' className="px-4 py-2 mt-10 text-xl border-2 rounded-md shadow-md border-cyan-400 hover:opacity-70">Ir a tienda</Link>
          </div>)
        : <>
            {products.map(product => <CartProduct {...product} />)}
            <div className=' text-center'>
              <h3>El precio total es de : ${totalPrice}</h3>
              <button onClick={clear} className="px-4 py-2 mt-10 text-xl border-2 rounded-md shadow-md border-cyan-400 hover:opacity-70">Vaciar Carrito</button>
            </div>
          </>
      }
    </>
  )
}

export default Cart