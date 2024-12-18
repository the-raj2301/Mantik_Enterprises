import { useState } from 'react';

import './App.css';
import Header from './components/Header';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import StyledMap from './components/StyledMap';
import Products from './components/Products';

function App() {

  const position = {
    lat: 19.140890779136594,
    lng: 72.84299784481418,
  };

  const size = {
    width: '100vw',
    height: '400px',
  };

  return (
    <div className="relative">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main>
        <Carousel />
        <Products />
        <About />
        <Contact />

        {/* Map (Hidden on Large Screens) */}
        <div className="lg:hidden block">
          <StyledMap position={position} size={size} />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
