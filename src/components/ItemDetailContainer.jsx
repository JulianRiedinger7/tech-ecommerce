import { useState, useEffect } from "react"
import { PacmanLoader } from "react-spinners"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {
  const [item, setItem] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getSingleProduct = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products/10')
        const data = await response.json()
        setItem(data)
        setLoading(false)
        
      } catch (err) {
        console.error(err)
      }
    }
    getSingleProduct()
  }, [])
  
  return (
    <>
      {loading ? <PacmanLoader className="mx-auto mt-10" /> : <ItemDetail {...item}/>}
    </>
    
  )
}

export default ItemDetailContainer