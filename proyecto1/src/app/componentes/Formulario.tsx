'use client'
import React, { useState } from 'react';
import { Persona } from '../Interfaces';
import { registrarPersona } from '../Firebase/Promesas';
import "../assets/css/Formulario.css";

export const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [genero, setGenero] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [direccion, setDireccion] = useState('');
  const [codigoPostal, setCodigoPostal] = useState('');

  // Estado para controlar el mensaje de error de cada campo
  const [nombreError, setNombreError] = useState('');
  const [correoError, setCorreoError] = useState('');
  const [telefonoError, setTelefonoError] = useState('');
  const [codigoPostalError, setCodigoPostalError] = useState('');

  const validarCampos = () => {
    if (
      nombre.trim() === '' ||
      correo.trim() === '' ||
      telefono.trim() === '' ||
      genero === '' ||
      fechaNacimiento.trim() === '' ||
      ciudad === '' ||
      direccion.trim() === '' ||
      codigoPostal.trim() === ''
    ) {
      return false; // Al menos un campo requerido está vacío
    }
    return true; // Todos los campos requeridos están completos
  };

  const validarNombre = () => {
    if (nombre.trim() === '') {
      setNombreError('El nombre es obligatorio');
    } else {
      setNombreError('');
    }
  };

  const validarCorreo = () => {
    // Expresión regular para validar el formato del correo electrónico
    const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!correoRegex.test(correo)) {
      setCorreoError('El correo electrónico no es válido');
    } else {
      setCorreoError('');
    }
  };

  const validarTelefono = () => {
    // Expresión regular para validar el formato del teléfono
    const telefonoRegex = /^\d{7,10}$/;

    if (!telefonoRegex.test(telefono)) {
      setTelefonoError('El teléfono no es válido');
    } else {
      setTelefonoError('');
    }
  };

  const validarCodigoPostal = () => {
    if (codigoPostal.trim() === '' || codigoPostal.length !== 7) {
      setCodigoPostalError('El código postal debe tener 7 dígitos');
    } else {
      setCodigoPostalError('');
    }
  };

  const registrar = () => {
    // Aquí puedes utilizar los valores de los campos de estado directamente
    // ya que hemos estado utilizando las funciones set para actualizarlos.
    validarNombre();
    validarCorreo();
    validarTelefono();
    validarCodigoPostal();
    
    console.log("Nombre:", nombre);
    console.log("Correo:", correo);
    console.log("Teléfono:", telefono);
    console.log("Género:", genero);
    console.log("Fecha de Nacimiento:", fechaNacimiento);
    console.log("Ciudad:", ciudad);
    console.log("Dirección:", direccion);
    console.log("Código Postal:", codigoPostal);

        // Si algún campo tiene error, no se registra la persona
        if (nombreError || correoError || telefonoError || codigoPostalError) {
          alert('Por favor, completa todos los campos correctamente.');
          return;
        }

        if (!validarCampos()) {
          alert('Por favor, completa todos los campos antes de registrar.');
          return;
        }

    const p: Persona = {
      nombre: nombre,
      correo: correo,
      telefono: telefono,
      genero: genero,
      fechaNacimiento: fechaNacimiento,
      ciudad: ciudad,
      direccion: direccion,
      codigoPostal: codigoPostal,
    };

    // Guardar en la base de datos
    registrarPersona(p);
    alert("Gracias por tu registro " + nombre);
  };

  return (
    <div className="form-container">
      <h1>Registrar</h1>
      <form id="registroForm">
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

        {/* Mensajes de error para cada campo */}
        <p className="error">{nombreError}</p>
        <p className="error">{correoError}</p>
        <p className="error">{telefonoError}</p>
        <p className="error">{codigoPostalError}</p>
      <button type="button" onClick={registrar}>
          Registrar
        </button>
      </form>
    </div>
  );
};