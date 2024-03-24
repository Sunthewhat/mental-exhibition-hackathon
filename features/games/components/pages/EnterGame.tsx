"use client";

import ShineBox from "@/features/shared/components/Shinebox";
import { useFonts } from "@/features/shared/hooks/useFont";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useMediaQuery } from "react-responsive";

const EnterGame = () => {
  const isMobile = useMediaQuery({ maxWidth: 430 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const { subHeader } = useFonts();

  const res_buttonStyle = {
    base: `relative flex items-center justify-center ${subHeader.className} text-white rounded-[20px] bg-gradient-to-r from-[#ddcdfa] via-[#f1d2ee] to-[#ddcdfa]`,
    mobile: `text-base w-[130px] h-[44px]`,
    tablet: `text-[32px] w-[230px] h-[75px]`,
  };

  const style = isMobile
    ? `${res_buttonStyle.mobile} ${res_buttonStyle.base}`
    : `${res_buttonStyle.base} ${res_buttonStyle.tablet}`;

  const prop = isMobile
    ? {
        boxSize: 180,
        size: 140,
      }
    : isTablet
    ? {
        boxSize: 280,
        size: 240,
      }
    : {
        boxSize: 330,
        size: 300,
      };
  return (
    <div className="relative flex flex-col w-full items-center justify-center ">
      <ShineBox blurAmount="blur-xl" boxSize={prop.boxSize} className="mt-32">
        <Image
          src="/assets/logo.svg"
          alt="logo"
          width={prop.size}
          height={prop.size}
          className="mt-32"
        />
      </ShineBox>

      <div className="relative flex items-center justify-center mt-48 xs:mt-64 md:mt-16">
        <div className="absolute w-[120%] h-[120%] bg-white blur-xl">I</div>
        <Link href="/game/playing" className={style}>
          <Image
            src="/assets/shiny-effect.svg"
            alt="shiny"
            width={92}
            height={130}
            className="absolute -top-14 -left-10"
          />
          Play Game
        </Link>
      </div>

      <div className="absolute -left-0 top-[23rem] sm:-left-10 sm:top-60 md:left-32 md:top-[500px]">
        <ShineBox blurAmount="blur-xl" boxSize={100}>
          <Image
            src="/assets/butterfly-blue.svg"
            alt="butterfly"
            width={85}
            height={120}
          />
        </ShineBox>
      </div>

      <div className="absolute -right-16 top-[25rem] sm:-right-32 sm:top-32 md:right-10 md:top-[300px]">
        <ShineBox blurAmount="blur-xl" boxSize={160}>
          <Image
            src="/assets/butterfly-purple.svg"
            alt="butterfly"
            width={180}
            height={240}
          />
        </ShineBox>
      </div>

      <div className="absolute -left-10 md:left-32">
        <Image
          src="/assets/shiny-effect.svg"
          alt="shiny1"
          width={140}
          height={200}
        />
      </div>

      <div className="absolute right-[1px] top-[20px] md:right-[50px]">
        <Image
          src="/assets/shiny-effect.svg"
          alt="shiny2"
          width={140}
          height={200}
        />
      </div>
    </div>
  );
};

export default EnterGame;
