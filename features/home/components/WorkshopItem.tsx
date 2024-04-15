'use client';

import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import Image from "next/image";

/* eslint-disable @next/next/no-img-element */
interface Props {
  title: string;
  desc: string;
  imgUrl: string;
  haveButton?: boolean;
  linkTo: string;
  extraLabel?: boolean;
  isDisabled?: boolean;
}

interface ContainerSize {
  width: number;
  height: number;
  borderRadius: number;
}

interface ImageSize {
  width: number;
  height: number;
}

interface TextSize {
  header: number;
  para: number;
}

export default function WorkshopItem({title, desc, imgUrl, haveButton, linkTo, extraLabel, isDisabled}: Props) {

  const isMobile = useMediaQuery({minWidth: 320, maxWidth: 680});
  const isTablet = useMediaQuery({minWidth: 680, maxWidth: 768});
  const [containerSize, setContainerSize] = useState<ContainerSize>({width: 0, height: 0, borderRadius: 0});
  const [imageSize, setImageSize] = useState<ImageSize>({width: 0, height: 0});
  const [textSize, setTextSize] = useState<TextSize>({header: 14, para: 12});

  useEffect(() => {
    setContainerSize(
      isMobile ? { width: 160, height: 140, borderRadius: 20 }
        : isTablet ? { width: 220, height: 180, borderRadius: 30 }
          : { width: 240, height: 200, borderRadius: 30 }
    );
    setImageSize(
      isMobile ? { width: 100, height: 100 }
        : isTablet ? { width: 120, height: 120 }
          : { width: 150, height: 150 }
    );
    setTextSize(
      isMobile ? { header: 14, para: 12 }
        : isTablet ? { header: 20, para: 14 }
          : { header: 20, para: 14 }
    )
  }, [isMobile, isTablet]);
  
  return (
    <motion.a
      href={linkTo}
      className="relative flex flex-col justify-center pb-3 items-center bg-white shadow-lg"
      style={{
        width:        `${containerSize.width}px`,
        height:       `${containerSize.height}px`,
        borderBottomLeftRadius: haveButton ? 0 : `${containerSize.borderRadius}px`,
        borderBottomRightRadius: haveButton ? 0 : `${containerSize.borderRadius}px`,
        borderTopLeftRadius: `${containerSize.borderRadius}px`,
        borderTopRightRadius: `${containerSize.borderRadius}px`,
        opacity: isDisabled ? "50%" : "100%",
        pointerEvents: isDisabled ? "none" : "auto"
      }}
      whileHover={{
        scale: 1.1
      }}
    >
      <div className="relative" style={{width: `${imageSize.width}px`, height: `${imageSize.height}px`}}>
        <Image 
          src={imgUrl} 
          alt="" 
          width=  { imageSize.width }
          height= { imageSize.height }
          quality={100}
        />
      </div>
      <div className="px-4 pb-2 flex flex-col items-center">
        { extraLabel &&  <div className="text-[#B9A5D6] font-bold mt-4" style={{fontSize: `${textSize.para-1}px`}}>mindfulness matters</div>}
        <div className="text-[#5A81BC] font-bold" style={{fontSize: `${textSize.header}px`}}>{title}</div>
        <div className="text-[#5A81BC] text-center" style={{fontSize: `${textSize.para}px`}}>{desc}</div>
      </div>
      {
        haveButton &&
          <div 
            className="flex items-center justify-center min-h-[40px] w-full font-bold text-white bg-gradient-to-r from-[#DDCDFA] via-[#F1D2EE] to-[#DDCDFA]"
            style={{
              fontSize: `${textSize.para}px`,
              borderBottomLeftRadius: `${containerSize.borderRadius}px`,
              borderBottomRightRadius: `${containerSize.borderRadius}px`
            }}
          >จองเลย</div>

      }
    </motion.a>
  )
}