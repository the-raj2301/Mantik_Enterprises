import { useState, useEffect } from 'react';

import './App.css';
import Header from './components/Header';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import StyledMap from './components/StyledMap';
import Products from './components/Products';



function App() {
  const [isVisible, setIsVisible] = useState(false);

  const HandleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const HandleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', HandleScroll);
    return () => {
      window.removeEventListener('scroll', HandleScroll);
    };
  }, []);

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

      {/* Scroll to Top Button */}
      {isVisible && (
      <button
        className="w-12 h-12 fixed bottom-10 right-10 flex items-center justify-center rounded-md bg-gray-900  text-cyan-400 border border-gray-700 shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 ease-in-out"
        onClick={HandleScrollTop}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
      </button>
      )}
    </div>
  );
}


export default App;
