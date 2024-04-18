"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowBigRight } from "lucide-react";
import { GalleryProp } from "@/constants/gallerys";
import { title } from "process";
import { Noto_Sans_Thai, Slackside_One } from "next/font/google";
import { useMediaQuery } from "react-responsive";

interface GalleryItemProp {
  gallery: GalleryProp;
  index: number;
  firstDiv: boolean;
}

interface TextSize {
  header: Number;
  para: Number;
  sub_para: Number;
}

const slack_side = Slackside_One({ subsets: ["latin"], weight: ["400"] });
const noto_sans = Noto_Sans_Thai({ subsets: ["latin"], weight: ["700"] });

const GalleryItem: React.FC<GalleryItemProp> = ({
  gallery: { name, inspiration, imgUrl },
  index,
  firstDiv,
}: GalleryItemProp) => {
  const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 680 });
  const isTablet = useMediaQuery({ minWidth: 680, maxWidth: 1024 });
  const [textSize, setTextSize] = useState<TextSize>({
    header: 14,
    para: 12,
    sub_para: 10,
  });
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    setTextSize(
      isMobile
        ? { header: 14, para: 10, sub_para: 8 }
        : isTablet
        ? { header: 20, para: 14, sub_para: 10 }
        : { header: 28, para: 14, sub_para: 14 }
    );
  }, [isMobile, isTablet]);

  const logic = index % 2 === (firstDiv ? 0 : 1);

  const containerStyle = logic ? `h-[175px] w-[225px] ` : `h-[225px] w-[175px]`;
  const marginStyle = logic ? (isMobile ? `mt-[16px]` : `mt-[-24px]`) : ``;

  return (
    <div className="flex flex-col gap-4 ">
      <motion.div
        className={`relative overflow-hidden ${containerStyle} ${marginStyle} bg-slate-400 rounded-xl flex flex-col justify-center items-center`}
        key={imgUrl}
        onHoverStart={() => setShowOverlay(true)}
        onHoverEnd={() => setShowOverlay(false)}
      >
        {/* Hover overlay */}
        <AnimatePresence>
          {showOverlay && (
            <motion.div
              className="absolute left-0 top-0 bottom-0 right-0 z-10 flex justify-center items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="absolute bg-black pointer-events-none opacity-50 h-full w-full" />
              <motion.h1
                className="bg-white font-semibold text-sm z-10 px-3 py-2 rounded-full flex items-center gap-[0.5ch] hover:opacity-75"
                initial={{ y: 10 }}
                animate={{ y: 0 }}
                exit={{ y: 10 }}
              >
                <span>เข้าชมเลย</span>
                <ArrowBigRight className="h-4 w-4" />
              </motion.h1>
            </motion.div>
          )}
        </AnimatePresence>

        <Image
          src={imgUrl}
          alt={imgUrl}
          fill
          style={{
            backgroundImage: `url(${imgUrl})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        />
      </motion.div>

      <div className="text-center">
        <h1
          className="text-[#5A81BC] font-bold"
          style={{ fontSize: `${textSize.header}px` }}
        >
          {name}
        </h1>
        <p
          className="text-[#5A81BC]"
          style={{ fontSize: `${textSize.para}px` }}
        >
          {inspiration}
        </p>
      </div>
    </div>
  );
};

export default GalleryItem;
