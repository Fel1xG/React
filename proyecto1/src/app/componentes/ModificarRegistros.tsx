'use client'
import React, { useState, useEffect } from 'react';
import { obtenerPersonas, actualizarPersona } from '../Firebase/Promesas';
import { PersonaConId } from '../Interfaces';
import { useNavigate, useLocation } from 'react-router-dom';

const ModificarRegistros = () => {
  const [personas, setPersonas] = useState<PersonaConId[]>([]);
  const [registroEditar, setRegistroEditar] = useState<PersonaConId | null>(null);
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [genero, setGenero] = useState('masculino');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [direccion, setDireccion] = useState('');
  const [codigoPostal, setCodigoPostal] = useState('');

  useEffect(() => {
    obtenerPersonas().then((listado) => {
      setPersonas(listado);
    });
  }, []);

  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const id = searchParams.get('id');
  const editing = !!id;

  useEffect(() => {
    if (id) {
      // Si se reciben datos en los parámetros de la URL, buscar el registro a editar en la lista de personas
      const registro = personas.find((p) => p.idPersona === id);
      if (registro) {
        // Establecer los datos del registro en los estados
        setRegistroEditar(registro);
        setNombre(registro.nombre);
        setCorreo(registro.correo);
        setTelefono(registro.telefono);
        setGenero(registro.genero);
        setFechaNacimiento(registro.fechaNacimiento);
        setCiudad(registro.ciudad);
        setDireccion(registro.direccion);
        setCodigoPostal(registro.codigoPostal);
      }
    }
  }, [id, personas]);

  const handleGuardarCambios = () => {
    if (id) {
      // Crear un objeto con los datos actualizados del registro
      const registroActualizado: PersonaConId = {
        idPersona: id,
        nombre,
        correo,
        telefono,
        genero,
        fechaNacimiento,
        ciudad,
        direccion,
        codigoPostal,
      };

      // Llamar a la función para actualizar los datos
      actualizarPersona(id, registroActualizado).then(() => {
        // Una vez que la actualización se haya completado correctamente,
        // limpiar los campos y establecer registroEditar a null
        setNombre('');
        setCorreo('');
        setTelefono('');
        setGenero('masculino');
        setFechaNacimiento('');
        setCiudad('');
        setDireccion('');
        setCodigoPostal('');
        setRegistroEditar(null);

        // Opcionalmente, puedes recargar la lista de personas después de guardar los cambios
        obtenerPersonas().then((listado) => {
          setPersonas(listado);
        });

        // Redirigir de vuelta a la lista de registros después de guardar los cambios
        navigate('/registros');
      });
    }
  };

  const handleEditar = (persona: PersonaConId) => {
    // Redirige a la ruta de "ModificarRegistros" con el id del registro seleccionado como parámetro
    navigate(`/modificar-registros?id=${persona.idPersona}`);
  };

  return (
    <div className="registros-container">
      <h1>Lista de Registros a Modificar </h1>
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
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {personas.map((p) => (
            <tr key={p.idPersona}>
              <td>{p.nombre}</td>
              <td>{p.correo}</td>
              <td>{p.telefono}</td>
              <td>{p.genero}</td>
              <td>{p.fechaNacimiento}</td>
              <td>{p.ciudad}</td>
              <td>{p.direccion}</td>
              <td>{p.codigoPostal}</td>
              <td>
                <button onClick={() => handleEditar(p)}>Editar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {registroEditar && (
        <div>
          <h2>Modificar Registro</h2>
          {/* Resto del formulario para editar los datos del registro */}
          <form id="editarRegistroForm">
            <label htmlFor="nombre">Nombre y Apellido:</label>
            <input type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required /><br />

            <label htmlFor="correo">Correo:</label><br />
            <input type="email" id="correo" value={correo} onChange={(e) => setCorreo(e.target.value)} required /><br />

            <label htmlFor="telefono">Teléfono:</label><br />
            <input type="tel" id="telefono" value={telefono} onChange={(e) => setTelefono(e.target.value)} required /><br />

            <label>Género:</label>
            <div className="genero-container">
              <div className="genero-buttons">
                <label htmlFor="genero-masculino">Masculino</label>
                <input type="radio" id="genero-masculino" name="genero" value="masculino" checked={genero === 'masculino'} onChange={(e) => setGenero(e.target.value)} required />
                <label htmlFor="genero-femenino">Femenino</label>
                <input type="radio" id="genero-femenino" name="genero" value="femenino" checked={genero === 'femenino'} onChange={(e) => setGenero(e.target.value)} required />
              </div>
            </div><br/><br/>

            <label htmlFor="fechaNacimiento">Fecha de Nacimiento:</label><br />
            <input type="date" id="fechaNacimiento" value={fechaNacimiento} onChange={(e) => setFechaNacimiento(e.target.value)} required /><br /><br />

            <label htmlFor="ciudad">Ciudad:</label><br />
            <select id="busquedaCiudad" value={ciudad} onChange={(e) => setCiudad(e.target.value)} required>
            <option value="">Selecciona una ciudad</option>
  <option value="Ancud">Ancud</option>
  <option value="Angol">Angol</option>
  <option value="Antofagasta">Antofagasta</option>
  <option value="Arauco">Arauco</option>
  <option value="Arica">Arica</option>
  <option value="Calama">Calama</option>
  <option value="Calbuco">Calbuco</option>
  <option value="Caldera">Caldera</option>
  <option value="Chillán">Chillán</option>
  <option value="Coquimbo">Coquimbo</option>
  <option value="Copiapó">Copiapó</option>
  <option value="Coronel">Coronel</option>
  <option value="Coyhaique">Coyhaique</option>
  <option value="Curanilahue">Curanilahue</option>
  <option value="Curicó">Curicó</option>
  <option value="Iquique">Iquique</option>
  <option value="La Serena">La Serena</option>
  <option value="Linares">Linares</option>
  <option value="Loncoche">Loncoche</option>
  <option value="Los Ángeles">Los Ángeles</option>
  <option value="Osorno">Osorno</option>
  <option value="Ovalle">Ovalle</option>
  <option value="Paine">Paine</option>
  <option value="Puerto Aisén">Puerto Aisén</option>
  <option value="Puerto Montt">Puerto Montt</option>
  <option value="Puerto Natales">Puerto Natales</option>
  <option value="Puerto Varas">Puerto Varas</option>
  <option value="Punta Arenas">Punta Arenas</option>
  <option value="Quilpué">Quilpué</option>
  <option value="Quillota">Quillota</option>
  <option value="Rancagua">Rancagua</option>
  <option value="San Antonio">San Antonio</option>
  <option value="San Felipe">San Felipe</option>
  <option value="San Javier">San Javier</option>
  <option value="Santiago">Santiago</option>
  <option value="Talca">Talca</option>
  <option value="Talcahuano">Talcahuano</option>
  <option value="Temuco">Temuco</option>
  <option value="Tierra Amarilla">Tierra Amarilla</option>
  <option value="Valdivia">Valdivia</option>
  <option value="Valparaíso">Valparaíso</option>
  <option value="Vallenar">Vallenar</option>
  <option value="Vicuña">Vicuña</option>
  <option value="Viña del Mar">Viña del Mar</option>
  <option value="Villa Alemana">Villa Alemana</option>
</select><br /><br />

            <label htmlFor="direccion">Dirección:</label><br />
            <textarea id="direccion" value={direccion} onChange={(e) => setDireccion(e.target.value)} required></textarea><br /><br />

            <label htmlFor="codigoPostal">Código Postal:</label><br />
            <input type="number" id="codigoPostal" value={codigoPostal} onChange={(e) => setCodigoPostal(e.target.value)} pattern="[0-9]{5}" min="0" max="99999" title="Ingresa un código postal válido de 5 dígitos" required /><br />
          </form>

          <button onClick={handleGuardarCambios}>Guardar Cambios</button>
        </div>
      )}
    </div>
  );
};

export default ModificarRegistros;
