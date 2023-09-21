import React from "react";
import Navbar from '../Componentes/navbar'
import Imagen from '../image/images.png'
import '../estilos/inicio.css'
import Filtros from "../Componentes/filtros";
import Categorias from "../Componentes/categorias";
import CarruselOfertas from "../Componentes/carrusel-ofertas";
import CarruselPopulares from "../Componentes/carrusel-populares";

function inicio() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <p className="eslogan">Eleva tu moda con nuestros estampados únicos</p>
        <img src={Imagen} className="contImg" alt="" />
        <p className="boton">Tu diseño a un click</p>
      </div>
      <div className="filtro">
        <Filtros />
      </div>
      <div className="categoria">
        <Categorias />
      </div>
      <div className="contenedorCarrusel">
        <div>
        <CarruselPopulares />
        </div>
        <div>
          <CarruselOfertas />
        </div>
      </div>
    </>
  );
}
export default inicio
