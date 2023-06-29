'use client'
import { error } from 'console';
import React, {useState} from 'react'

export const Formulario = () => {
    const [nombre, setNombre] = useState<String>('');
    const [apellido, setApellido] = useState<String>('');
    const [edad, setEdad] = useState<number>(0);
    const [ErrorEdad,setErrorEdad] = useState('');
    const registrar = ()=>{
      if(edad>0){
        console.log("Nombre:",nombre);
        console.log("Apellido:",apellido);
        console.log("Edad:",edad);
        alert("Bienvenido"+nombre+" "+apellido+" Edad: "+edad)
    }else{
      setErrorEdad("La edad debe ser positiva")
    }
}

  return (
    <form>
        <label>Nombre:</label>
        <input type='text' onChange={(e)=>setNombre(e.target.value)}/>
        <br/>
        <br/>
        <label>Apellido:</label>
        <input type='text' onChange={(e)=>setApellido(e.target.value)}/>
        <br/>
        <br/>
        <label>Edad:</label>
        <input type='number' onChange={(e)=>setEdad(parseInt(e.target.value))}/>
        <span>{ErrorEdad}</span>
        <br/>
        <br/>
        <button onClick={registrar}>Registrar</button>
    </form>
  )
}
