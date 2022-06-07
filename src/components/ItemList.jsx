import React from 'react'
import Item from './Item'

function ItemList({productos}) {
console.log(productos)

  return (
      <>
     <div style={{display:"flex", flexWrap:"wrap"}}>
  
       {productos.map(producto => <Item Key={producto.id} img={producto.img} nombre={producto.title} precio={producto.precio} />)}  
     </div>
  </>
  )
}

export default ItemList