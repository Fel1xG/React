// Registros.tsx
import React, { useEffect, useState } from 'react';
import { obtenerPersonas } from '../Firebase/Promesas';
import { PersonaConId } from '../Interfaces';
import "../assets/css/Registros.css";

export const Registros = () => {
  const [personas, setPersonas] = useState<PersonaConId[]>([]);

  useEffect(() => {
    // Cargar los datos de firebase
    obtenerPersonas().then((listado) => {
      console.log('CARGANDO LISTADO');
      console.log(listado);
      setPersonas(listado);
    });
  }, []);

  const renderizarDatos = () => {
    return personas.map((p) => (
      <tr key={p.idPersona}>
        <td>{p.nombre}</td>
        <td>{p.correo}</td>
        <td>{p.telefono}</td>
        <td>{p.genero}</td>
        <td>{p.fechaNacimiento}</td>
        <td>{p.ciudad}</td>
        <td>{p.direccion}</td>
        <td>{p.codigoPostal}</td>
      </tr>
    ));
  };

  return (
    <div className="registros-container">
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Teléfono</th>
            <th>Género</th>
            <th>Fecha de Nacimiento</th>
            <th>Ciudad</th>
            <th>Dirección</th>
            <th>Código Postal</th>
          </tr>
        </thead>
        <tbody>
          {renderizarDatos()}
        </tbody>
      </table>
    </div>
  );
};
