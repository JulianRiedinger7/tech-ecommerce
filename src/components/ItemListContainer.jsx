import ItemCount from "./ItemCount"
import { useState,useEffect } from "react";
import ItemList from "./ItemList";
import { PacmanLoader } from "react-spinners";
import productsData from "../products";

const promesa = new Promise((res,rej) =>{
  res(productsData)
})


const ItemListContainer = ({greeting}) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const onAdd = count =>{
    console.log(`Se han agregado ${count} items al carrito`);
  }

  useEffect(()=>{
    setLoading(true)
    setTimeout(() => {
      promesa
      .then(productsData => setProducts(productsData))
      .catch(err => console.error(err))
      setLoading(false)
    }, 2000);
  },[])

  return (
    <>
      <h1 className="mt-5 text-4xl text-center ">{greeting}</h1>
      <ItemCount stock={10} initial={1} onAdd={onAdd}/>
      {loading ? <PacmanLoader className="mx-auto mt-10" /> : <ItemList products={products} />}
    </>
  )
}

export default ItemListContainer
