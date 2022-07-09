import { useState, useEffect } from "react"
import { PacmanLoader } from "react-spinners"
import ItemDetail from "./ItemDetail"
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
  const [item, setItem] = useState({})
  const [loading, setLoading] = useState(true)

  const { id } = useParams()

  useEffect(() => {
    const getSingleProduct = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`)
        const data = await response.json()
        setItem(data)
        setLoading(false)
        
      } catch (err) {
        console.error(err)
      }
    }
    getSingleProduct()
  }, [id])
  console.log(item);
  return (
    <>
      <h1 className=" mt-5 text-4xl text-center">Detalles</h1>
      {loading ? <PacmanLoader className="mx-auto mt-10" /> : <ItemDetail {...item}/>}
    </>
    
  )
}

export default ItemDetailContainer