import React from 'react'

function Item({title, img, id, precio}) {


  return (
      <>
    <div className="card" style={{width: "17rem", margin: 20}}>
    <img src={img} className="card-img-top mt-3" alt="..." />
    <div className="card-body" style={{display: "flex", flexWrap:"wrap", flexDirection:"column", alignItems:"center"}}>
      <h5 className="card-title">{title}</h5>
      <p className="card-text fs-5 fw-bold"> Precio : ${precio}</p>
      <button  key={id} className="btn btn-primary">Ver detalle</button>
    </div>
  </div>
  </>
  )
}

export default Item