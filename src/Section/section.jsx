import React, { useState, useEffect } from 'react';
import './section.scss';

const articles = [
  {
    title: 'Artículo 1',
    image: require('./imgSectionsArticulos/almanaque.jpg'),
    description: 'Almanaque feliz 2024.'
  },
  {
    title: 'Artículo 2',
    image: require('./imgSectionsArticulos/almanaqueFamiliar.jpg'),
    description: 'Almanaque creado con fotos familiares.'
  },
  {
    title: 'Artículo 3',
    image: require('./imgSectionsArticulos/almanaqueTransporte.jpg'),
    description: 'Un almanaque de transporte.'
  }
];

const sustainabilityImages = [
  {
    image: 'https://via.placeholder.com/800x400?text=Energía+Renovable',
    description: 'Eficiencia energética en nuestros procesos.'
  },
  {
    image: 'https://via.placeholder.com/800x400?text=Papel+Reciclado',
    description: 'Papel de caña y papel de rotación.'
  },
  {
    image: 'https://via.placeholder.com/800x400?text=Tinta+Ecológica',
    description: 'Tinta ecológica y reciclable para impresiones más sostenibles.'
  }
];

const Section = () => {
  const [expandedSection, setExpandedSection] = useState(null);
  const [currentArticleIndex, setCurrentArticleIndex] = useState(0);
  const [currentSustainabilityIndex, setCurrentSustainabilityIndex] = useState(0);

  const toggleExpand = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const handleArticleClick = (index) => {
    setCurrentArticleIndex(index);
  };

  // Efecto para cambiar la imagen en "Impresiones y Gráfica" cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentArticleIndex((prevIndex) => (prevIndex + 1) % articles.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Efecto para cambiar la imagen en "Sostenibilidad" cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSustainabilityIndex((prevIndex) => (prevIndex + 1) % sustainabilityImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="quienesSomos" className="section">
      <h2 className="section-title" onClick={() => toggleExpand('quienesSomos')}>
        ¿Quiénes Somos?
      </h2>
      <div className={`section-content ${expandedSection === 'quienesSomos' ? 'expanded' : ''}`}>
        En SW Artes Gráficas nos proponemos liderar el sector de la impresión digital mediante la entrega de soluciones de alta calidad y de forma eficiente. Nuestro compromiso incluye minimizar costos y reducir la huella ecológica a través de tecnologías innovadoras, uso de materiales reciclados y mejora continua de nuestros procesos.
      </div>

      <h2 className="section-title" onClick={() => toggleExpand('impresiones')}>
        Impresiones y Gráfica
      </h2>
      <div className={`section-content ${expandedSection === 'impresiones' ? 'expanded' : ''}`}>
        <div className="image-carousel">
          <img
            src={articles[currentArticleIndex].image}
            alt={`Trabajo ${currentArticleIndex + 1}`}
            className="carousel-image"
          />
          <p className="carousel-description">{articles[currentArticleIndex].description}</p>
        </div>
        <ul className="article-list">
          {articles.map((article, index) => (
            <li
              key={index}
              className="article-item"
              onClick={() => handleArticleClick(index)}
            >
              {article.title}
            </li>
          ))}
        </ul>
      </div>

      <h2 className="section-title" onClick={() => toggleExpand('sostenibilidad')}>
        Sostenibilidad: Un Compromiso con el Futuro
      </h2>
      <div className={`section-content ${expandedSection === 'sostenibilidad' ? 'expanded' : ''}`}>
        <p>En SW Artes Gráficas, la sostenibilidad es un compromiso central. Sabemos que esta industria ha sido contaminante, pero creemos que es posible ofrecer productos de alta calidad de forma responsable. Por eso, hemos implementado prácticas y tecnologías que reducen nuestro impacto ambiental: eficiencia energética; Papel de caña y papel de rotación; tintas ecológicas y reciclables; reutilización y reciclaje de materiales.</p>
        <div className="image-carousel">
          <img
            src={sustainabilityImages[currentSustainabilityIndex].image}
            alt={`Sostenibilidad ${currentSustainabilityIndex + 1}`}
            className="carousel-image"
          />
          <p className="carousel-description">{sustainabilityImages[currentSustainabilityIndex].description}</p>
        </div>
      </div>
    </div>
  );
};

export default Section;
