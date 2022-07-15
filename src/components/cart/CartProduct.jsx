import React, { useContext } from 'react'
import { ImBin } from 'react-icons/im'
import { CartContext } from '../context/CartContext'


const CartProduct = ({ title, quantity, price, id, discountPercentage }) => {

  const { addDiscount, removeItem } = useContext(CartContext)

  return (
    <div className='w-3/5 mx-auto my-4 p-2 text-center border rounded-md border-cyan-400'>
      <h2>{title}</h2>
      <p>Cantidad: {quantity}</p>
      <p>Precio Unitario: ${addDiscount(price, discountPercentage)}</p>
      <p>Precio por Cantidad ${addDiscount(price, discountPercentage) * quantity}</p>
      <button onClick={() => removeItem(id)}>
        <ImBin />
      </button>
    </div>
  )
}

export default CartProduct