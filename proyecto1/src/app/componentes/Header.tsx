'use client'
// Header.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../assets/css/Header.css";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleSectionClick = (sectionId: string) => {
    toggleMenu();

    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      const yOffset = -60; // Ajuste de desplazamiento vertical para compensar el header
      const y = sectionElement.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <nav className="header-container">
      <div className="logo-container">
        <Link to={"/"}>
          <img src={"/assets/img/WhatsApp Image 2023-07-24 at 22.09.14.jpeg.png"} alt="Logo de mi página" />
        </Link>
      </div>
      <div className="nav-links">
        <Link to={"/"}>Home</Link>
        <Link to={"/formulario"}>Formulario</Link>
        <Link to={"/registros"}>Ver Registros</Link>
        <Link to={"/modificar-registros"}>Modificar Registros</Link> {/* Agrega el enlace */}
        <button className="menu-button" onClick={toggleMenu}>Menu</button> {/* Botón para mostrar/ocultar el menú desplegable */}
      </div>
      {showMenu && (
        <React.Fragment>
          <button className="overlay" onClick={toggleMenu}></button>
          <div className="dropdown-menu">
            <button onClick={() => handleSectionClick("quienes-somos")}>Quiénes Somos</button>
            <button onClick={() => handleSectionClick("productos")}>Productos</button>
            <button onClick={() => handleSectionClick("marcas")}>Marcas</button>
            <button onClick={() => handleSectionClick("ubicacion")}>Ubicación</button>
          </div>
        </React.Fragment>
      )}
    </nav>
  );
};

export default Header;