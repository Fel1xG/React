'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { Componente1 } from './componentes/Componente1'
import { Formulario } from './componentes/Formulario'
import { Header } from './componentes/Header'
import { AppRouter } from './router/AppRouter'
import { BrowserRouter } from 'react-router-dom'
import { Footer } from './componentes/Footer'
export default function Home() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <AppRouter/>
    <Footer/>
    </BrowserRouter>
    </>
  )
}