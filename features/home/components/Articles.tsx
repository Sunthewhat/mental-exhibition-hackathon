/* eslint-disable @next/next/no-img-element */
"use client";

import { Noto_Sans_Thai, Slackside_One } from "next/font/google";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

interface TextSize {
  header: Number;
  para: Number;
  sub_para: Number;
}

const slack_side = Slackside_One({ subsets: ["latin"], weight: ["400"] });
const noto_sans = Noto_Sans_Thai({ subsets: ["latin"], weight: ["700"] });

export default function Articles() {
  const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 680 });
  const isTablet = useMediaQuery({ minWidth: 680, maxWidth: 768 });
  const [textSize, setTextSize] = useState<TextSize>({
    header: 14,
    para: 12,
    sub_para: 10,
  });

  useEffect(() => {
    setTextSize(
      isMobile
        ? { header: 14, para: 10, sub_para: 8 }
        : isTablet
        ? { header: 20, para: 14, sub_para: 10 }
        : { header: 32, para: 14, sub_para: 14 }
    );
  }, [isMobile, isTablet]);

  return (
    <>
      <div className={`relative`}>
        <div
          className="absolute rounded-full bg-white blur-xl w-full left-1/2 -translate-x-1/2 translate-y-1/2"
          style={{ height: `${isMobile ? 36 : isTablet ? 40 : 56}px` }}
        ></div>
        <div
          className={`relative ${slack_side.className} text-[#5A81BC]`}
          style={{ fontSize: `${isMobile ? 36 : isTablet ? 40 : 56}px` }}
        >
          <span>articles</span>
          <hr className="h-[3px] md:h-[4px] w-full bg-[#5A81BC] absolute bottom-2" />
        </div>
      </div>
      <p
        className={`text-[#5A81BC] ${noto_sans.className}`}
        style={{ fontSize: `${textSize.para}px` }}
      >
        บทความปัญหาสุขภาพจิต
      </p>

      <div className="px-[10px]">
        <div className="w-full rounded-2xl flex overflow-hidden">
          <div className="w-[200px] object-cover">
            <img
              src="/assets/home/article_3.png"
              alt=""
              className="w-full h-full"
            />
          </div>

          <div className="px-4 py-6 bg-white bg-opacity-80 w-3/4">
            <p
              className="text-[#C31815] font-bold"
              style={{ fontSize: `${textSize.sub_para}px` }}
            >
              Mental Health
            </p>
            <h3
              className="text-[#5A81BC] font-bold"
              style={{ fontSize: `${textSize.header}px` }}
            >
              9 ข้อสำรวจเข้าข่ายโรคซึมเศร้า
            </h3>
            <p
              className="text-[#2A2A2A]"
              style={{ fontSize: `${textSize.para}px` }}
            >
              โรคซึมเศร้าเกิดจากความผิดปกติของสมองในส่วนที่มีผลกระทบต่อความคิด
              อารมณ์ ความรู้สึก พฤติกรรม รวมถึงสุขภาพทางกาย
              แต่คนส่วนใหญ่มักคิดว่าโรคซึมเศร้าเกิดจากความผิดหวัง
            </p>
            <p
              className="text-[#66666A]"
              style={{ fontSize: `${textSize.sub_para}px` }}
            >
              อ่านต่อ...
            </p>
          </div>
        </div>

        <div className="flex justify-between h-[168px] gap-4 mt-4">
          <div className="w-full rounded-2xl flex flex-col bg-white bg-opacity-80 overflow-hidden">
            <div 
              className="w-full h-1/4 bg-red-500"
              style={{
                backgroundImage: 'url(/assets/home/article_2.png)',
                backgroundPosition: "center",
                backgroundRepeat: "none",
                objectFit: "scale-down",
                backgroundSize: "100% 100%"
              }}
            >
            </div>
            <div></div>
          </div>

          <div className="w-full rounded-2xl flex flex-col bg-white bg-opacity-80"></div>
        </div>
      </div>
    </>
  );
}
