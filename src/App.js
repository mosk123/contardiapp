
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacto from "./components/Contacto";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
/* const onAdd = (contador)=>{
alert(`sumaste ${contador} productos`)
} */

  return (
    <>
   <BrowserRouter>
    <NavBar />
    
    <Routes>
    <Route path="/" element={< ItemListContainer/>} />
    <Route path="/category/:id" element={< ItemListContainer/>} />
    <Route path="/item/:id" element={<ItemDetailContainer />} />
    <Route path="/contacto" element={<Contacto />} />
    </Routes> 
   
     <div>
    {/* <ItemCount stock={10} initial={1} onAdd={onAdd}></ItemCount> */}
     </div>
     </BrowserRouter>
     </>
  );
}

export default App;
