import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext()

const {Provider} = CartContext


const MyProvider =({children}) => {
  
  const [ cart, setCart] = useState([])

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
    setCart(cart.filter((x) => x.id !== id))
  }
  // Metodo Reduce - CartWidget
  const getItemQty = () =>{
   return cart.reduce((acc, i) => acc += i.cantidad, 0)
  }
  // Metodo Reduce - Cart
  const getItemPrice = () =>{
    cart.reduce((acc, i) => acc += i.cantidad * i.precio, 0)
  }
  
  
  return <Provider value={{cart, isInCart, addItem, emptyCart, deleteItem, getItemQty, getItemPrice}}>{children}</Provider>
   
  
}

export default MyProvider
