import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from './CartContext'


function Cart() {

  const {cart, deleteItem, emptyCart, getItemPrice, getItemQty, resta, suma} = useContext(CartContext)



  return (
   <>
     


      {getItemQty() > 0 ?

<table class="table item">
<thead>
  <tr>
    <th scope="col">#</th>
    <th scope="col">Producto</th>
    <th scope="col">Cantidad</th>
    <th scope="col">Precio</th>
    <th scope="col">Accion</th>
    <th scope="col">Eliminar</th>
  </tr>
</thead>
<tbody>
          {cart.map(prodDetail => (
            <tr key={prodDetail.id}>
      <th className="pt-5" scope="row"><img src={prodDetail.img} alt="" style={{width:"70px"}} /></th>
      <td className='pt-5'>{prodDetail.title}</td>
      <td className='pt-5'>{prodDetail.cantidad}</td>
      <td className='pt-5'> $ {prodDetail.precio * prodDetail.cantidad}</td>
            <td className='pt-5'><button class="btn btn-success btn-sm" onClick={() => resta (prodDetail.id)}>
                  -
              </button>
              <button class="btn btn-danger btn-sm" onClick={() => suma (prodDetail.id)}>
                  +
              </button>
            </td>
            <td className='pt-4'><button className='btn btn-light fw-bold' onClick={()=>{deleteItem (prodDetail.id)}}>X</button></td>
            </tr>
          
          ))}
          <tr>
               <th scope="row">
               <td colSpan="2">Total</td>
               <td></td>
               </th>
               <td></td>
               <td></td>
               <th>$ {getItemPrice()}</th>
               <td><button className="btn btn-danger btn-sm">Comprar</button></td>
               <td><button className="btn btn-danger btn-sm" onClick={emptyCart}>Vaciar Carrito</button></td>  
               </tr>
          </tbody>
          </table>

        : 
        <div className='noCompras'>
         <div className='contenedorVacio'>
         <h3 className='pb-4'>Carrito de compras vacio</h3>
        <div className=' pt-2'>
        <Link to={`/`}><button className='btn btn-outline-secondary px-5'>Ir a la tienda</button></Link>
      </div>  
      </div>
      </div>
}
     
   </>  
  )
}

export default Cart