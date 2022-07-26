import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from './context/CartContext'
import { AiFillStar  } from 'react-icons/ai'
import ItemCount from './ItemCount'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemDetail = ({id,title,price,rating,image,category,description,brand,stock,discountPercentage,thumbnail}) => {
  const [quantity, setQuantity] = useState(0)

  const { addItem, addDiscount } = useContext(CartContext)

  const onAdd = count =>{
    setQuantity(count)
    toast.success(`Se han agregado ${count} items al carrito`, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
    const item = {
      title,
      price,
      discountPercentage,
      thumbnail,
      stock,
      id
    }
    addItem(item, count)
  }

  return (
    <div className="w-10/12 p-4 mx-auto">
      <h3 className="mb-2 text-xl">Category: <strong>{category}</strong></h3>
      <div className="flex flex-col gap-6 lg:flex-row">
        <img src={image} alt={title} className="object-cover w-full md:w-3/5 md:mx-auto lg:w-2/5 rounded-md"/>
        <div>
          <h2 className="text-2xl font-bold">{title}</h2>
          <h3 className="text-xl font-bold">{brand}</h3>
          <div className="flex justify-between w-4/5 my-4 text-2xl font-semibold">
            <div>
              <p>${addDiscount(price, discountPercentage)}</p>
              <p className='text-lg line-through'>${price}</p>
            </div>
            <p className=' flex items-center pb-6 gap-1 text-slate-500'>
              <AiFillStar /> 
              {rating} </p>
          </div>
          <p className="mt-2 mb-32 leading-6 lg:w-4/5">{description}</p>
          {quantity > 0
          ? <Link to='/cart' className=" btn-primary">Finalizar Compra</Link>
          : <ItemCount stock={stock} initial={1} onAdd={onAdd}/>
          }
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
    </div>
  )
}

export default ItemDetail