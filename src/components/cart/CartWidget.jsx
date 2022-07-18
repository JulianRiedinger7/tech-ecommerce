import { useContext } from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { CartContext } from '../context/CartContext'

const CartWidget = () => {

  const { quantity } = useContext(CartContext)


  return (
    <div className=' flex items-center'>
      <AiOutlineShoppingCart size={24} color={'#61DAFB'} className='ml-5 mr-1'/>
      {quantity > 0 && <span>{quantity}</span>}
    </div>
  )
}

export default CartWidget