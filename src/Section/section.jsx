import React, { useState} from 'react';
import './section.scss';


const articles = [
  {
    title: 'Artículo 1',
    image: require('./imgSectionsArticulos/cuadricula1.png'),
   
  },
  {
    title: 'Artículo 2',
    image: require('./imgSectionsArticulos/cuadricula2.png'),
  
  },
  {
    title: 'Artículo 3',
    image: require('./imgSectionsArticulos/cuadricula3.png'),
  },

  {
  title: 'Artículo 4',
  image: require('./imgSectionsArticulos/cuadricula4.png'),
  },

  {
    title: 'Artículo 5',
    image: require('./imgSectionsArticulos/cuadricula5.png'),
    }

];


const Section = () => {
  const [expandedSection, setExpandedSection] = useState(null);



  const toggleExpand = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };




  return (
    <div id='quienesSomos' className="sections-container">
      <div className="section-titles">
        <h2 className="section-title" onClick={() => toggleExpand('quienesSomos')}>
          ¿Quiénes Somos?
        </h2>
        <h2 className="section-title" onClick={() => toggleExpand('impresiones')}>
          ¿Qué ofrecemos?
        </h2>
        <h2 className="section-title" onClick={() => toggleExpand('sostenibilidad')}>
          Impresión Sostenible
        </h2>
      </div>

      <div className={`section-content ${expandedSection === 'quienesSomos' ? 'expanded' : ''}`}>
        <p>
          En SW Artes Gráficas nos proponemos liderar el sector de la impresión offset digital mediante la entrega de soluciones de alta calidad y de forma eficiente. Nuestro compromiso incluye minimizar costos y reducir la huella ecológica a través de tecnologías innovadoras, uso de materiales reciclados y mejora continua de nuestros procesos. Aspiramos a la transición hacia una impresión más sostenible, impulsando la innovación y manteniendo un firme compromiso con nuestros clientes.
        </p>
      </div>

      <div className={`section-content ${expandedSection === 'impresiones' ? 'expanded' : ''}`}>
        <p>
          Más de 40 años de excelencia en impresión, combinando rapidez, calidad y precisión.
          En SW Artes Gráficas, brindamos soluciones integrales: desde impresiones digitales hasta tarjetas personalizadas. Con tecnología de vanguardia y un fuerte compromiso con la sostenibilidad, hacemos que tus ideas cobren vida en cada proyecto. Tú decides el límite.
          <a className='a-presupuesto' href="https://wa.me/5491157007122" target="_blank" rel="noreferrer" aria-label="Enlace a WhatsApp">
            <button className='btn-whatsapp'>
              <b>Solicita tu presupuesto ahora y recibe atención personalizada</b>
            </button>
          </a>

        </p>

        <div className="image-grid">
          {articles.map((article, index) => (
            <img
              key={index}
              src={article.image}
              alt={`Trabajo ${index + 1}`}
              className="grid-image"
            />
          ))}
        </div>

      </div>

      <div className={`section-content ${expandedSection === 'sostenibilidad' ? 'expanded' : ''}`}>
        <p>En SW Artes Gráficas, la sostenibilidad es un compromiso central. Sabemos que esta industria ha sido contaminante, pero creemos que es posible ofrecer productos de alta calidad de forma responsable. Por eso, hemos implementado prácticas y tecnologías que reducen nuestro impacto ambiental:
        </p>
        <ul>
          <li>Eficiencia energética</li>
          <li>Papel de caña y papel de rotación</li>
          <li>Tintas ecológicas y reciclables</li>
          <li>Reutilización y reciclaje de materiales;</li>
        </ul>


      </div>
    </div>
  );
};

export default Section;
