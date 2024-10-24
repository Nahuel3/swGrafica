import React from 'react';
import './publicidad.scss';
import { FaWhatsapp } from 'react-icons/fa';

const Publicidad = () => {
    return (
        <div id="inicio" className='container-publicidad'>
            <a href="https://wa.me/5491157007122" target="_blank" rel="noreferrer" aria-label="Enlace a WhatsApp">
                <h1>CONTACTANOS, <FaWhatsapp className="social-iconWspPubli" /> Y RECIBI TU IMPRESIÓN EN MENOS DE 24 HORAS</h1>
            </a>
        </div>
    );
};

export default Publicidad;