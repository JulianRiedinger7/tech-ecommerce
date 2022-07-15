import { useContext } from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { CartContext } from '../context/CartContext'

const CartWidget = () => {

  const { products } = useContext(CartContext)

  const totalQuantity = products.reduce((acc,product) => acc + product.quantity,0)

  return (
    <div className=' flex items-center'>
      <AiOutlineShoppingCart size={24} color={'#61DAFB'} className='ml-5 mr-1'/>
      {totalQuantity > 0 && <span>{totalQuantity}</span>}
    </div>
  )
}

export default CartWidget