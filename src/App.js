
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacto from "./components/Contacto";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import MyProvider from "./components/CartContext";
import { initializeApp } from "firebase/app";
import Footer from "./components/Footer";



function App() {

  const firebaseConfig = {
    apiKey: "AIzaSyAL_FnuRlKAU8BJWnKuhfG-LlXge3uoJ5Q",
    authDomain: "contardiapp.firebaseapp.com",
    projectId: "contardiapp",
    storageBucket: "contardiapp.appspot.com",
    messagingSenderId: "325155250335",
    appId: "1:325155250335:web:6fc331d10012905aea42aa"
  };
  
  
initializeApp(firebaseConfig);


  return (
    <>
   <BrowserRouter>
   <MyProvider>
    <NavBar /> 
    <Routes>
    <Route path="/" element={< ItemListContainer/>} />
    <Route path="/category/:id" element={< ItemListContainer/>} />
    <Route path="/item/:id" element={<ItemDetailContainer />} />
    <Route path="/contacto" element={<Contacto />} />
    <Route path="/cart" element={<Cart />} />
    </Routes> 
    <Footer />
     </MyProvider>
     </BrowserRouter>
     </>
  );
}

export default App;
