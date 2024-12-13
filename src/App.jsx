import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import Carousel from './components/Carousel'
import Footer from './components/Footer'
import About from './components/About'
import Contact from './components/Contact'
import StyledMap from './components/StyledMap'

function App() {
  const [count, setCount] = useState(0);

  const position = { 
    lat: 19.140890779136594, 
    lng: 72.84299784481418, 
  };

  const size = {
    width: '100vw',
    height: '300px',
}

  return (
    <>
      <Header />
      <Carousel />
      <About />
      <Contact />
      {/* <StyledMap  position={position} size={size}/> */}
      <Footer />
    </>
  )
}

export default App
