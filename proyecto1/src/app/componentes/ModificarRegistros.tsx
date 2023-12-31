'use client'
import React, { useState, useEffect } from 'react';
import { obtenerPersonas, actualizarPersona, eliminarPersona } from '../Firebase/Promesas';
import { PersonaConId } from '../Interfaces';
import { useNavigate, useLocation } from 'react-router-dom';
import "../assets/css/ModificarRegistros.css";

const ModificarRegistros = () => {
  const [personas, setPersonas] = useState<PersonaConId[]>([]);
  const [registroEditar, setRegistroEditar] = useState<PersonaConId | null>(null);
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [genero, setGenero] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [direccion, setDireccion] = useState('');
  const [codigoPostal, setCodigoPostal] = useState('');

  // Estados de error para los campos del formulario
  const [nombreError, setNombreError] = useState('');
  const [correoError, setCorreoError] = useState('');
  const [telefonoError, setTelefonoError] = useState('');
  const [generoError, setGeneroError] = useState('');
  const [fechaNacimientoError, setFechaNacimientoError] = useState('');
  const [ciudadError, setCiudadError] = useState('');
  const [direccionError, setDireccionError] = useState('');
  const [codigoPostalError, setCodigoPostalError] = useState('');

  const handleNombreChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.trim().length < 3) {
      setNombreError('El nombre y apellido deben tener al menos 3 caracteres.');
    } else {
      setNombreError('');
    }
    setNombre(value);
  };
  
  const handleCorreoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!value.includes('@')) {
      setCorreoError('Ingresa un correo válido.');
    } else {
      setCorreoError('');
    }
    setCorreo(value);
  };
  
  const handleTelefonoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length !== 9 || !value.match(/^[0-9]+$/)) {
      setTelefonoError('Ingresa un número de teléfono válido de 9 dígitos.');
    } else {
      setTelefonoError('');
    }
    setTelefono(value);
  };
  
  const handleFechaNacimientoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const dateOfBirth = new Date(value);
    const currentDate = new Date();
    const age = currentDate.getFullYear() - dateOfBirth.getFullYear();
  
    if (age < 18) {
      setFechaNacimientoError('Debes tener al menos 18 años.');
    } else {
      setFechaNacimientoError('');
    }
    setFechaNacimiento(value);
  };
  
  const handleCiudadChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value === '') {
      setCiudadError('Selecciona una ciudad.');
    } else {
      setCiudadError('');
    }
    setCiudad(value);
  };
  
  const handleDireccionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    if (value.trim().length < 10) {
      setDireccionError('La dirección debe tener al menos 10 caracteres.');
    } else {
      setDireccionError('');
    }
    setDireccion(value);
  };
  
  const handleCodigoPostalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!value.match(/^[0-9]{7}$/)) {
      setCodigoPostalError('Ingresa un código postal válido de 7 dígitos.');
    } else {
      setCodigoPostalError('');
    }
    setCodigoPostal(value);
  };

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
  const handleEliminar = async (persona: PersonaConId) => {
    // Llama a la función para eliminar el registro directamente
    await eliminarPersona(persona.idPersona);
  
    // Recarga la lista de personas después de eliminar el registro
    obtenerPersonas().then((listado) => {
      setPersonas(listado);
    });
  };

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
                <button className="editar" onClick={() => handleEditar(p)}>
                  Editar
                </button>
                <button className="eliminar" onClick={() => handleEliminar(p)}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {registroEditar && (
        <div>
          <h2>Modificar Registro</h2>
          <form id="editarRegistroForm">
            <label htmlFor="nombre">Nombre y Apellido:</label>
            <input
              type="text"
              id="nombre"
              value={nombre}
              onChange={handleNombreChange}
              required
            />
            {nombreError && <p className="error-message">{nombreError}</p>}<br/>
  
            <label htmlFor="correo">Correo:</label>
            <input
              type="email"
              id="correo"
              value={correo}
              onChange={handleCorreoChange}
              required
            />
            {correoError && <p className="error-message">{correoError}</p>}
  
            <label htmlFor="telefono">Teléfono:</label>
            <input
              type="tel"
              id="telefono"
              value={telefono}
              onChange={handleTelefonoChange}
              required
            />
            {telefonoError && <p className="error-message">{telefonoError}</p>}<br/>
            
            <label>Género:</label>
            <div className="genero-container">
              <div className="genero-buttons">
                <label htmlFor="genero-masculino">Masculino</label>
                <input
                  type="radio"
                  id="genero-masculino"
                  name="genero"
                  value="masculino"
                  checked={genero === 'masculino'}
                  onChange={(e) => setGenero(e.target.value)}
                  required
                />
                <label htmlFor="genero-femenino">Femenino</label>
                <input
                  type="radio"
                  id="genero-femenino"
                  name="genero"
                  value="femenino"
                  checked={genero === 'femenino'}
                  onChange={(e) => setGenero(e.target.value)}
                  required
                />
              </div>
              {generoError && <p className="error-message">{generoError}</p>} {/* Mostrar mensaje de error */}
            </div><br/>
  
            <label htmlFor="fechaNacimiento">Fecha de Nacimiento:</label>
            <input
              type="date"
              id="fechaNacimiento"
              value={fechaNacimiento}
              onChange={handleFechaNacimientoChange}
              required
            />
            {fechaNacimientoError && (
              <p className="error-message">{fechaNacimientoError}</p>
            )}
  
            <label htmlFor="ciudad">Ciudad:</label>
            <select
              id="busquedaCiudad"
              value={ciudad}
              onChange={handleCiudadChange}
              required
            >
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
</select>
            {ciudadError && <p className="error-message">{ciudadError}</p>}<br/>
  
            <label htmlFor="direccion">Dirección:</label>
            <textarea
              id="direccion"
              value={direccion}
              onChange={handleDireccionChange}
              required
            ></textarea>
            {/* Mostrar mensaje de error para dirección (opcional) */}
            {direccionError && <p className="error-message">{direccionError}</p>}<br/>
  
            <label htmlFor="codigoPostal">Código Postal:</label>
            <input
              type="number"
              id="codigoPostal"
              value={codigoPostal}
              onChange={handleCodigoPostalChange}
              pattern="[0-9]{5}"
              min="0"
              max="99999"
              title="Ingresa un código postal válido de 7 dígitos"
              required
            />
            {codigoPostalError && (
              <p className="error-message">{codigoPostalError}</p> 
            )}
          </form><br/>
          <button className="guardar" onClick={handleGuardarCambios}>
            Guardar Cambios
          </button>
        </div>
      )}
    </div>
  );
}  
export default ModificarRegistros;
