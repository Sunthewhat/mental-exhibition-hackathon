"use client";

import ShineBox from "@/features/shared/components/Shinebox";
import { useFonts } from "@/features/shared/hooks/useFont";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";

const EnterGame = () => {
  const isMobile = useMediaQuery({ maxWidth: 430 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const { subHeader } = useFonts();

  const enterBorderStyle =
    "text-white bg-gradient-to-r from-[#ddcdfa] via-[#f1d2ee] to-[#ddcdfa]";
  const backBorderStyle = "text-[#B9A5D6] border-2 border-[#DDCDFA]";
  const res_buttonStyle = (back: boolean) => {
    return {
      base: `relative flex items-center justify-center ${
        subHeader.className
      } rounded-[20px] ${back ? backBorderStyle : enterBorderStyle}`,
      mobile: `text-base w-[130px] h-[44px]`,
      tablet: `text-[32px] w-[230px] h-[75px]`,
    };
  };

  const enterStyle = isMobile
    ? `${res_buttonStyle(false).mobile} ${res_buttonStyle(false).base}`
    : `${res_buttonStyle(false).tablet} ${res_buttonStyle(false).base}`;

  const backStyle = isMobile
    ? `${res_buttonStyle(true).mobile} ${res_buttonStyle(true).base}`
    : `${res_buttonStyle(true).tablet} ${res_buttonStyle(true).base}`;

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
    <div className="relative overflow-x-hidden h-screen flex flex-col w-full items-center justify-center ">
      <motion.div
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ ease: "easeOut", duration: 2 }}
      >
        <ShineBox blurAmount="blur-xl" boxSize={prop.boxSize} className="mt-32">
          <Image
            src="/assets/logo.svg"
            alt="logo"
            width={prop.size}
            height={prop.size}
            className="mt-32"
          />
        </ShineBox>
      </motion.div>

      <div className="relative flex  items-center justify-center mt-48 xs:mt-64 md:mt-16">
        <div className="flex flex-col gap-12">
          <div className="btn-hover relative">
            <div className="absolute w-[120%] h-[120%] bg-white blur-xl">I</div>
            <Link href="/game/playing" className={enterStyle}>
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

          <div className="btn-hover relative">
            <div className="absolute w-[120%] h-[120%] bg-white blur-xl">I</div>
            <Link href="/" className={backStyle}>
              <Image
                src="/assets/shiny-effect.svg"
                alt="shiny"
                width={92}
                height={130}
                className="absolute -top-24 -left-10"
              />
              Back
            </Link>
          </div>
        </div>
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
