

const ItemDetail = ({category,description,image,price,rating,title}) => {
  return (
    <div className=" w-11/12 mx-auto border-2 rounded-md shadow-xl p-4 border-cyan-400 mt-20">
      <h3 className="text-xl mb-2">Category: <strong>{category}</strong></h3>
      <div className="flex flex-col lg:flex-row gap-6">
        <img src={image} alt={title} className="w-full md:w-3/5 md:mx-auto lg:w-2/5"/>
        <div>
          <h2 className="text-2xl font-bold">{title}</h2>
          <div className="flex justify-between w-4/5 my-4 text-2xl font-semibold">
            <p>${price}</p>
            <p>{rating?.rate} ⭐ ({rating?.count})</p>
          </div>
          <p className="lg:w-4/5 leading-6 mt-2">{description}</p>
          <button className="border-2 rounded-md shadow-md border-cyan-400 px-4 py-2 mt-10 text-xl">Comprar</button>
        </div>
      </div>

    </div>
  )
}

export default ItemDetail