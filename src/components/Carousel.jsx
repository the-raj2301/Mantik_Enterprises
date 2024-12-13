import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

import './Carousel.css';

// import required modules
import {EffectCoverflow, Zoom, Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Carousel() {
  return (
    <>
      <Swiper 

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
        <SwiperSlide><img src='./img/1.jpg' className='w-full'/></SwiperSlide>
        <SwiperSlide><img src='./img/bg4.jpg' className='w-full'/></SwiperSlide>
        <SwiperSlide><img src='./img/3.jpg' className='w-full'/></SwiperSlide>
        <SwiperSlide><img src='./img/bg5.jpg' className='w-full'/></SwiperSlide>
        <SwiperSlide><img src='./img/5.jpg' className='w-full'/></SwiperSlide>
        <SwiperSlide><img src='./img/bg6.jpg' className='w-full'/></SwiperSlide>
      </Swiper>
    </>
  );
}
