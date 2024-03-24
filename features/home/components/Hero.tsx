"use client";

import Image from "next/image";
import ShineBox from "./ShineBox";
import Link from "next/link";
import { Shippori_Mincho } from "next/font/google";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";

const shippori = Shippori_Mincho({ weight: ["600"], subsets: ["latin"] });

interface Props {
  boxSize: number;
  size: number;
}

export default function Hero() {
  const isMobile = useMediaQuery({ maxWidth: 430 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const [prop, setProp] = useState<Props>({
    boxSize: 210,
    size: 170,
  });

  const [style, setStyle] = useState("");

  useEffect(() => {
    const res_buttonStyle = {
      base: `relative flex items-center justify-center ${shippori.className} text-white rounded-[20px] bg-gradient-to-r from-[#ddcdfa] via-[#f1d2ee] to-[#ddcdfa]`,
      mobile: `text-base w-[130px] h-[44px]`,
      tablet: `text-[32px] w-[230px] h-[75px]`,
    };

    setProp(
      isMobile
        ? {
            boxSize: 210,
            size: 170,
          }
        : isTablet
        ? {
            boxSize: 280,
            size: 240,
          }
        : {
            boxSize: 330,
            size: 300,
          }
    );

    setStyle(
      isMobile
        ? `${res_buttonStyle.mobile} ${res_buttonStyle.base}`
        : `${res_buttonStyle.base} ${res_buttonStyle.tablet}`
    );
  }, []);

  return (
    <div className="relative flex flex-col gap-12 w-full h-[470px] md:h-[730px] items-center justify-center">
      <ShineBox blurAmount="blur-xl" boxSize={prop.boxSize}>
        <Image
          src="/assets/logo.svg"
          alt="logo"
          width={prop.size}
          height={prop.size}
          className="btn-hover"
        />
      </ShineBox>

      <div className="relative flex items-center justify-center btn-hover">
        <div className="absolute w-[120%] h-[120%] bg-white blur-xl">I</div>
        <Link href="/game" className={style}>
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
          alt="shiny"
          width={140}
          height={200}
        />
      </div>

      <div className="absolute right-[1px] top-[20px] md:right-[50px]">
        <Image
          src="/assets/shiny-effect.svg"
          alt="shiny"
          width={140}
          height={200}
        />
      </div>
    </div>
  );
}
