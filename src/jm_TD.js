import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Inicio from './paginas/inicio'; 

function JM_TD() {
  return (
    <>
      <Routes>
      <Route path="/*" element={<Inicio />} /> 
        <Route path="/Inicio" element={<Inicio />} /> 
      </Routes>
    </>
  );
}

export default JM_TD;

