import ItemCount from "./ItemCount"

const ItemListContainer = ({greeting}) => {
  const onAdd = count =>{
    console.log(`Se han agregado ${count} items al carrito`);
  }

  return (
    <>
      <h1 className=" text-center mt-5 text-4xl">{greeting}</h1>
      <ItemCount stock={10} initial={1} onAdd={onAdd}/>
    </>
  )
}

export default ItemListContainer
