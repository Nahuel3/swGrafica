import React, { useState } from 'react';
import './presupuesto.scss'; // Asegúrate de tener este archivo para estilos

const Presupuesto = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleExpand = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="presupuesto-container">
      <div className="section-titles">
        <h2 className="section-title" onClick={() => toggleExpand('solicitarPresupuesto')}>
          Solicitar Presupuesto
        </h2>
        <h2 className="section-title" onClick={() => toggleExpand('comoEnviarArchivos')}>
        ¿Cómo enviar archivos?
        </h2>
      </div>

      <div className={`section-content ${expandedSection === 'solicitarPresupuesto' ? 'expanded' : ''}`}>
        <p>
          En un mundo donde la <strong>imagen</strong> y la <strong>presentación</strong> importan más que nunca, es fundamental contar con un <strong>servicio integral que se adapte a tus necesidades</strong> 😉⁣
          Documentos importantes, proyectos creativos ¡Lo que necesites, lo imprimimos!⁣
          En SW Artes Gráficas, estamos listos para dar vida a tus ideas. 
          ¿Tenés un diseño en mente? ¡Nosotros lo hacemos!
        </p>
        <a href="https://wa.me/5491157007122" target="_blank" rel="noopener noreferrer" className="button">Solicitar Presupuesto</a>
      </div>

      <div className={`section-content ${expandedSection === 'comoEnviarArchivos' ? 'expanded' : ''}`}>
        <ul>
          <li>Si es texto, tu archivo debe estar en PDF: si el documento que nos enviás está en otro formato, cualquier modificación que hayas hecho en los márgenes, cualquier imagen que hayas adjuntado o tipografía que hayas elegido desaparecerán y se imprimirá erróneamente.</li>
          <li>Si son diseños de Illustrator o Photoshop y los enviás con esa extensión para que sean editables, asegurate de INCRUSTAR las imágenes, CONVERTIR A CURVAS cualquier texto y EMPAQUETAR el archivo por cualquier cambio que pueda surgir.</li>
          <li>Si son archivos de diseño con medidas específicas, como tarjetas personales, tapas de libros, flyers, etcétera, ¡No olvides LOS MÁRGENES DE SEGURIDAD y LAS MARCAS DE CORTE!</li>
        </ul>
      </div>
    </div>
  );
};

export default Presupuesto;
