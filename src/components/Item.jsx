

const Item = ({image,price,title,rating}) => {
  return (
    <div className="border-2 rounded-md shadow-xl p-4 border-cyan-400 flex flex-col items-center justify-center space-y-4 w-3/5 mx-auto">
      <div className="w-1/2">
        <img src={image} alt={title} className="w-full text-center mx-auto" />
      </div>
      <h2 className="text-xl lg:text-2xl">{title}</h2>
      <p className="text-lg"><strong>${price}</strong></p>
      <p className="text-lg"><strong>Rating {rating.rate}⭐</strong></p>
      <button className="rounded-md p-2 shadow-md bg-cyan-400 text-gray border-cyan-400 hover:opacity-90">Ver detalles</button>
    </div>
  )
}

export default Item