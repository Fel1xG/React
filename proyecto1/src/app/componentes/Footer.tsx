'use client'
import React from 'react'
import "../assets/css/Footer.css";
import "@fortawesome/fontawesome-free/css/all.css";

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          {/* Columna de Información de contacto */}
          <div className="col-md-4">
            <h4>Información de contacto</h4>
            <p>Dirección: Atacama 396, Copiapó</p>
            <p>Teléfono: +56 9 8474 5281</p>
            <p>Email: macoemeirll@gmail.com</p>
          </div>

          {/* Columna de Horario de atención */}
          <div className="col-md-4">
            <h4>Horario de atención</h4>
            <p>Lunes a viernes: 9:00 AM - 18:00 PM</p>
            <p>Sábados: 9:00 AM - 14:00 PM</p>
            <p>Domingos: Cerrado</p>
            <p>Festivos/Feriados: Cerrado</p>
          </div>

          {/* Columna de Síguenos y contáctanos en nuestras redes sociales */}
          <div className="col-md-4">
            <h4>Síguenos y contáctanos en nuestras redes sociales</h4>
            <ul className="social-icons">
              <li>
                <a href="https://api.whatsapp.com/send?phone=56984745281">
                  <i className="fab fa-whatsapp"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/macoem.repuestos/">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="mailto:macoemeirll@gmail.com">
                  <i className="far fa-envelope"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
