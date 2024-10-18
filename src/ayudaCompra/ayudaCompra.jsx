import React from 'react';
import './ayudaCompra.scss'; // Asegúrate de tener este archivo para estilos

const ayudaC = () => {
  return (
    <div className="contacto-container">
      <h1>¿Necesitás ayuda con tu compra?</h1>
      <p>¡Podemos asesorarte! Escribinos ahora y te ayudamos a elegir correctamente el producto y el material que necesitás para tu proyecto.</p>
      <a href="https://wa.me/5491157007122" target="_blank" rel="noopener noreferrer" className="contact-button">
        Contactar
      </a>
    </div>
  );
};

export default ayudaC;
