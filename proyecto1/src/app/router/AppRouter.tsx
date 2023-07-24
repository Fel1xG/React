import React from 'react';
import { Routes, Route } from 'react-router-dom';
import  Componente1  from '../componentes/Componente1';
import { Formulario } from '../componentes/Formulario';
import { Registros } from '../componentes/Registros';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Componente1 />} />
      <Route path="/formulario" element={<Formulario />} />
      <Route path="/registros" element={<Registros />} />
    </Routes>
  );
};
