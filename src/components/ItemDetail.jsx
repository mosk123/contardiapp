import React from 'react'



function ItemDetail({prodDetail}) {
   const {category, precio, color, img, detalle, id} = prodDetail;


  return (
    <>
    <div className="container container-detail">
        <div className="row">
          <div className="col-12 col-sm-6 pt-5">
            <div className="card mb-3 card-style">
              <div className="row g-0">
                <div className="col-md-4 pt-4 ">
                  <img src={img} className="img-fluid img-detail" />
                </div>
                <div className="col-md-8 col-sm-6 pt-5">
                  <div className="card-body">
                    <h5 className="card-title">{category}</h5>
                    <p className="card-text fw-light">{color}</p>
                    <p className="card-text fw-light">Precio: ${precio}</p>
                    <p className="card-text fw-light">{detalle}</p>
                    <button type="button" className="btn btn-primary">Agregar</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ItemDetail