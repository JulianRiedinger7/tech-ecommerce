import React,{ useState } from 'react'
import { db } from '../../firebase/firebase'
import {collection, addDoc, serverTimestamp, updateDoc, doc } from 'firebase/firestore'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Form = () => {
  const [buyerData, setBuyerData] = useState({
    nombre: '',
    celular: '',
    email: ''
  })
  const [buyerId, setBuyerId] = useState('')

  const { products, total } = useContext(CartContext)

  const addData = (evt) =>{
    const {target} = evt
    setBuyerData(prevBuyerData => {
      return {
        ...prevBuyerData,
        [target.name]: target.value
      }
    })
  }

  const checkout = async (evt) =>{
    evt.preventDefault()
    const ventasCollection = collection(db, 'ventas')
    const buyerInfo = await addDoc(ventasCollection, {
      buyerData,
      products,
      date: serverTimestamp(),
      total
    })
    setBuyerId(buyerInfo.id)
    setBuyerData({
      nombre: '',
      celular: '',
      email: ''
    })  
    updateStock()
  }

  const updateStock = () =>{
    products.forEach(product => {
      const updateCollection = doc(db, 'productos', product.id)
      updateDoc(updateCollection, {stock: product.stock - product.quantity})
    })
  }


  return (
    <section className='mx-auto mt-6 w-9/12 md:w-7/12 lg:w-5/12 text-center'>
      <h2 className=' text-lg text-center'>Por favor, completa el siguiente formulario</h2>
      <form onSubmit={(evt) => checkout(evt)} className='mt-6 flex flex-col text-left space-y-4 border-2 rounded-md border-slate-800 p-3'>
        <label htmlFor="nombre">Nombre Completo:</label>
        <input className=' rounded-md shadow-lg p-1'
          type="text"
          name='nombre' 
          id='nombre' 
          placeholder='Juan Perez' 
          required
          onChange={(evt) => addData(evt)}
          value={buyerData.nombre}
          />
        <label htmlFor="celular">Celular:</label>
        <input className=' rounded-md shadow-lg p-1' 
          type="tel" 
          name='celular' 
          id='celular' 
          placeholder='(111) 111 111' 
          required
          onChange={(evt) => addData(evt)}
          value={buyerData.celular}
        />
        <label htmlFor="email">Email:</label>
        <input className=' rounded-md shadow-lg p-1' 
          type="email" 
          name='email' 
          id='email'
          placeholder='ejemplo@ejemplo.com' 
          required
          onChange={(evt) => addData(evt)}
          value={buyerData.email}
        />
        <button className=' btn-primary'>Confirmar</button>
      </form>
      {buyerId ? 
        <h3 className='text-xl'>Perfecto! tu ID de compra es: <strong>{buyerId}</strong></h3> :
        <h3>Procesando...</h3>}
    </section>
  )
}

export default Form