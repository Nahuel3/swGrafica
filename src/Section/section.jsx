import React, { useState, useEffect } from 'react';
import './section.scss';

const articles = [
  { title: 'Artículo 1', image: require('./imgSectionsArticulos/cuadricula1.png') },
  { title: 'Artículo 2', image: require('./imgSectionsArticulos/cuadricula2.png') },
  { title: 'Artículo 3', image: require('./imgSectionsArticulos/cuadricula3.png') },
  { title: 'Artículo 4', image: require('./imgSectionsArticulos/cuadricula4.png') },
  { title: 'Artículo 5', image: require('./imgSectionsArticulos/cuadricula5.png') }
];

const Section = () => {
  const [expandedSection, setExpandedSection] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const toggleExpand = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  // useEffect para rotar imágenes automáticamente cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % articles.length);
    }, 2000); // Cambia la imagen cada 2 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div id='quienesSomos' className="sections-container">
      <div className="section-titles">
        <h2 className="section-title" onClick={() => toggleExpand('quienesSomos')}>¿Quiénes Somos?</h2>
        <h2 className="section-title" onClick={() => toggleExpand('sostenibilidad')}>Impresión Sostenible</h2>
      </div>

      <div className={`section-contentParteCarrousel ${expandedSection === 'quienesSomos' ? 'expanded' : ''}`}>
        <div className="content-left">
          <p>
          En SW Artes Gráficas, nos destacamos en el sector de la impresión offset digital, ofreciendo soluciones de alta calidad de manera rápida y eficiente. Con más de 40 años de experiencia, combinamos rapidez, precisión y un fuerte compromiso con la sostenibilidad para hacer realidad tus ideas en cada proyecto, desde impresiones digitales hasta tarjetas personalizadas. Nos enfocamos en reducir costos y minimizar nuestra huella ecológica mediante el uso de tecnologías de vanguardia y materiales reciclados, impulsando así la innovación y una impresión más sostenible. Tú decides el límite; nosotros lo hacemos posible.
          </p>
          <a className='a-presupuesto' href="https://wa.me/5491157007122" target="_blank" rel="noreferrer" aria-label="Enlace a WhatsApp">
            <button className='btn-whatsapp'>
              <b>Solicita tu presupuesto ahora y recibe atención personalizada</b>
            </button>
          </a>
        </div>

        <div className="content-right">
          <img
            src={articles[currentImageIndex].image}
            alt={articles[currentImageIndex].title}
            className="carousel-image"
          />
        </div>
      </div>

      <div className={`section-content ${expandedSection === 'sostenibilidad' ? 'expanded' : ''}`}>
        <p>En SW Artes Gráficas, la sostenibilidad es un compromiso central. Sabemos que esta industria ha sido contaminante, pero creemos que es posible ofrecer productos de alta calidad de forma responsable. Por eso, hemos implementado prácticas y tecnologías que reducen nuestro impacto ambiental:</p>
        <ul>
          <li>Eficiencia energética</li>
          <li>Papel de caña y papel de rotación</li>
          <li>Tintas ecológicas y reciclables</li>
          <li>Reutilización y reciclaje de materiales</li>
        </ul>
      </div>
    </div>
  );
};

export default Section;
