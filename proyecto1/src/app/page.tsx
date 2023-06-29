import Image from 'next/image'
import styles from './page.module.css'
import { Componente1 } from './componentes/Componente1'
import { Formulario } from './componentes/Formulario'

export default function Home() {
  return (
  <>
  <p>hola</p>
  <p>chao mundo</p>
  <Componente1 nombre="Jose" apellido=' Parada'></Componente1>

  <Componente1 nombre="Gabriel"/>

  <Formulario/>
  </>
  )
}