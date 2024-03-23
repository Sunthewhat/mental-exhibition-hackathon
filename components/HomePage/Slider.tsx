"use client";

import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Autoplay } from "swiper/modules";

export default function Slider() {


  return (
    <>
      <Swiper
        autoplay={{ delay: 3000 }}
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        className="md:rounded-3xl w-full h-[200px] md:h-[360px]"
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <Image
            fill
            className="w-auto h-auto object-cover"
            src="/banner_1.svg"
            alt="banner"
            quality={100}
            priority
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            fill
            className="w-auto h-auto object-cover"
            src="/banner_2.svg"
            alt="banner"
            quality={100}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
