import React from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const products=[{id:"1", category:"remera", precio: 1200 , color:"Gris",img:"/assets/remera.jpg"},
{id:"2", category:"jean", precio: 2300, color:"Celeste",img:"/assets/jean3.png"},
{id:"3", category:"campera", precio: 4700,  color:"Azul",img:"/assets/campera2.jpg"},
{id:"4" ,category:"remera", precio: 1200,  color:"Naranja",img:"/assets/remera2.png"},
{id:"5" ,category:"buzo", precio: 3200 ,color:"Naranja",img:"/assets/buzo.jpg"},
{id:"6" ,category:"campera", precio: 4800, color:"Rojo",img:"/assets/campera.jpg"},
{id:"7" ,category:"remera", precio: 1200,  color:"Rosa",img:"/assets/remera3.jpg"},
{id:"8" ,category:"jean", precio: 2300 , color:"Negro",img:"/assets/jean1.png"},]

function ItemListContainer() {
  const {id} = useParams();
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
   setProductos([])
   setLoading(true)
          
          const task = new Promise((resolve, reject) => {
          setTimeout(() => {
         (id === undefined) ? resolve(products) : resolve(products.filter(item => item.category === id))
         }, 2000);
    
         });
         task.then((resolve) => {
         setProductos(resolve)
         setLoading(false)
        });
  },[id]);
 

  
  return (
    <>
   { loading ? <div className="loader">Loading...</div> :  <ItemList productos={productos}/>  }
    </>
  )
  }

export default ItemListContainer