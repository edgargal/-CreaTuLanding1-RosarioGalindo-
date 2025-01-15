import React from 'react'
import img1 from '../img/cortinasblackout.webp'
import img2 from '../img/edredon-lisboa.webp'
import img3 from '../img/sabanas.png'

const productos = () => {

    return (
      <>
        <main className="contenido-principal contenedor">
          <h2 className='principal-title'>Nuestros Productos</h2>
  
          <div className="listado-productos">

            <div className="producto">
                <img src={img2} alt="imagene de edredones acolchados" />
              <div className="texto-producto">
                <h3>Acolchados Corderito</h3>
               
                <p className="precio">$50.000</p>
                <a href="#" className="btn">
                  Agregar al carrito
                </a>
              </div>
            </div>
  
            <div className="producto">
           <img src={img1} alt="imagen de cortinas" />
              <div className="texto-producto">

                <h3>Cortinas</h3>
                <p>
                 Cortinas de tela, Black out, Luminizadas
                </p>
                <p className="precio">20.000</p>
                <a href="#" className="btn">
                  Agregar al carrito
                </a>
              </div>
            </div>
  
            <div className="producto">
             <img src={img3} alt="imagen de almohadas y fundas" />
              <div className="texto-producto">
                <h3>Almohadones</h3>
                <p>
                Almohadones, Almohadas, Cojines , Fundas , Rellenos
                </p>
                <p className="precio">$10,000</p>
                <a href="#" className="btn">
                  Agregar al carrito
                </a>
              </div>
            </div>

          </div>
        </main>
      </>
    );
  };
  
  export default productos;