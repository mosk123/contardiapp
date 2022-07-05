import React from 'react'
import {Link} from 'react-router-dom'
import { useState, useContext } from 'react'
import { useForm } from "react-hook-form";
import {CartContext} from './CartContext'
import {addDoc, collection, getFirestore} from 'firebase/firestore';

function Checkout() {

    const [name, setName] = useState("")  
    const [email, setEmail] = useState("") 
    const [cel, setCel] = useState("") 
    const { register, handleSubmit } = useForm();
 

    const [idBuyed, setIdBuyed] = useState('')

    const dataBase = getFirestore()
    const ordersCollection = collection(dataBase, 'orders');
     
    const {cart,getItemPrice} = useContext(CartContext)

    function handleClick(){
      const order = {
          buyer: {name, email, cel} ,
          items: cart,
           total: getItemPrice()
      };
      console.log(order)
    

      addDoc(ordersCollection, order).then(({id}) => {
        setIdBuyed(id);
      });

  }

  return (
    <>
    
    <div className='container-fluid fbody'>
    <form>
      <label htmlFor="Nombre">Nombre</label>
      <input onChange={(e) => setName(e.target.value)} {...register("Nombre" , { required: true, maxLength: 20 })} />
      <label htmlFor="Apellido">Apellido</label>
      <input onChange={(e) => setCel(e.target.value)} type="number" {...register("Cel", { required: true, maxLength: 10 })} />
      <label htmlFor="Mail">Mail</label>
      <input onChange={(e) => setEmail(e.target.value)} type="email" {...register("Email" , { required: true})} />
      <input type="submit" onClick={handleClick()} />
    </form>
    </div> 
      <div
      className='container d-flex justify-content-start pt-5 flex-column align-items-center comp'>
      <h2 className='text-warning'>Muchas gracias por su compra!!</h2>
      <p className='mt-2'>
        Para cualquier eventualidad. Contactanos por Whatsapp
      </p>
      <p>ID de compra: {idBuyed}</p>
      <Link to='/'>
        <button className='btn radius-50 bg-warning m-3'>
          Volver a Inicio
        </button>
      </Link>
    </div>
  
    </>
  )
}

export default Checkout