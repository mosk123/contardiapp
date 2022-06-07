import React from 'react'

function Item({title, color, img, id}) {

 /*  const [title, color, img] = producto */

  return (
      <>
    <div className="card" style="width: 18rem;">
    <img src={img} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">Color: {color}.</p>
      <a href="#" key={id} className="btn btn-primary">Go somewhere</a>
    </div>
  </div>
  </>
  )
}

export default Item