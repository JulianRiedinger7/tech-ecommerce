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
      <h2 className="text-xl">Item Count</h2>
      <div className="text-5xl">
        <button onClick={decrement}> - </button>
        <span> {count} </span>
        <button onClick={add}> + </button>
      </div>
      <button onClick={() => stock > 0 && stock >= count ? onAdd(count) : console.log('No stock')} className="text-2xl block mt-3 m-auto rounded border-sky-300 border-2 p-3 hover:opacity-70">Agregar al carrito</button>
    </div>
  )
}

export default ItemCount