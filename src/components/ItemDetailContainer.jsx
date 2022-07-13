import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import {doc, getDoc, getFirestore}  from 'firebase/firestore'



function ItemDetailContainer() {
    const {id} = useParams();
    const [prodDetail, setProdDetail] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false)
    
  

    useEffect(() => {
      const dataBase = getFirestore();
      const productRef = doc(dataBase, 'products', id)
      getDoc(productRef).then((snapshot)=>{
       setProdDetail({ ...snapshot.data(), id: snapshot.id})
      }).catch((error) =>{
      setError(error)
    }).finally(() =>{
      setLoading(false)
    })

    }, [id]);
  

  return (
    <>
    { loading ? <div className='loader text-center'><div className='spinner-border text-danger' role="status"><span class="visually-hidden">Loading...</span></div></div> : <ItemDetail prodDetail={prodDetail}/>} 
    </>
    
  )
}

export default ItemDetailContainer