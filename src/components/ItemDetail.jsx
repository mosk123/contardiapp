import React from 'react'
import ItemCount from './ItemCount';
import {Link} from 'react-router-dom';
import {useState} from 'react';
import { useContext } from 'react';
import { CartContext } from './CartContext';


function ItemDetail({prodDetail}) {
   const {category, title, precio, color, img, detalle, id, stock} = prodDetail;
   const [unidades, setUnidades] = useState();
   const {isInCart, addItem,} = useContext(CartContext)

   function onAdd(cantidad) {
    alert(`Agregaste al carrito ` +  cantidad)
    isInCart(prodDetail.id)
    addItem(prodDetail, cantidad)
   }
  return (
    <>
    <div className="container container-fluid d-flex justify-content-center">
        <div className="row d-flex align-items-center">
          <div className='container-fluid imgDetalle'><img src={img} className="img-fluid img-detail" /></div>
                
                  <div className="card-body cardBody">
                    <h5 className="card-title fw-bold text-center text-white pb-4">{category}</h5>
                    <p className="card-text fw-bold text-center text-white">Color: {color}</p>
                    <p className="card-text fw-bold text-center text-white">Codigo: {id}</p>
                    <p className="card-text fw-bold text-center text-white">Precio: ${precio}</p>
                    <p className="card-text fw-bold text-center text-white">Stock: {stock}</p>
                  </div>
                </div>
              </div>
            
 
      <div className="d-grid gap-2 col-3 mx-auto">
      {unidades > 0 ? 
      <Link to={'/cart'} className="btn btn-light d-flex justify-content-center">Ir a Carrito</Link>
      :<ItemCount stock={stock} initial={1} onAdd={onAdd}/>}
      </div>
    </>
  )
}

export default ItemDetail