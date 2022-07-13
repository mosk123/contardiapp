import React from 'react'
import {Link} from 'react-router-dom'
import { useState, useContext } from 'react'
import { useForm } from "react-hook-form";
import {CartContext} from './CartContext'
import {addDoc, collection, getFirestore} from 'firebase/firestore';

function Checkout() {


    const { register, handleSubmit,  formState: { errors } } = useForm();
    const [idBuyed, setIdBuyed] = useState('')
    const [sendOrder, setSendOrder] = useState(false)
    const [error, setError] = useState(false);

    const dataBase = getFirestore()
    const ordersCollection = collection(dataBase, 'orders');
     
    const {cart, getItemPrice, emptyCart} = useContext(CartContext)

    function handleClick(data, e){
      const order = {
          buyer: data ,
          items: cart.map(prodDetail =>({id: prodDetail.id, title: prodDetail.title, precio: prodDetail.precio, cantidad: prodDetail.cantidad})),
          total: getItemPrice(),
         
        
      };

  
     
      addDoc(ordersCollection, order).then(({id}) => {
        setIdBuyed(id);
        setSendOrder(true);
        
      }).catch((err) =>{
        setError(error)
      }
      )
    
  }

  return (
    <>
    {sendOrder === false ? 
    <div className='container-fluid fbody'>
    <form onSubmit={handleSubmit(handleClick)}>
      <label htmlFor="Nombre">Nombre</label>
      <input {...register("name" , { required: true, maxLength: 20 })} />
      {errors.name?.type === "required" && "Este campo es obligatorio"}
      <label htmlFor="Cel">Cel</label>
      <input type="number" {...register("Cel", { required: true, minLength: 10, maxLength: 10})} />
      {errors.Cel?.type === "required" && "Este campo es obligatorio"}
      {errors.Cel?.type === "minLength" && "El numero debe contener minimo 10 caracteres"}
      {errors.Cel?.type === "maxLength" && "Excede el maximo permitido"}
      <label htmlFor="Mail">Mail</label>
      <input  type="email" {...register("Email" , { required: true, pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/})} />
      {errors.Email?.type === "required" && <p className='err'>Debe completar este campo</p>}
      {errors.Email?.type === "pattern" && <p className='err'>Debe contener caracteres correctos</p>}
      <input type="submit" onClick={handleClick} />
    </form>
    </div> 
      :
      <div
      className='buyedProd d-flex justify-content-start pt-5 flex-column align-items-center comp'>
      <h2 className='text-warning'>Muchas gracias por su compra!!</h2>
      <p className='mt-2'>
        Para cualquier eventualidad. Contactanos por Whatsapp
      </p>
      <p>ID de compra: {idBuyed}</p>
      <Link to='/'>
        <button className='btn radius-50 bg-warning m-3' onClick={emptyCart}>
          Volver a Inicio
        </button>
      </Link>
    </div>
    }
    </>
  )
}

export default Checkout