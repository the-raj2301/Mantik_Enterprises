import { useState, useEffect } from 'react';

import './App.css';
import Header from './components/Header';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import StyledMap from './components/StyledMap';
import Products from './components/Products';
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { FaWhatsapp, FaWhatsappSquare } from "react-icons/fa";

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
        className="w-10 h-10 fixed md:bottom-10 bottom-5 md:right-10 right-5 flex items-center justify-center rounded-md bg-transparent backdrop-blur-md  text-cyan-400 border border-slate-700 shadow-lg hover:shadow-cyan-400/50 transition-all duration-300 ease-in-out"
        onClick={HandleScrollTop}
      >

        <MdOutlineKeyboardArrowUp className='h-6 w-6' />

      </button>)}
      
      {/* Whatsapp Button */}

      <a
        href="https://wa.me/+919870615500"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 fixed md:bottom-24 bottom-20 md:right-10 right-5 flex items-center justify-center rounded-md border bg-transparent backdrop-blur-md border-slate-700 text-green-500 shadow-lg hover:shadow-green-500/50 transition-all duration-300 ease-in-out"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="w-8 h-8" />
      </a>

    </div>
  );
}


export default App;
