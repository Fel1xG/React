'use client'
import React from 'react';
import "../assets/css/Componente1.css";

const QuienesSomosSection = () => {
  return (
    <section id="quienes-somos">
      <div className="container componente1-texto-negro">
        <h2><b>Quiénes somos</b></h2><br />
        <p>En Macoem Repuestos somos una empresa dedicada a la venta de repuestos automotrices de alta calidad. A pesar de que somos una empresa joven, hemos logrado establecernos como una opción confiable para aquellos que buscan repuestos de calidad a precios competitivos.</p><br/>
        <p>Nuestro equipo de expertos en mecánica automotriz está siempre dispuesto a ayudar a nuestros clientes a encontrar la pieza que necesitan para sus vehículos. Nos enorgullece servir a nuestros clientes y estamos comprometidos con su satisfacción.</p><br/>
        <p>En Macoem Repuestos estamos siempre en busca de nuevas formas de mejorar y crecer para poder seguir brindando el mejor servicio a nuestros clientes. ¡Gracias por confiar en nosotros!</p>
      </div>
    </section>
  );
};

const ProductosSection = () => {
  return (
    <section id="productos">
      <div className="container componente1-texto-negro">
        <h2>Algunos productos que vendemos</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              {/* Ruta relativa para la primera imagen */}
              <img className="card-img-top" src="/assets/img/315674354_479224974187480_903150178947587855_n.jpg" alt="Bandeja RH LH" />
              <div className="card-body">
                <h5 className="card-title">Bandeja RH/LH</h5>
                <p className="card-text">La bandeja RH/LH es una pieza esencial de la suspensión delantera del vehículo para mantener la estabilidad y control. Recomiendo la bandeja de suspensión delantera MOOG por su calidad y durabilidad, garantía limitada de por vida y ajuste perfecto en Chevrolet Aveo y Sail 1.4.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              {/* Ruta relativa para la segunda imagen */}
              <img className="card-img-top" src="/assets/img/314449962_629516332296092_5577945818545484395_n.jpg" alt="Bomba agua Gmb" />
              <div className="card-body">
                <h5 className="card-title">Bomba agua Gmb</h5>
                <p className="card-text">La bomba de agua GMB es una pieza esencial para mantener el motor V6 VQ35DE de 3.5L de la Nissan Murano en buen estado. Es de alta calidad, duradera y está diseñada específicamente para maximizar la eficiencia y prevenir el sobrecalentamiento.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              {/* Ruta relativa para la tercera imagen */}
              <img className="card-img-top" src="/assets/img/308499199_1209659906266886_8724508499833625115_n.jpg" alt="Kit embrage 3 piezas, LUK" />
              <div className="card-body">
                <h5 className="card-title">Kit embrage 3 piezas, LUK</h5>
                <p className="card-text">Kit de embrague LUK de alta calidad de tres piezas para Mahindra Pik Up 2.2 y Mahindra Scorpio 2.2 del 2011 al 2014. Proporciona operación suave y confiable con excelente capacidad de sujeción y rendimiento duradero. Incluye disco de embrague, plato de presión y cojinete de empuje.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const MarcasSection = () => {
  return (
    <section id="marcas">
    <div className="container componente1-texto-negro">
      <h2>Marcas con las que trabajamos</h2>
    <div className="row marcas-grid">
      <div className="col-md-6 marcas-column">
        <div className="marca">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Ford_logo_flat.svg/2560px-Ford_logo_flat.svg.png" alt="Logo de Ford" />
        </div>
        <div className="marca">
          <img src="https://upload.wikimedia.org/wikipedia/commons/8/8c/Nissan_logo.png" alt="Logo de Nissan" />
        </div>
        <div className="marca">
          <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c479.png" alt="Logo de Chevrolet" />
        </div>
        <div className="marca">
          <img src="https://w7.pngwing.com/pngs/266/473/png-transparent-volkswagen-group-car-volkswagen-jetta-wolfsburg-volkswagen-emblem-trademark-logo-thumbnail.png" alt="Logo de Volkswagen" />
        </div>
      </div>
      <div className="col-md-6 marcas-column">
        <div className="marca">
          <img src="https://assets.stickpng.com/thumbs/5ec3e1ee58550c0004427739.png" alt="Logo de Toyota" />
        </div>
        <div className="marca">
          <img src="https://pngimg.com/uploads/bmw_logo/bmw_logo_PNG19701.png" alt="Logo de BMW" />
        </div>
        <div className="marca">
          <img src="https://assets.stickpng.com/thumbs/5ec3e32758550c0004427742.png" alt="Logo de Mazda" />
        </div>
        <div className="marca">
          <img src="https://assets.stickpng.com/thumbs/580b585b2edbce24c47b2c8c.png" alt="Logo de Lamborghini" />
        </div>
      </div>
    </div>
  </div>
</section>
  );
};

const UbicacionSection = () => {
  return (
    <section id="ubicacion">
      <div className="container componente1-texto-negro">
        <h2 className="section-title">¿Dónde estamos ubicados?</h2>
        <p className="section-description">Nos encontramos en Atacama 396, Copiapó</p>
        <div className="map-container">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3543.3135853760423!2d-70.33922532458799!3d-27.36592037637991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9698038a03a84b57%3A0xa4b53d25e1e81ff0!2sAtacama%20396%2C%201530538%20Copiap%C3%B3%2C%20Atacama!5e0!3m2!1ses!2scl!4v1682644251991!5m2!1ses!2scl" width="100%" height="400" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </section>
  );
};


// Componente1 ahora renderiza las secciones HTML
const Componente1 = () => {
  return (
    <div className="componente1-container">
      {/* Incorporar las secciones HTML creadas anteriormente */}
      <QuienesSomosSection />
      <ProductosSection />
      <MarcasSection />
      <UbicacionSection />
    </div>
  );
};

export default Componente1;

