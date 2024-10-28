import React, { useState, useEffect } from 'react';
import './banner.scss';
import comoComprar from './comoComprar.png';
import enviarFormato from './enviarFormato.png';

const Banner = () => {
  const images = [comoComprar, enviarFormato];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="banner">
      {images.map((image, index) => (
        <a
          key={index}
          href="https://wa.me/5491157007122"
          target="_blank"
          rel="noreferrer"
          aria-label="Enlace a WhatsApp"
          className={`banner-link ${index === currentIndex ? 'active' : ''}`}
        >
          <img
            src={image}
            alt={`Banner ${index + 1}`}
            className={`banner-image ${index === currentIndex ? 'active' : ''}`}
          />
        </a>
      ))}
    </div>
  );
};

export default Banner;
