import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Inicio from './paginas/inicio'
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
        <Route path="/*" element={<Inicio />} />
        <Route path="/Inicio" element={<Inicio />} />
        <Route path="/Categorias" element={<Categorias />} />
        <Route path="/Productos" element={<Productos />} />
        <Route path="/Talles" element={<Talles />} />
        <Route path="/Dudas" element={<Dudas />} />
        <Route path="/Contacto" element={<Contacto />} />
        <Route path="/Carrito" element={<Carrito />} />
        <Route path="/Perfil" element={<Perfil />} />
      </Routes>
    </>
  );
}

export default JM_TD;
