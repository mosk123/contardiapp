import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import products from './helpers/products';


function ItemDetailContainer() {
    const {id} = useParams();
    const [prodDetail, setProdDetail] = useState([]);
    const [loading, setLoading] = useState(true);
    
  

    useEffect(() => {
      setProdDetail({})
      setLoading(true)
        const task  = new Promise((resolve, reject) => {
          setTimeout(() =>{
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