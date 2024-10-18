import React from 'react';
import './footer.scss'; // Asegúrate de tener un archivo de estilos para el footer
import navbarLogo from '../navbar/navbarLogo.png'; // Logo de tu empresa
import mercadopagoLogo from '../assets/mercadoPago.jpg'; // Ruta del logo de Mercado Pago
import bancoSeguroLogo from '../assets/bancoSeguro.png'; // Ruta del logo de Banco Seguro
import { FaFacebookF, FaInstagram, FaWhatsapp, FaRegEnvelope } from 'react-icons/fa'; // Importa iconos de react-icons

const Foters = () => {
    return (
        <footer id='contacto' className="footer">
            <div className="footer-content">
            <div className="logo-container"> {/* Nuevo contenedor para los logos */}
                    <img src={navbarLogo} alt="Logo" className="footer-logo" />
                    <img src={mercadopagoLogo} alt="Logo Mercado Pago" className="small-logo" />
                    <img src={bancoSeguroLogo} alt="Logo Banco Seguro" className="small-logo" />
                </div>
                <div className="contact-info">
                    <div className="find-us">
                        <span>Encontranos en:</span>
                    </div>
                    <div className="contact-items"> {/* Añadido contenedor para alinear los elementos */}
                        <div className="contact-item">
                            <a href="https://wa.me/5491157007122" target="_blank" rel="noreferrer">
                                <FaWhatsapp className="social-iconWsp" />
                                <p>+54 9 11 5700-7122</p>
                            </a>
                        </div>
                        <div className="contact-item">
                            <a href="https://www.instagram.com/sw_artesgraficas/" target="_blank" rel="noreferrer">
                                <FaInstagram className="social-iconInstagram" />
                                <p>@sw_artesgraficas</p>
                            </a>
                        </div>
                        <div className="contact-item">
                            <a href="https://www.facebook.com/artesgraficas.sw/" target="_blank" rel="noreferrer">
                                <FaFacebookF className="social-iconFacebook" />
                                <p>SW Artes Gráficas</p>
                            </a>
                        </div>
                        <div className="contact-item">
                            <a href="mailto:sw.impresion@gmail.com" target="_blank" rel="noreferrer">
                                <FaRegEnvelope className="social-iconGmail" />
                                <p>sw.impresion@gmail.com</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
           
        </footer>
    );
};

export default Foters;
