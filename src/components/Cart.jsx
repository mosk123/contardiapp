import React from 'react'
import { useContext } from 'react'
import { CartContext } from './CartContext'

function Cart() {

  const {cart, deleteItem, emptyCart, getItemPrice } = useContext(CartContext)

  return (
   <>
   <div className='d-flex justify-content-center pt-2'>
  <button className='btn btn-primary' onClick={()=> deleteItem()}>Elimina productos</button>
  </div>
   </>  
  )
}

export default Cart