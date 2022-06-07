import React from 'react'
import ItemList from './ItemList'


function ItemListContainer({greeting}) {



  const products=[{id:1, title:"Remera", precio: 1200 , color:"Gris",img:"/assets/remera.jpg"},
          {id:2, title:"jean", precio: 2300, color:"Celeste",img:"/assets/jean3.png"},
          {id:3, title:"Campera", precio: 4700,  color:"Azul",img:"/assets/campera2.jpg"},
          {id:4 ,title:"Remera", precio: 1200,  color:"Naranja",img:"/assets/remera2.png"},
          {id:5 ,title:"Buzo", precio: 3200 ,color:"Naranja",img:"/assets/buzo.jpg"},
          {id:6 ,title:"Campera", precio: 4800, color:"Rojo",img:"/assets/campera.jpg"},
          {id:7 ,title:"Remera", precio: 1200,  color:"Rosa",img:"/assets/remera3.jpg"},
          {id:8 ,title:"Jean", precio: 2300 , color:"Negro",img:"/assets/jean1.png"},]



 const task = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products)
    }, 3000);
    
  });
 task.then((resolve) => {
    resolve = products
    
  });
 

  
  return (
    <>
    {/* <h1 className='text-center'>{greeting}</h1> */}
    <ItemList productos={products}/>
    </>
  );
  }

export default ItemListContainer