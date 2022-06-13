import React, {useEffect, useState} from 'react'
import ItemDetail from './ItemDetail';

function ItemDetailContainer() {

    const [prodDetail, setProdDetail] = useState();
    
  

    useEffect(() => {

        const detalle = () => {
              fetch('./productos.json')
              .then((res) => res.json())
              .then((data) => setProdDetail(data.find(prod => prod.id == 4)))
              .catch(err => console.log(err))       
            }
            setTimeout(() => {
              detalle();
            }, 2000);
            
         
    }, []);
  

  return (
    <>
    <ItemDetail prodDetail={prodDetail} />
    </>
    
  )
}

export default ItemDetailContainer