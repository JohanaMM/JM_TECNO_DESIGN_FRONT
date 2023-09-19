import React from 'react';
import { Routes, Route } from 'react-router-dom';
import inicio from './paginas/inicio';
import prueba from './Componentes/prueba';

import './App.css';

function JM_TD() {
  return (
    <>
    <Routes>
    <Route path="/Inicio" element={<inicio/>}/>
    <Route path="/Inicio" element={<prueba/>}/>
    </Routes>
    </>
  );
}

export default JM_TD;
