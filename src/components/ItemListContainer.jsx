import { useState,useEffect } from "react";
import ItemList from "./ItemList";
import { PacmanLoader } from "react-spinners";
import { useParams } from 'react-router-dom'
import { db } from '../firebase/firebase'
import { collection, getDocs, query, where } from 'firebase/firestore'

const ItemListContainer = ({greeting}) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const { categoryName } = useParams()

  

  useEffect(()=>{
    const getFirestoreProducts = async() =>{
      try {
        const productsCollection = collection(db, 'productos')
        const q = categoryName ? query(productsCollection, where('category', '==', categoryName)) : productsCollection
        const response = await getDocs(q)
        const productsList = response.docs.map( doc => {
          return {
            id: doc.id,
            ...doc.data()
          }
        })
        setProducts(productsList)
        setLoading(false)
      } catch (error) {
        console.error(error);
      }
    }
    getFirestoreProducts()
    
  },[categoryName]) 

  return (
    <>
      <h1 className="mt-5 text-4xl text-center ">{greeting} {categoryName}</h1>
      {loading ? <PacmanLoader cssOverride={{margin: '0 auto', marginTop: '1rem'}}/> : <ItemList products={products} />}
    </>
  )
}

export default ItemListContainer
