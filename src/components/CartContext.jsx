import { useState } from "react";
import { createContext, useEffect } from "react";

export const CartContext = createContext()

const {Provider} = CartContext


const MyProvider =({children}) => {
  
  const [ cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) ? JSON.parse(localStorage.getItem("cart")) : [])



  // Metodo Some - ItemDetail
  const isInCart = (id) =>{
    cart.some((x) => x.id === id)
  }
 // Agrega productos al Carrito - ItemDetail
  const addItem = (prodDetail, cantidad) =>{
    const newItem = {
      ...prodDetail, cantidad
  
    }
    if (isInCart(newItem.id)){
      const findProduct = cart.find((x) => x.id === newItem.id)
      const productIndex = cart.indexOf(findProduct)
      const auxArray = [...cart]
      auxArray[productIndex].cantidad += cantidad
      setCart(auxArray)

    }else{
      setCart([...cart, newItem])
      
    }

  }
 // Vaciar Carrito - Cart
  const emptyCart = () =>{
    setCart([])
  }
  // Metodo Filter - Cart
  const deleteItem = (id) =>{
    return setCart(cart.filter((x) => x.id !== id))
  }
  // Metodo Reduce - CartWidget
  const getItemQty = () =>{
   return cart.reduce((acc, i) => acc += i.cantidad, 0)
  }
  // Metodo Reduce - Cart
  const getItemPrice = () =>{
    return cart.reduce((acc, i) => acc += i.cantidad * i.precio, 0)
  }
  
 const resta = id => {
  cart.forEach(i =>{
    if(i.id === id){
      if (i.cantidad > 1){
      i.cantidad -= 1;
      setCart([...cart])}
    else if (i.cantidad === 1){
    alert("No se puede quitar. Utilice el boton Eliminar")
  }
  }
  })
 }

const suma = (id) =>{
  cart.forEach(i =>{
    if(i.id === id){
      if (i.cantidad < i.stock){
      i.cantidad += 1;
      setCart([...cart])
    }else if(i.cantidad >= i.stock){
    alert("Stock agotado")
  }
  }
  })
}
useEffect(() => {
  localStorage.setItem('cart', JSON.stringify(cart));
}, [cart]);

  
  return <Provider value={{cart, isInCart, addItem, emptyCart, deleteItem, getItemQty, getItemPrice, suma, resta}}>{children}</Provider>
   
  
}

export default MyProvider
