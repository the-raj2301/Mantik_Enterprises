import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'magnific-popup/dist/magnific-popup.css';

import $ from 'jquery'; // Ensure jQuery is installed: npm install jquery
import 'magnific-popup';

import { FreeMode, Pagination, Autoplay } from 'swiper/modules';

export default function ProductCarousel() {
  const images = [
    './wp/10.jpg',
    './wp/1.jpg',
    './wp/2.jpg',
    './wp/4.jpg',
    './wp/5.jpg',
    './wp/7.jpg',
    './wp/8.jpg',
    './wp/9.jpg',
    './wp/11.jpg',
  ];

  useEffect(() => {
    // Initialize Magnific Popup
    $('#product-swiper img').magnificPopup({
      type: 'image',
      gallery: {
        enabled: true, // Enables gallery mode
      },
    });
  }, []);

  return (
    <div id="product-swiper">
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        freeMode={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          400: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          600: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[FreeMode, Pagination, Autoplay]}
        className="mySwiper"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Image ${index + 1}`}
              className="w-full cursor-pointer"
              data-mfp-src={src} // Magnific Popup uses this attribute
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
