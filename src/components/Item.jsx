import { Link } from 'react-router-dom'
import { AiFillStar } from 'react-icons/ai'
import { useContext } from 'react'
import { CartContext } from './context/CartContext'

const Item = ({id,title,price,rating,thumbnail,discountPercentage}) => {

  const { addDiscount } = useContext(CartContext)

  return (
    <div className="flex flex-col items-center justify-center w-3/5 pb-4 mx-auto space-y-4 border-2 rounded-xl shadow-xl border-slate-800 bg-slate-200">
      <div className='h-full w-full'>
        <img src={thumbnail} alt={title} className=" object-cover h-36 md:h-48 w-full rounded-t-xl" />
      </div>
      <h2 className="text-xl lg:text-2xl">{title}</h2>
      <p className="text-lg"><strong>${addDiscount(price,discountPercentage)}</strong> <span className='text-sm line-through'>${price}</span></p>
      <div className=' flex justify-between items-center space-x-4 sm:space-x-24 md:space-x-16 xl:space-x-20'>
        <Link to={`/item/${id}`} className=" btn-primary">Ver detalles</Link>
        <div className=' flex items-center gap-1 text-slate-500'>
          <AiFillStar />
          <p className="text-lg">{rating}</p>
        </div>
      </div>
    </div>
  )
}

export default Item