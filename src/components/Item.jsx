import { Link } from 'react-router-dom'

const Item = ({id,title,price,rating,thumbnail}) => {
  return (
    <div className="flex flex-col items-center justify-center w-3/5 pb-4 mx-auto space-y-4 border-2 rounded-md shadow-xl border-cyan-400">
      <div className='h-full '>
        <img src={thumbnail} alt={title} className="object-cover w-full mx-auto text-center" />
      </div>
      <h2 className="text-xl lg:text-2xl">{title}</h2>
      <p className="text-lg"><strong>${price}</strong></p>
      <p className="text-lg"><strong>Rating ⭐ {rating}</strong></p>
      <Link to={`/item/${id}`} className="p-2 rounded-md shadow-md bg-cyan-400 text-gray border-cyan-400 hover:opacity-90">Ver detalles</Link>
    </div>
  )
}

export default Item