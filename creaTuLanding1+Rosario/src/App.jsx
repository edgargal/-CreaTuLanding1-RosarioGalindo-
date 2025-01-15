import react from "react";
import NavBar from "./components/NavBar";
import Productos from "./pages/productos";

import SobreNosotros from "./pages/SobreNosotros";
import Footer from "./pages/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {

  const mensaje = "¡Bienvenido a nuestra tienda online!";
  return (
    <>
      <BrowserRouter>
        <NavBar />


        <Routes>

          <Route path="/Productos" element={<Productos/>} />
          <Route path="/SobreNosotros" element={<SobreNosotros />} />
          <Route path="/contacto" element={<contacto/>} />
          <Route path="/Footer" element={<Footer />} />
          <Route path="*" element={<h1>Error 404: Ruta no encontrada</h1>} />

        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
