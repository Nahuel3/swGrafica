// App.js
import React from 'react';
import Navbar from './navbar/navbar';
import Publicidad from './header/publicidad.jsx';
import ImagenFondo from './preSection/imgGraficaSection';
import Section from './Section/section';
import Foters from './footer/footer.jsx';

function App() {
  return (
    <div>
      <Navbar />
      <Publicidad />
      <ImagenFondo />
      <Section />
      <Foters />
    </div>
  );
}

export default App;
