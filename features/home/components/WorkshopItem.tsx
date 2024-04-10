'use client';

import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

/* eslint-disable @next/next/no-img-element */
interface Props {
  title: string;
  desc: string;
  imgUrl: string;
  haveButton?: boolean;
}

interface ContainerSize {
  width: Number;
  height: Number;
  borderRadius: Number;
}

interface ImageSize {
  width: Number;
  height: Number;
}

interface TextSize {
  header: Number;
  para: Number;
}

export default function WorkshopItem({title, desc, imgUrl, haveButton}: Props) {

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
    <div
      className="relative flex flex-col justify-center items-center bg-white shadow-lg"
      style={{
        width:        `${containerSize.width}px`,
        height:       `${containerSize.height}px`,
        borderRadius: `${containerSize.borderRadius}px`
      }}
    >
      <div className="relative" style={{width: `${imageSize.width}px`, height: `${imageSize.height}px`}}>
        <img 
          src={imgUrl} 
          alt="" 
          className="absolute"
          style={{
            top: haveButton ? -50 : -30,
            width:  `${imageSize.width}px`,
            height: `${imageSize.height}px`
          }}
        />
      </div>
      <div className="px-4 flex flex-col items-center">
        <div className="text-[#5A81BC] font-bold" style={{fontSize: `${textSize.header}px`}}>{title}</div>
        <div className="text-[#5A81BC] text-center" style={{fontSize: `${textSize.para}px`}}>{desc}</div>
      </div>
      {
        haveButton &&
          <div 
            className="flex items-center justify-center h-[40px] w-full font-bold text-white bg-gradient-to-r from-[#DDCDFA] via-[#F1D2EE] to-[#DDCDFA]"
            style={{
              fontSize: `${textSize.para}px`,
              borderBottomLeftRadius: `${containerSize.borderRadius}px`,
              borderBottomRightRadius: `${containerSize.borderRadius}px`
            }}
          >จองเลย</div>

      }
    </div>
  )
}