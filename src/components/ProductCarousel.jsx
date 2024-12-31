import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'photoswipe/style.css';

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
    const loadImageDimensions = async () => {
      const imageData = await Promise.all(
        images.map((src) => {
          return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => resolve({ src, w: img.width, h: img.height });
            img.src = src;
          });
        })
      );

      const lightbox = new PhotoSwipeLightbox({
        gallery: '#gallery--zoom-transition',
        children: 'img',
        showHideAnimationType: 'zoom',
        pswpModule: () => import('photoswipe'),
        dataSource: imageData,
      });

      lightbox.init();

      return () => lightbox.destroy();
    };

    loadImageDimensions();
  }, [images]);

  return (
    <>
      <Swiper
        id="gallery--zoom-transition"
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
              data-pswp-index={index}
              className="w-full cursor-pointer"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
