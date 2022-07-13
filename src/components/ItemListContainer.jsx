import React from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { collection, getDocs, getFirestore, query, where} from 'firebase/firestore'


function ItemListContainer() {
  const {id} = useParams();
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false)


  useEffect(() => {  
   const dataBase = getFirestore();
   const productsCollection = collection(dataBase, 'products');

   if (id){
    const qCat = query(productsCollection, where('category', '==', id ))
    getDocs(qCat).then(snapshot =>{
      setProductos(snapshot.docs.map((doc)=>({...doc.data(), id: doc.id })))
    }).catch((error) =>{
     setError(error)
    }).finally(()=>{
     setLoading(false)
    });
   }else{
    getDocs(productsCollection).then(snapshot =>{
      setProductos(snapshot.docs.map((doc)=>({...doc.data(), id: doc.id })))
    }).catch((error) =>{
     setError(error)
    }).finally(()=>{
     setLoading(false)
    })
   }

  },[id]);
 

  
  return (
    <>
   { loading ? <div className='loader text-center'><div className='spinner-border text-danger' role="status"><span class="visually-hidden">Loading...</span></div></div> :  <ItemList productos={productos}/>  }
    </>
  )
  }

export default ItemListContainer