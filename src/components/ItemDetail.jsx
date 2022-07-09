import { useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'

const ItemDetail = ({title,price,rating,images,category,description,brand,stock}) => {
  const [quantity, setQuantity] = useState(0)

  const onAdd = count =>{
    setQuantity(count)
    console.log(`Se han agregado ${count} items al carrito`)
  }

  return (
    <div className="w-11/12 p-4 mx-auto mt-20 border-2 rounded-md shadow-xl border-cyan-400">
      <h3 className="mb-2 text-xl">Category: <strong>{category}</strong></h3>
      <div className="flex flex-col gap-6 lg:flex-row">
        <img src={images[2] || images[1] || images[0]} alt={title} className="w-full md:w-3/5 md:mx-auto lg:w-2/5"/>
        <div>
          <h2 className="text-2xl font-bold">{title}</h2>
          <h3 className="text-xl font-bold">{brand}</h3>
          <div className="flex justify-between w-4/5 my-4 text-2xl font-semibold">
            <p>${price}</p>
            <p>⭐ {rating} </p>
          </div>
          <p className="mt-2 mb-32 leading-6 lg:w-4/5">{description}</p>
          {quantity > 0
          ? <Link to='/cart' className="px-4 py-2 mt-10 text-xl border-2 rounded-md shadow-md border-cyan-400 hover:opacity-70">Finalizar Compra</Link>
          : <ItemCount stock={stock} initial={1} onAdd={onAdd}/>
          }
        </div>
      </div>

    </div>
  )
}

export default ItemDetail