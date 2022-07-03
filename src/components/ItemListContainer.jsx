import ItemCount from "./ItemCount"
import { useState,useEffect } from "react";
import ItemList from "./ItemList";
import { PacmanLoader } from "react-spinners";
import ItemDetailContainer from "./ItemDetailContainer";

const ItemListContainer = ({greeting}) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const onAdd = count =>{
    console.log(`Se han agregado ${count} items al carrito`);
  }

  useEffect(()=>{
    setLoading(true)
    const getProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        setProducts(data.slice(0,10))
        setLoading(false)
      } catch (err) {
        console.error(err)
      }
    }
    getProducts()
  },[])

  return (
    <>
      <h1 className="mt-5 text-4xl text-center ">{greeting}</h1>
      <ItemCount stock={10} initial={1} onAdd={onAdd}/>
      {loading ? <PacmanLoader className="mx-auto mt-10" /> : <ItemList products={products} />}
      {products.length > 0 && <ItemDetailContainer />}
    </>
  )
}

export default ItemListContainer
