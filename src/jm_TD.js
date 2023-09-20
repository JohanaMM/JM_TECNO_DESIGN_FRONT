import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Inicio from './paginas/inicio';
import Categorias from './paginas/categorias';
import Productos from './paginas/productos';
import Talles from './paginas/talles';
import Dudas from './paginas/dudas';
import Contacto from './paginas/contacto';
import Carrito from './paginas/carrito';
import Perfil from './paginas/perfil';

function JM_TD() {
  return (
    <>
      <Routes>
        <Route path="/Inicio" element={<Inicio />} />
        <Route path="/Inicio" element={<Categorias />} />
        <Route path="/Inicio" element={<Productos />} />
        <Route path="/Inicio" element={<Talles />} />
        <Route path="/Inicio" element={<Dudas />} />
        <Route path="/Inicio" element={<Contacto />} />
        <Route path="/Inicio" element={<Carrito />} />
        <Route path="/Inicio" element={<Perfil />} />
      </Routes>
    </>
  );
}

export default JM_TD;
