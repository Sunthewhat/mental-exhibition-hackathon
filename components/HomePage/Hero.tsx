"use client";

import Image from "next/image";
import ShineBox from "./ShineBox";
import Link from "next/link";
import { Shippori_Mincho } from "next/font/google";

const shippori = Shippori_Mincho({ weight: ["600"], subsets: ["latin"] });

export default function Hero() {
  const res_buttonStyle = {
    base: `relative flex items-center justify-center ${shippori.className} text-white rounded-[20px] bg-gradient-to-r from-[#ddcdfa] via-[#f1d2ee] to-[#ddcdfa]`,
    mobile: `text-base w-[130px] h-[44px]`,
    tablet: `text-[32px] w-[230px] h-[75px]`,
  };

  const style =
    window.innerWidth >= 768
      ? `${res_buttonStyle.base} ${res_buttonStyle.tablet}`
      : `${res_buttonStyle.mobile} ${res_buttonStyle.base}`;

  return (
    <div className="relative flex flex-col gap-12 w-full h-[470px] md:h-[730px] items-center justify-center">
      <ShineBox blurAmount="blur-xl" boxSize={280}>
        <Image src="/logo.svg" alt="logo" width={230} height={230} />
      </ShineBox>

      <div className="relative flex items-center justify-center">
        <div className="absolute w-[120%] h-[120%] bg-white blur-xl">I</div>
        <Link href="/" className={style}>
          <Image
            src="/shiny-effect.svg"
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
            src="/butterfly-blue.svg"
            alt="butterfly"
            width={85}
            height={120}
          />
        </ShineBox>
      </div>

      <div className="absolute -right-32 top-32 md:right-10 md:top-[300px]">
        <ShineBox blurAmount="blur-xl" boxSize={160}>
          <Image
            src="/butterfly-purple.svg"
            alt="butterfly"
            width={180}
            height={240}
          />
        </ShineBox>
      </div>

      <div className="absolute -left-10 md:left-32">
        <Image src="/shiny-effect.svg" alt="shiny" width={140} height={200} />
      </div>

      <div className="absolute right-[1px] top-[20px] md:right-[50px]">
        <Image src="/shiny-effect.svg" alt="shiny" width={140} height={200} />
      </div>
    </div>
  );
}
