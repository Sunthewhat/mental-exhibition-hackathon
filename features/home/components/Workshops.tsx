"use client";

import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import WorkshopItem from "./WorkshopItem";
import WorkshopsContainer from "./WorkshopsContainer";
import { Noto_Sans_Thai, Slackside_One } from "next/font/google";

interface TextSize {
  header: Number;
  para: Number;
}

const slack_side = Slackside_One({ subsets: ["latin"], weight: ["400"] });
const noto_sans = Noto_Sans_Thai({ subsets: ["latin"], weight: ["700"] });

export default function Workshops() {
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
    <div className="w-full flex flex-col items-center gap-10 px-[30px]">
      
      <div className={`relative`}>
        <div
          className="absolute rounded-full bg-white blur-xl w-full left-1/2 -translate-x-1/2 translate-y-1/2"
          style={{height: `${textSize.header}px`}}
        ></div>
        <div 
          className={`relative ${slack_side.className} text-[#5A81BC]`} 
          style={{fontSize: `${textSize.header}px`}}
        >
          <span>workshop</span>
          <hr className="h-[3px] md:h-[4px] w-full bg-[#5A81BC] absolute bottom-2"/>
        </div>
      </div>

      <div 
        className={`${noto_sans.className} text-[#5A81BC]`} 
        style={{fontSize: `${textSize.para}px`}}
      >
        Walk-in Workshop ( สามารถเข้าร่วมได้เลย )
      </div>

      <WorkshopsContainer>
        <WorkshopItem
          linkTo="#"
          title="จดหมายถึงฉัน"
          desc="เขียนจดหมายถึงตัวเองอีก 1 ปีให้หลัง"
          imgUrl="/assets/home/email.png"
        ></WorkshopItem>
        <WorkshopItem
          linkTo="#"
          title="ระบายใจ"
          desc="วาดและระบายสีไปพร้อมกับตัวเองและเพื่อนๆ"
          imgUrl="/assets/home/color-palette.png"
        ></WorkshopItem>
      </WorkshopsContainer>

      <div 
        className={`${noto_sans.className} text-[#5A81BC] my-4`} 
        style={{fontSize: `${textSize.para}px`}}
      >
        Reserve Workshop ( ต้องจองก่อนเข้าร่วม )
      </div>

      <WorkshopsContainer>
        <WorkshopItem
          linkTo="#"
          title="ละลายเศร้า"
          desc="ให้ความเศร้าละลายไปกับการทำ
          เทียนหอม"
          imgUrl="/assets/home/vase.png"
          haveButton={true}
        ></WorkshopItem>
        <WorkshopItem
          linkTo="#"
          title="จัดใจใส่แจกัน"
          desc="จัดดอกไม้แสนสวยเป็นของขวัญให้ตัวคุณ"
          imgUrl="/assets/home/roses.png"
          haveButton={true}
        ></WorkshopItem>
      </WorkshopsContainer>

      <div className="mt-4">
        <WorkshopsContainer>
          <WorkshopItem
            linkTo="#"
            title="My cup of tea"
            desc="ปล่อยใจไปกับการชงชา
            แสนอร่อย"
            imgUrl="/assets/home/teapot.png"
            haveButton={true}
          ></WorkshopItem>
        </WorkshopsContainer>
      </div>

    </div>
  );
}
