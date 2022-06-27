import React from 'react'
import Item from './Item'

function ItemList({productos}) {


  return (
      <>
     <div className='conCat'  style={{display:"flex", flexWrap:"wrap"}}>
  
       {productos.map(producto => <Item id={producto.id} img={producto.img} nombre={producto.title} precio={producto.precio} categoy={producto.category} />)}  
     </div>
  </>
  )
}

export default ItemList