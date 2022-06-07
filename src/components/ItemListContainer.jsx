import React from 'react'
import ItemList from './ItemList'


function ItemListContainer({greeting}) {


  const products=[{id:1, title:"Remera", color:"Gris",img:"/assets/remera.jpg"},
          {id:2, title:"jean", color:"Celeste",img:"/assets/jean2.jpg"},
          {id:3, title:"Campera", color:"Azul",img:"/assets/campera2.jpg"},
          {id:4 ,title:"Remera", color:"Naranja",img:"/assets/remera2.png"},
          {id:5 ,title:"Buzo", color:"Naranja",img:"/assets/buzo.jpeg"},
          {id:6 ,title:"Campera", color:"Rojo",img:"/assets/campera.jpg"},
          {id:7 ,title:"Remera", color:"Rosa",img:"/assets/remera3.jpg"},
          {id:8 ,title:"Jean", color:"Negro",img:"/assets/jean1.png"},]



 const task = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products)
    }, 3000);
    console.log(products)
  });

  
  return (
    <>
    {/* <h1 className='text-center'>{greeting}</h1> */}
    <ItemList />
    </>
  );
  }

export default ItemListContainer