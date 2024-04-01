/* eslint-disable @next/next/no-img-element */
"use client";

import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";

interface Props {
  imgWidth: number;
  imgHeight: number;
  padding: number;
}

export default function Slider() {

  const isMobile = useMediaQuery({ maxWidth: 430 });
  const isTablet = useMediaQuery({ minWidth: 431, maxWidth: 1024 });
  const [prop, setProp] = useState<Props>({
    imgWidth: 402,
    imgHeight: 134,
    padding: 20,
  });

  useEffect(() => {
    setProp(
      isMobile
        ? {
            imgWidth: window.innerWidth,
            imgHeight: 180,
            padding: 20
          }
        : isTablet
        ? {
            imgWidth: window.innerWidth,
            imgHeight: 300,
            padding: 30
          }
        : {
            imgWidth: window.innerWidth,
            imgHeight: 360,
            padding: 60
          }
    );
  }, [isMobile, isTablet, setProp]);

  return (
    <>
      <Swiper
        autoplay={{ delay: 3000 }}
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        className="rounded-3xl"
        style={{
          width: prop.imgWidth - prop.padding,
          maxWidth: 1060,
        }}
        modules={[Autoplay]}
      >
        <SwiperSlide className="flex items-center justify-center">
          <img
            className="object-cover object-center"
            src="/assets/home/banner.png"
            alt="banner1"
            style={{
              width: prop.imgWidth,
              height: prop.imgHeight,
              maxWidth: 1060,
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-cover object-center w-full h-auto"
            src="/assets/home/banner_2.png"
            alt="banner1"
            style={{
              width: prop.imgWidth,
              height: prop.imgHeight,
              maxWidth: 1060,
            }}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
