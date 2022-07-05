import React from 'react'
import {Link} from 'react-router-dom'

function Item({category, img, id, precio}) {


  return (
      <>
      <div className='item'>
    <div className="card colorCard" style={{width: "12rem", margin:"10px"}}>
    <img src={img} className="card-img-top  colorCard" alt="..." />
    <div className="card-body" style={{display: "flex", flexWrap:"wrap", flexDirection:"column", alignItems:"center"}}>
      <h5 className="card-title">{category}</h5>
      <p className="card-text fw-bold text-white"> Precio : ${precio}</p>
      <Link to={`/item/` + id} className="btn btn-light"> Ver detalle </Link>
    </div>
  </div>
  </div>
  </>
  )
}

export default Item