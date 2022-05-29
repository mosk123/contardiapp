import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";


function App() {
  return (
    <>
    
     <NavBar />
     <ItemListContainer greeting={'Hola!!!... Este es mi primer mensaje por props'}/>
     </>
  );
}

export default App;
