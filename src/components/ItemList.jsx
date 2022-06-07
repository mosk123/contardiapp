import React from 'react'
import Item from './Item'

function ItemList({productos}) {


  return (
      <>
     <div>
  
       {productos?.map(producto => <Item Key={producto.id} img={producto.img} nombre={producto.title} color={producto.color} />)}  
     </div>
  </>
  )
}

export default ItemList