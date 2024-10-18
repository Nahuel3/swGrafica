// App.js
import React from 'react';
import Navbar from './navbar/navbar';
import Publicidad from './header/publicidad.jsx';
import ImagenFondo from './preSection/imgGraficaSection';
import Section from './Section/section';
import Banner from './banner/banner.jsx';
import Presupuesto from './presupuesto/presupuesto.jsx';
import AyudaC from './ayudaCompra/ayudaCompra.jsx';
import Foters from './footer/footer.jsx';

function App() {
  return (
    <div>
      <Navbar />
      <Publicidad />
      <ImagenFondo />
      <Section />
      <Banner />
      <Presupuesto />
      <AyudaC />
      <Foters />
    </div>
  );
}

export default App;
