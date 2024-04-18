'use client';

import Background from "@/features/gallery/Background";
import Gallery from "@/features/gallery/Gallery";
import GalleryNav from "@/features/gallery/GalleryNav";
import GalleryDialog from "@/features/gallery/GalleryDialog";
import { motion } from "framer-motion";
import { Mansalva, Noto_Sans_Thai, Slackside_One } from "next/font/google";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

const slackside_one = Slackside_One({subsets: ["latin"], weight: ["400"]});
const noto_sans = Noto_Sans_Thai({subsets: ["latin"]})
const mansalva = Mansalva({subsets: ["latin"], weight: ["400"]});


interface TextSize {
  header: number;
  para: number;
  sub_para: number;
}

export default function GalleryPage() {
  const [open, setOpen] = useState(false);
  const [dialogId, setDialogId] = useState<number>(0);
  const isMobile = useMediaQuery({minWidth: 320, maxWidth: 680});
  const isTablet = useMediaQuery({minWidth: 680, maxWidth: 768});
  const [textSize, setTextSize] = useState<TextSize>({header: 24, para: 24, sub_para: 12});

  const padding = isMobile ? 30 : isTablet ? 40 : 60;

  useEffect(() => {
    setTextSize(
      isMobile ? {header: 24, para: 24, sub_para: 12} :
      isTablet ? {header: 28, para: 28, sub_para: 16} :
      {header: 48, para: 48, sub_para: 16}
    )
    console.log(dialogId)
  }, [isMobile, isTablet, dialogId])
  
  return (
    <>
      <Background>
        <GalleryDialog open={open} onOpenChange={setOpen} stateId={dialogId} setStateId={setDialogId}  /> 
        <div>
            <GalleryNav />
            <div 
              className="w-full flex justify-between items-center mt-16" style={{ padding: `0px ${padding}px` }}
            >
              <div>
                <h2 className={`text-[#5A81BC] ${slackside_one.className}`} style={{ fontSize: `${textSize.para}px`}}>color of feelings</h2>
                <h1 className={`text-white ${mansalva.className}`} style={{ fontSize: `${textSize.header}px`}}>Art Exhibition Gallery</h1>
              </div>
              <motion.a whileHover={{scale: 1.1}} href='#' className="flex items-center justify-center shadow-md rounded-full z-20 h-[40px] font-semibold text-[#fff] text-base md:text-[18px]  bg-gradient-to-r from-[#a9dbd0] to-[#89b6fb]" style={{ paddingLeft: isMobile ? 12 : 48, paddingRight: isMobile ? 12 : 48}}>ไปโหวต</motion.a>
            </div>
            <div style={{ padding: `0px ${padding}px` }}>
              <hr className="bg-white h-[2px] my-4"/>
              <p className={`text-white text-[12px] ${noto_sans.className} w-3/4`} style={{ fontSize: `${textSize.sub_para}px`}}>รวมภาพวาดจากผู้เข้าแข่งขัน Mental Health Exhibition  2024 และขอเชิญทุกท่านร่วมโหวตหาผู้ชนะรางวัล Popular Vote</p>
            </div>
            <div style={{ padding: `0px ${padding}px` }}>
              <Gallery setOpenT={setOpen} setDataId={setDialogId} dataId={dialogId}/>
            </div>
        </div>
      </Background>
    </>
  )
}