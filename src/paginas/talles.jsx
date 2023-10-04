import React from "react";
import ImgTalle from '../image/fotoT.png'
import Filtros from "../Componentes/filtros";
import Categorias from "../Componentes/categorias";
import Talles from '../image/fotoTalles.png'
import '../estilos/talles.css'

function talles(){
  return (
    <>
    <div>
      <img src={ImgTalle} className="contImg" alt="img" />
    </div>
    <div>
        <div className="filtro">
          <Filtros />
        </div>
        <Categorias />
      </div>
      <div className="tallesContenedor">
        <img src={Talles} className="Talles" alt="img" />
      </div>
    </>
  );
}
export default talles;