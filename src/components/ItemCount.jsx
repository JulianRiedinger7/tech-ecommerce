import { useState } from "react"

const ItemCount = ({stock, initial = 1, onAdd}) => {
  const [count, setCount] = useState(initial)

  const add = () =>{
    count < stock && setCount(prevCount => prevCount + 1);
    count >= stock && console.log('No se puede agregar mas que el stock disponible');
  }

  const decrement = () =>{
    count > 1 && setCount(prevCount => prevCount - 1)
  }

  return (
    <div className=" text-center mt-5">
      <div className="text-5xl">
        <button onClick={decrement}> - </button>
        <span> {count} </span>
        <button onClick={add}> + </button>
      </div>
      <p className=" text-gray-500 text-lg">{stock} disponibles</p>
      <button onClick={() => onAdd(count)} className="btn-primary">Agregar al carrito</button>
    </div>
  )
}

export default ItemCount