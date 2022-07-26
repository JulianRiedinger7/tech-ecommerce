import React, { useState } from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import CartProduct from './CartProduct'
import  Form  from '../form/Form'

const Cart = () => {

  const [finalized, setFinalized] = useState(false)

  const { products,total, clear } = useContext(CartContext)

  return (
    <>
      {products.length === 0 
        ? (<div className=' text-center text-2xl'>
            <h2 className=' my-6'>No tienes productos en el carrito</h2>
            <Link to='/' className="btn-primary">Ir a tienda</Link>
          </div>)
        : <>
            {products.map(product => <CartProduct key={product.id} {...product} />)}
            <div className=' text-center space-x-5'>
              <h3 className=' text-xl font-bold mb-5'>El precio total es de: ${total}</h3>
              <button onClick={clear} className="btn-primary">Vaciar Carrito</button>
              {finalized ?
                <div className=' mx-auto'>
                  <Form />
                </div> : 
                <button className='btn-primary' onClick={() => setFinalized(true)}>Finalizar Compra</button>}
            </div>
          </>
      }
    </>
  )
}

export default Cart