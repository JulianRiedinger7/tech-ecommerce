import { useState,useEffect } from "react";
import ItemList from "./ItemList";
import { PacmanLoader } from "react-spinners";
import { useParams } from 'react-router-dom'

const ItemListContainer = ({greeting}) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)

  const { categoryName } = useParams()

  const URL = categoryName ? `https://dummyjson.com/products/category/${categoryName}` : 'https://dummyjson.com/products'

  useEffect(()=>{
    setLoading(true)
    const getProducts = async () => {
      try {
        const response = await fetch(URL)
        const data = await response.json()
        setProducts(data.products)
        setLoading(false)
      } catch (err) {
        console.error(err)
      }
    }
    getProducts()
  },[URL])

  return (
    <>
      <h1 className="mt-5 text-4xl text-center ">{greeting} {categoryName}</h1>
      {loading ? <PacmanLoader className="mx-auto mt-10" /> : <ItemList products={products} />}
    </>
  )
}

export default ItemListContainer
