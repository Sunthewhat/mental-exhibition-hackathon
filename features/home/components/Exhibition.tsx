/* eslint-disable @next/next/no-img-element */
'use client'

import { Mansalva, Slackside_One } from "next/font/google"
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import Image from "next/image";

interface TextSize {
  header: number;
  para: number;
}

interface RingSize {
  width: number;
  height : number;
}

const slack_side = Slackside_One({subsets: ["latin"], weight: ["400"]});
const mansalva = Mansalva({subsets: ["latin"], weight: ["400"]})

export default function Exhibition() {

  const isMobile = useMediaQuery({minWidth: 0, maxWidth: 680});
  const isTablet = useMediaQuery({minWidth: 680, maxWidth: 768});
  const [textSize, setTextSize] = useState<TextSize>({header: 14, para: 12});
  const [ringSize, setRingSize] = useState<RingSize>({width: 340, height: 100});
  const [imageSizeMultiplier, setImageSizeMultiplier] = useState(1);
  
  useEffect(() => {
    setTextSize(
      isMobile ? { header: 28, para: 24 }
        : isTablet ? { header: 48, para: 40 }
          : { header: 48, para: 40 }
    );
    setRingSize(
      isMobile ? { width: 340, height: 100 }
        : isTablet ? { width: 620, height: 190 }
          : { width: 620, height: 190 }
    )
    setImageSizeMultiplier(
      isMobile ? 1/4
        : isTablet ? 2/5
          : 2/5
    )
  }, [isMobile, isTablet]);
  
  return (
    <div className="w-full min-w-[425px] max-w-[1060px] relative flex flex-col items-center my-20 md:my-40">
      <div className="relative flex flex-col items-center">
        <div 
          className={`z-10 ${slack_side.className} text-[#5A81BC]`}
          style={{fontSize: `${textSize.para}px`}}
        >art exhibition</div>
        <div className="relative flex items-center">
          <div
            className="absolute left-1/2 -translate-x-1/2 bg-white blur-2xl rounded-[100%] -rotate-12"
            style={{width: `${ringSize.width}px`, height: `${ringSize.height}px`}}
          ></div>
          <div 
            className="absolute left-1/2 -translate-x-1/2 border-4 border-white rounded-[100%] rotate-12"
            style={{width: `${ringSize.width}px`, height: `${ringSize.height}px`}}
          ></div>
          <div 
            className={`relative w-full mb-3 ${mansalva.className} bg-gradient-to-r from-[#89B6FB] to-[#A9DBD0] text-transparent bg-clip-text`}
            style={{fontSize: `${textSize.header}px`}}
          >COLOR OF FEELINGS</div>
        </div>
        <motion.a whileHover={{scale: 1.1}} href='#' className="flex items-center px-4 rounded-full z-20 w-fit h-[40px] font-semibold text-[#fff] text-base md:text-[18px]  bg-gradient-to-r from-[#a9dbd0] to-[#89b6fb]">ส่งผลงาน</motion.a>
        <Image src='/assets/shiny-effect.svg' alt="" width={60} height={60} className="absolute left-2 -top-12"/>
        <Image src='/assets/shiny-effect.svg' alt="" width={60} height={60} className="absolute right-2 -bottom-12"/>
      </div>
      <Image 
        src="/assets/home/paint_brush.png" alt=""
        className="absolute right-0 -top-10 rotate-45"
        width=  { 250 * imageSizeMultiplier}
        height= { 396 * imageSizeMultiplier}
      />
      <Image 
        src="/assets/home/paint.png" alt=""
        className="absolute left-0 -bottom-16"
        width=  { 286 * imageSizeMultiplier }
        height= { 388 * imageSizeMultiplier }
        style={{
          bottom: isMobile ? -40 : -96
        }}
      />
      <Image
        src="/assets/home/pink-splash.png" alt=""
        className="absolute left-0 -top-10 -rotate-[28deg]"
        width=  { 377 * imageSizeMultiplier }
        height= { 375 * imageSizeMultiplier }
      />
      <Image
        src="/assets/home/blue-splash.png" alt=""
        className="absolute right-0 -rotate-[6deg]"
        width=  { 395 * imageSizeMultiplier }
        height= { 408 * imageSizeMultiplier }
        style={{
          bottom: isMobile ? -48 : -96
        }}
      />

    </div>
  )
}