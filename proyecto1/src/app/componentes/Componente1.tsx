'use client'
import React from 'react'
import "../assets/css/Componente1.css"
interface Props{
    nombre?:string,
    apellido?:string,
}

export const Componente1 = (props:Props) => {
  return (
    <div className='componente1-fondo'>
        <p>holiiii {props.nombre}{props.apellido}</p>
        <p>lolito</p>    
    </div>
  )
}

