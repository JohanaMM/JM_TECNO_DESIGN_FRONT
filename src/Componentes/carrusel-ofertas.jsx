import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import '../estilos/carrusel-oferta.css'
import ECommerceCard from './card';

function CarruselOfertas() {
  return (
    <>
    <h2>Ofertas</h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><ECommerceCard/></SwiperSlide>
        <SwiperSlide><ECommerceCard/></SwiperSlide>
        <SwiperSlide><ECommerceCard/></SwiperSlide>
        <SwiperSlide><ECommerceCard/></SwiperSlide>
        <SwiperSlide><ECommerceCard/></SwiperSlide>
        <SwiperSlide><ECommerceCard/></SwiperSlide>
        <SwiperSlide><ECommerceCard/></SwiperSlide>
        <SwiperSlide><ECommerceCard/></SwiperSlide>
        <SwiperSlide><ECommerceCard/></SwiperSlide>
      </Swiper>
    </>
  );
}

export default CarruselOfertas