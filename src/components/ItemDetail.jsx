import React from 'react'
import ItemCount from './ItemCount';
import {Link} from 'react-router-dom';
import {useState} from 'react';
import { useContext } from 'react';
import { CartContext } from './CartContext';


function ItemDetail({prodDetail}) {
   const {category, precio, color, img, detalle, id, stock} = prodDetail;
   const [unidades, setUnidades] = useState();
   const {isInCart, addItem} = useContext(CartContext)

   function onAdd(cantidad) {
    alert(`Agregaste al carrito ` +  cantidad)
    isInCart(prodDetail.id)
    addItem(prodDetail, cantidad)
   }
  return (
    <>
    <div className="container container-fluid ">
        <div className="row d-flex justify-content-center">
          <div className="col-12 col-sm-6 pt-5">
            <div className="card mb-3 card-style">
              <div className="row g-0">
                <div className="col-md-4 pt-4 ">
                  <img src={img} className="img-fluid img-detail" />
                </div>
                <div className="col-md-8 col-sm-6 pt-5 bg-secondary bg-gradient">
                  <div className="card-body">
                    <h5 className="card-title">{category}</h5>
                    <p className="card-text fw-bold text-center text-white">Color: {color}</p>
                    <p className="card-text fw-bold text-center text-white">Codigo: {id}</p>
                    <p className="card-text fw-bold text-center text-white">Precio: ${precio}</p>
                    <p className="card-text fw-bold text-center text-white">Stock: {stock}</p>
                    {/* <p className="card-text fw-bold text-center text-white">{detalle}</p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-grid gap-2 col-3 mx-auto">
      {unidades > 0 ? <Link to={'/cart'} className="btn btn-primary d-flex justify-content-center">Ir a Carrito</Link>:<ItemCount stock={stock} initial={1} onAdd={onAdd}/>}
      </div>
    </>
  )
}

export default ItemDetail