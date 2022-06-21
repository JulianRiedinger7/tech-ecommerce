import {AiOutlineShoppingCart} from 'react-icons/ai'

const CartWidget = ({number}) => {
  return (
    <>
      <a href="#!">
        <AiOutlineShoppingCart size={24} color={'#61DAFB'} className='ml-5 mr-1'/>
      </a>
      <span>{number}</span>
    </>
  )
}

export default CartWidget