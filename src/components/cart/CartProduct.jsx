import React, { useContext } from 'react'
import { ImBin } from 'react-icons/im'
import { CartContext } from '../context/CartContext'


const CartProduct = ({ title, quantity, price, id, discountPercentage,thumbnail }) => {

  const { addDiscount, removeItem } = useContext(CartContext)

  return (
    <div className=' w-11/12 lg:w-3/5 mx-auto my-4 border rounded-md border-slate-800 flex flex-col sm:flex-row justify-between items-center'>
      <div className='w-full  sm:w-2/5 '>
        <img src={thumbnail} alt={title} className='w-full object-cover' />
      </div>
      <div className=' text-lg text-slate-600'>
        <h2>{title}</h2>
        <p>Cantidad: {quantity}</p>
        <p>Precio Unitario: ${addDiscount(price, discountPercentage)}</p>
        <p>Precio por Cantidad ${addDiscount(price, discountPercentage) * quantity}</p>
      </div>
      <button onClick={() => removeItem(id)} className=' self-start p-4'>
        <ImBin />
      </button>
    </div>
  )
}

export default CartProduct