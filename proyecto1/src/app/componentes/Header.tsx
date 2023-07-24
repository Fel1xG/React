'use client'
import React from 'react';
import { Link } from 'react-router-dom';
import "../assets/css/Header.css";
import logo from "../assets/img/WhatsApp Image 2023-04-29 at 18.07.12-fotor-bg-remover-2023042918657.png";

export const Header = () => {
  return (
    <nav className="header-container">
      <div className="logo-container">
        <Link to={"/"}>
          <img src={"/assets/img/WhatsApp Image 2023-04-29 at 18.07.12-fotor-bg-remover-2023042918657.png"} alt="Logo de mi página" />
        </Link>
      </div>
      <div className="nav-links">
        <Link to={"/"}>Home</Link>
        <Link to={"/formulario"}>Formulario</Link>
        <Link to={"/registros"}>Registros</Link>
      </div>
    </nav>
  );
};
