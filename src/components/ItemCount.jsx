import React, { useState, } from 'react'

function ItemCount({initial, stock, onAdd}) {

const [contador, setContador] = useState(initial)

const sumar = () =>{
  if (contador < stock) {
    setContador(contador + 1)
  } else {
    alert("Stock agotado")
  }
}
const resta = () =>{
  contador > 1 ? setContador(contador - 1) : alert("No puedes quuitar mas productos")
}

  return (
      <>
    <div className='container-fluid d-flex justify-content-center pt-5'>
        <button onClick={resta} className='btn btn-success px-3'> - </button>
        <p className='fs-4 px-3'> {contador} </p>
        <button onClick={sumar} className='btn btn-danger px-3'>+</button>
    </div>
    <div className='d-flex justify-content-center pt-2'>
        <button onClick={()=> {onAdd(contador);}} className='btn btn-info px-5'>Agregar al Carrito</button>
    </div>
    </>
  )
}

export default ItemCount