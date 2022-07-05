import React, { useState, } from 'react'
import {Link} from "react-router-dom";


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
      <div className='containButton'>
    <div className='container-fluid d-flex d-flex justify-content-center pt-5'>
        <button onClick={resta} className='btn btn-success px-3 btnSuma'> - </button>
        <p className='fs-4 px-3'> {contador} </p>
        <button onClick={sumar} className='btn btn-danger px-3 btnResta'>+</button>
    </div>
    <div className='d-flex justify-content-center pt-2'>
        <button onClick={()=> {onAdd(contador);}} className='btn btn-outline-light px-5'>Agregar al Carrito</button>
    </div>
    <div className='d-flex justify-content-center pt-2'>
     <Link to={`/`}><button className='btn btn-outline-light px-5'>Continuar comprando</button></Link>
    </div>  
    </div>
    </>
  )
}

export default ItemCount