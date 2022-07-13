import React from 'react'
import {Link} from 'react-router-dom'

function Item({category, img, id, precio}) {


  return (
      <>
      <div className='item shadow-sm p-3 mb-5 bg-body rounded'>
    <div className="card colorCard" style={{width: "12rem", margin:"10px"}}>
    <img src={img} className="card-img-top" alt="tarjeta" />
    <div className="card-body" style={{display: "flex", flexWrap:"wrap", flexDirection:"column", alignItems:"center"}}>
      <h5 className="card-title">{category}</h5>
      <p className="card-text fw-bold text-dark"> Precio : ${precio}</p>
      <Link to={`/item/` + id} className="btn btn-outline-dark"> Ver detalle </Link>
    </div>
  </div>
  </div>
  </>
  )
}

export default Item