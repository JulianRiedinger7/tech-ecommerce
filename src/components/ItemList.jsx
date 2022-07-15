import Item from "./Item";

const ItemList = ({products}) => {
  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full mx-auto gap-y-10">
      {products.map(product => <Item key={product.id} {...product}/>)}
    </div>
  )
}

export default ItemList