import React from 'react';
import './imgGrafica.scss';
import imgPortada from './swFotoBackground.png'; // Logo de tu empresa

const ImgGraficaSection = () => {
  return (
    <div className="image-container">
      <img
         src={imgPortada}
        alt="Gráfica"
        className="responsive-image"
      />
    </div>
  );
}

export default ImgGraficaSection;
