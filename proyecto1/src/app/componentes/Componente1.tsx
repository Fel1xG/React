import React from 'react'
interface Props{
    nombre:string,
    apellido?:string,
}

export const Componente1 = (props:Props) => {
  return (
    <div>
        <p>holiiii {props.nombre}{props.apellido}</p>
        <p>lolito</p>    
    </div>
  )
}

