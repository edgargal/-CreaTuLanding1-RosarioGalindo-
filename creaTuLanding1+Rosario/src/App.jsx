import react from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

const App = () => {
  
  const mensaje = "¡Bienvenido a nuestra tienda online!";
  return (
    <div>
    <NavBar/>
    <ItemListContainer mensaje={mensaje}/>
    
    
    </div>
  )
}

export default App
