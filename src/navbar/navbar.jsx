import React, { useState } from 'react';
import { Link } from 'react-scroll'; // Importa Link de react-scroll
import './navbar.scss';
import navbarLogo from './navbarLogo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState('inicio');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="contenedor-logo">
        <img src={navbarLogo} alt="Logo" className="navbar-logo" />
      </div>

      <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
        <Link 
          to="inicio" 
          smooth={true} 
          duration={1500} 
          className={selectedLink === 'inicio' ? 'selected' : ''}
          onClick={() => setSelectedLink('inicio')} // Actualiza el estado al hacer clic
        >
          Inicio
        </Link>
        <Link 
          to="quienesSomos" 
          smooth={true} 
          duration={1500} 
          className={selectedLink === 'quienesSomos' ? 'selected' : ''}
          onClick={() => setSelectedLink('quienesSomos')}
        >
          Quiénes Somos
        </Link>
        <Link 
          to="contacto" 
          smooth={true} 
          duration={3000} 
          className={selectedLink === 'contacto' ? 'selected' : ''}
          onClick={() => setSelectedLink('contacto')}
        >
          Contacto
        </Link>
      </nav>

      <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </header>
  );
};

export default Navbar;
