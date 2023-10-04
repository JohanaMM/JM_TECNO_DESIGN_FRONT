import React from "react";
import { FaSlidersH } from "react-icons/fa";
import '../estilos/filtros.css'

function filtros() {
  return (
    <>
    <p className="filtros"><FaSlidersH style={{ color:'black', fontSize:'15px', marginRight:'5px'}}/> Filtros</p>
    </>
  );
}

export default filtros;
