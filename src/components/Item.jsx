import React from 'react'
import {Link} from 'react-router-dom'

function Item({category, img, id, precio}) {


  return (
      <>
    <div className="card" style={{width: "17rem", margin: 20}}>
    <img src={img} className="card-img-top mt-3" alt="..." />
    <div className="card-body" style={{display: "flex", flexWrap:"wrap", flexDirection:"column", alignItems:"center"}}>
      <h5 className="card-title">{category}</h5>
      <p className="card-text fs-5 fw-bold"> Precio : ${precio}</p>
      <Link to={`/item/` + id} className="btn btn-primary"> Ver detalle </Link>
    </div>
  </div>
  </>
  )
}

export default Item