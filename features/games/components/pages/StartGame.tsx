"use client";

import ShineBox from "@/features/ui/components/Shinebox";
import { useFonts } from "@/hooks/useFont";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface ItemProps {
  boxSize: number;
  size: number;
}

const StartGame = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [style, setStyle] = useState("");
  const [prop, setProp] = useState<ItemProps>({
    boxSize: 180,
    size: 140,
  });
  const { subHeader } = useFonts();

  const res_buttonStyle = {
    base: `relative flex items-center justify-center ${subHeader.className} text-white rounded-[20px] bg-gradient-to-r from-[#ddcdfa] via-[#f1d2ee] to-[#ddcdfa]`,
    mobile: `text-base w-[130px] h-[44px]`,
    tablet: `text-[32px] w-[230px] h-[75px]`,
  };

  useEffect(() => {
    const updateWindowDimensions = () => {
      setIsMobile(window.innerWidth <= 430);
      setIsTablet(window.innerWidth <= 1024 && !isMobile);

      const computedStyle =
        window.innerWidth >= 768
          ? `${res_buttonStyle.base} ${res_buttonStyle.tablet}`
          : `${res_buttonStyle.mobile} ${res_buttonStyle.base}`;
      setStyle(computedStyle);

      const computedProp = isMobile
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
      setProp(computedProp);
    };
    // Initial call to set dimensions and styles
    updateWindowDimensions();

    window.addEventListener("resize", updateWindowDimensions);

    return () => {
      window.removeEventListener("resize", updateWindowDimensions);
    };
  }, [isMobile, isTablet]);

  return (
    <div className="relative flex flex-col gap-12 w-full h-[470px] md:h-[730px] items-center justify-center">
      <ShineBox blurAmount="blur-xl" boxSize={prop.boxSize}>
        <Image
          src="/assets/logo.svg"
          alt="logo"
          width={prop.size}
          height={prop.size}
        />
      </ShineBox>

      <div className="relative flex items-center justify-center">
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

      <div className="absolute -left-10 top-60 md:left-32 md:top-[500px]">
        <ShineBox blurAmount="blur-xl" boxSize={100}>
          <Image
            src="/assets/butterfly-blue.svg"
            alt="butterfly"
            width={85}
            height={120}
          />
        </ShineBox>
      </div>

      <div className="absolute -right-32 top-32 md:right-10 md:top-[300px]">
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

export default StartGame;
