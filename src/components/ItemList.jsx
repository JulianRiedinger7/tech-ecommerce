import Item from "./Item";

const ItemList = ({products}) => {
  return (
    <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 w-11/12 mx-auto gap-10">
      {products.map(product => <Item key={product.id} {...product}/>)}
    </div>
  )
}

export default ItemList