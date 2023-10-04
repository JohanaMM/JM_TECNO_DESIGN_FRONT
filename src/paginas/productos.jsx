import React from "react";
import CarruselPopulares from "../Componentes/carrusel-populares";
import ImagenP from '../image/foto.png'
import Filtros from "../Componentes/filtros";
import Categorias from "../Componentes/categorias";

function productos() {
  return (
    <>
      <div>
        <img src={ImagenP} className="contImg" alt="" />
      </div>
      <div>
        <CarruselPopulares />
      </div>
      <div>
        <div className="filtro">
          <Filtros />
        </div>
        <Categorias />
      </div>
    </>
  );
}
export default productos;