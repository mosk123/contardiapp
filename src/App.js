import ItemCount from "./components/ItemCount";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";


function App() {
const onAdd = (contador)=>{
alert(`sumaste ${contador} productos`)
}

  return (
    <>
    
     <NavBar />
     {/* <ItemListContainer greeting={'Hola!!!... Este es mi primer mensaje por props'}/> */}
     <div>
       <ItemListContainer />
       {/* <ItemCount stock={10} initial={1} onAdd={onAdd}></ItemCount> */}
     </div>
     </>
  );
}

export default App;
