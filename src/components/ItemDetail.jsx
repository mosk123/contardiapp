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
    isInCart(prodDetail.id)
    addItem(prodDetail, cantidad)
   }
  return (
    <>
    <div className="contain container-fluid">
        <div className="row d-flex align-items-center cardDet">
          <div className='container-fluid imgDetalle shadow-lg p-3 mb-5 bg-body rounded'><img src={img} className="img-fluid img-detail" /></div>
                
                  <div className="card-body cardBody">
                    <div className='txtCrd'><h5 className="text-white text-center bg-danger bg-opacity-75 fs-4">{category}</h5></div>
                    <p className="card-text fw-bold text-center text-dark">Color: {color}</p>
                    <p className="card-text fw-bold text-center text-dark">Codigo: {id}</p>
                    <p className="card-text fw-bold text-center text-dark">Precio: ${precio}</p>
                    <p className="card-text fw-bold text-center text-dark">Stock: {stock}</p>
                  </div>
                </div>
              </div>
            
 
      <div className="d-grid gap-2 col-12 ">
      {unidades > 0 ? 
      <Link to={'/cart'} className="btn btn-dark d-flex justify-content-center">Ir a Carrito</Link>
      :<ItemCount stock={stock} initial={1} onAdd={onAdd}/>}
      </div>
    </>
  )
}

export default ItemDetail