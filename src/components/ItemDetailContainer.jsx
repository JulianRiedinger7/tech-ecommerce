import { useState, useEffect } from "react"
import { PacmanLoader } from "react-spinners"
import ItemDetail from "./ItemDetail"
import { useParams } from 'react-router-dom'
import { db } from '../firebase/firebase'
import { getDoc, doc, collection, } from "firebase/firestore"

const ItemDetailContainer = () => {
  const [item, setItem] = useState({})
  const [loading, setLoading] = useState(true)

  const { id } = useParams()

  useEffect(() => {
    const getSingleProduct = async () => {
      try {
        const productsCollection = collection(db, 'productos')
        const refDoc = doc(productsCollection, id)
        const response = await getDoc(refDoc)
        const product = {
          id: response.id,
          ...response.data()
        }
        setItem(product)
        setLoading(false)
        
      } catch (err) {
        console.error(err)
      }
    }
    getSingleProduct()
  }, [id])
  
  return (
    <>
      {loading ? <PacmanLoader className="mx-auto mt-10" /> : <ItemDetail {...item}/>}
    </>
    
  )
}

export default ItemDetailContainer