'use client';

import Background from "@/features/gallery/Background";
import Gallery from "@/features/gallery/Gallery";
import { motion } from "framer-motion";
import { Mansalva, Noto_Sans_Thai, Slackside_One } from "next/font/google";
import { useState } from "react";
import GalleryDialog from "@/features/gallery/GalleryDialog";

const slackside_one = Slackside_One({subsets: ["latin"], weight: ["400"]});
const noto_sans = Noto_Sans_Thai({subsets: ["latin"]})
const mansalva = Mansalva({subsets: ["latin"], weight: ["400"]});

export default function GalleryPage() {
  const [popUpshow, setPopUpShow] = useState<boolean>(false);
  
  return (
    <>
      <GalleryDialog open={popUpshow} onOpenChange={setPopUpShow} dataId={1}/>
      <Background >
        <div>
          <button onClick={() => setPopUpShow(true)}>Click me</button>
          <div className="px-[10px]">
            <div className="w-full flex justify-between items-center mt-16">
              <div>
                <h2 className={`text-[#5A81BC] text-[24px] ${slackside_one.className}`}>color of feelings</h2>
                <h1 className={`text-white text-[24px] ${mansalva.className}`}>Art Exhibition Gallery</h1>
              </div>
              <motion.a whileHover={{scale: 1.1}} href='#' className="flex items-center px-4 rounded-full z-20 w-fit h-[40px] font-semibold text-[#fff] text-base md:text-[18px]  bg-gradient-to-r from-[#a9dbd0] to-[#89b6fb]">ไปโหวต</motion.a>
            </div>
            <hr className="bg-white h-[2px] my-4"/>
            <p className={`text-white text-[12px] ${noto_sans.className} w-3/4`}>รวมภาพวาดจากผู้เข้าแข่งขัน Mental Health Exhibition  2024 และขอเชิญทุกท่านร่วมโหวตหาผู้ชนะรางวัล Popular Vote</p>
            <Gallery />
          </div>

        </div>
      </Background>
    </>
  )
}