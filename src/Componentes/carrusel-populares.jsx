import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import TarjetaCategoria from './tarjetaCategoria';

function carruselPopulares() {
  return (
    <>
    <h2>Los más populares</h2>
          <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><TarjetaCategoria/></SwiperSlide>
        <SwiperSlide><TarjetaCategoria/></SwiperSlide>
        <SwiperSlide><TarjetaCategoria/></SwiperSlide>
        <SwiperSlide><TarjetaCategoria/></SwiperSlide>
        <SwiperSlide><TarjetaCategoria/></SwiperSlide>
        <SwiperSlide><TarjetaCategoria/></SwiperSlide>
        <SwiperSlide><TarjetaCategoria/></SwiperSlide>
        <SwiperSlide><TarjetaCategoria/></SwiperSlide>
        <SwiperSlide><TarjetaCategoria/></SwiperSlide>
      </Swiper>
    </>
  );
}

export default carruselPopulares;