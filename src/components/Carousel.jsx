import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

import './Carousel.css';
import 'magnific-popup/dist/magnific-popup.css';

//Magnific Popup
import $ from 'jquery'; // Ensure jQuery is installed: npm install jquery
import 'magnific-popup';

// import required modules
import {EffectCoverflow, Zoom, Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Carousel() {

  const images = [
    './img/1.jpg',
    './img/bg4.jpg',
    './img/bg5.jpg',
    './img/5.jpg',
  ];

  useEffect(() => {
    $('#main-swiper img').magnificPopup({
      type: 'image' // this is default type

  });
  })

  return (
    <div id='main-swiper'>
      <Swiper 
      id='Carousel'
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      zoom= {true}
      loop={true} 
      navigation={true} 
      modules={[EffectCoverflow, Zoom, Autoplay, Pagination, Navigation]} 
      className="mySwiper max-w-7xl"
      >
        {images.map((src, index) => (
        <SwiperSlide key={index}>
          <img src={src} 
          alt={`image ${index+1}`} 
          data-mfp-src={src}
          className='w-full'/>
        </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
