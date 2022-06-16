import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';


let products=[{id:"1", category:"remera", precio: 1200 , color:"Gris",img:"/assets/remera.jpg", detalle:"Remera de algondon. Calidad Premium. Este producto se encuentra en talles S - XS - L - XL."},
{id:"2", category:"jean", precio: 2300, color:"Celeste",img:"/assets/jean3.png", detalle:"Jean Skinny. Calidad Premium. Este producto se encuentra en talles S - XS - L - XL."},
{id:"3", category:"campera", precio: 4700,  color:"Azul",img:"/assets/campera2.jpg", detalle:"Campera impermeable de pluma. Calidad Premium. Este producto se encuentra en talles S - XS - L - XL."},
{id:"4" ,category:"remera", precio: 1200,  color:"Naranja",img:"/assets/remera2.png", detalle:"Remera de algondon. Calidad Premium. Este producto se encuentra en talles S - XS - L - XL."},
{id:"5" ,category:"buzo", precio: 3200 ,color:"Naranja",img:"/assets/buzo.jpg", detalle:"Buzo de algondon. Calidad Premium. Este producto se encuentra en talles S - XS - L - XL."},
{id:"6" ,category:"campera", precio: 4800, color:"Rojo",img:"/assets/campera.jpg", detalle:"Campera impermeable de pluma. Calidad Premium. Este producto se encuentra en talles S - XS - L - XL."},
{id:"7" ,category:"remera", precio: 1200,  color:"Rosa",img:"/assets/remera3.jpg", detalle:"Remera de algondon. Calidad Premium. Este producto se encuentra en talles S - XS - L - XL."},
{id:"8" ,category:"jean", precio: 2300 , color:"Negro",img:"/assets/jean1.png", detalle:"Jean Clasico. Calidad Premium. Este producto se encuentra en talles S - XS - L - XL."},]

function ItemDetailContainer() {
    const {id} = useParams();
    const [prodDetail, setProdDetail] = useState([]);
    const [loading, setLoading] = useState(true);
    
  

    useEffect(() => {
      setProdDetail({})
      setLoading(true)
        const task  = new Promise((resolve, reject) => {
          setTimeout(() =>{
            console.log(products)
            console.log(products.find(item => item.id === id))
            resolve(products.find(item => item.id == id))
          }, 2000);
        });       
        task.then((resolve) => {
          setProdDetail(resolve)
          setLoading(false)
        });

    }, [id]);
  

  return (
    <>
    { loading ? <div className="loader">Loading...</div> : <ItemDetail prodDetail={prodDetail}/>} 
    </>
    
  )
}

export default ItemDetailContainer