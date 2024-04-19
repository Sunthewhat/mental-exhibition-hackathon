"use client";

import { Mansalva, Noto_Sans_Thai, Slackside_One } from "next/font/google";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import GallerySlider from "./GallerySlider";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface TextSize {
  header: number;
  para: number;
}

const slack_side = Slackside_One({ subsets: ["latin"], weight: ["400"] });
const noto_sans = Noto_Sans_Thai({ subsets: ["latin"], weight: ["700"] });
const mansalva = Mansalva({ subsets: ["latin"], weight: ["400"] });

const Gallerys = () => {
  const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 680 });
  const isTablet = useMediaQuery({ minWidth: 680, maxWidth: 768 });
  const [textSize, setTextSize] = useState<TextSize>({ header: 14, para: 12 });

  useEffect(() => {
    setTextSize(
      isMobile
        ? { header: 36, para: 14 }
        : isTablet
        ? { header: 40, para: 14 }
        : { header: 56, para: 16 }
    );
  }, [isMobile, isTablet]);

  return (
    <div
      id="gallery"
      className="w-full flex flex-col items-center gap-10 px-[30px]"
    >
      <div className={`relative`}>
        <div
          className="absolute rounded-full bg-white blur-2xl w-full top-3 left-1/2 -translate-x-1/2 translate-y-1/2"
          style={{ height: `${textSize.header * 2}px` }}
        ></div>
        <div
          className={`relative ${slack_side.className} text-[#5A81BC]`}
          style={{ fontSize: `${textSize.header}px` }}
        >
          <p>color of feelings</p>
          <div
            className={`text-center  ${mansalva.className} bg-gradient-to-r from-[#A9DBD0] via-[#A9DBD0] to-[#89B6FB] text-transparent bg-clip-text`}
          >
            Gallerys
          </div>
        </div>
      </div>

      <GallerySlider />

      <Link href='/gallery'
        className={`${noto_sans.className} px-10 py-2 rounded-2xl bg-gradient-to-r from-[#A9DBD0] via-[#A9DBD0] to-[#89B6FB] text-transparent text-white hover:cursor-pointer`}
      >
        เข้าชมผลงาน
      </Link>
    </div>
  );
};

export default Gallerys;
