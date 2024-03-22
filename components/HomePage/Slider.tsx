'use client';

import "swiper/css";
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

export default function Slider() {

  return (
    <>
        <Swiper 
          spaceBetween={100}
          slidesPerView={1}
          loop={true}
          className="rounded-3xl w-full h-[250px] md:h-[340px] lg:h-[480px] shadow-md object-cover"
        >
          <SwiperSlide><Image fill className="object-cover" src='/banner.png' alt='banner' quality={100}/></SwiperSlide>
          <SwiperSlide><Image fill className="object-cover" src='/banner.png' alt='banner' quality={100}/></SwiperSlide>
          <SwiperSlide><Image fill className="object-cover" src='/banner.png' alt='banner' quality={100}/></SwiperSlide>
          <SwiperSlide><Image fill className="object-cover" src='/banner.png' alt='banner' quality={100}/></SwiperSlide>
        </Swiper>
    </>
  );
}
