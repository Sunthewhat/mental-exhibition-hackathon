/* eslint-disable @next/next/no-img-element */
"use client";

import { Noto_Sans_Thai, Slackside_One } from "next/font/google";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { truncateText } from "../helper";
import { getMockupArticles } from "@/constants/articles";

interface TextSize {
  header: Number;
  para: Number;
  sub_para: Number;
}

const slack_side = Slackside_One({ subsets: ["latin"], weight: ["400"] });
const noto_sans = Noto_Sans_Thai({ subsets: ["latin"], weight: ["700"] });

export default function Articles() {
  const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 680 });
  const isTablet = useMediaQuery({ minWidth: 680, maxWidth: 1024 });
  const [textSize, setTextSize] = useState<TextSize>({
    header: 14,
    para: 12,
    sub_para: 10,
  });

  const { firstArticle, secondArticle, thirdArticle } = getMockupArticles();

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
          <p>articles</p>
          <hr className="h-[3px] md:h-[4px] w-full bg-[#5A81BC] absolute bottom-2" />
        </div>
      </div>
      <p
        className={`text-[#5A81BC] ${noto_sans.className}`}
        style={{ fontSize: `${textSize.para}px` }}
      >
        บทความปัญหาสุขภาพจิต
      </p>

      <div className="px-[50px]">
        <div className="w-full rounded-2xl flex overflow-hidden">
          <div className="w-[275px] xs:w-[300px] md:w-[500px] object-cover ">
            <img src={firstArticle.imgUrl} alt="" className="w-full h-full" />
          </div>

          <div className="px-4 py-6 md:px-10 md:py-12 bg-white bg-opacity-80 w-3/4">
            <p
              className="text-[#C31815] font-bold mb-4"
              style={{ fontSize: `${textSize.sub_para}px` }}
            >
              Mental Health
            </p>
            <h3
              className="text-[#5A81BC] font-bold"
              style={{ fontSize: `${textSize.header}px` }}
            >
              {firstArticle.title}
            </h3>
            <p
              className="text-[#2A2A2A] mb-2 xs:mb-6"
              style={{ fontSize: `${textSize.para}px` }}
            >
              {isMobile
                ? truncateText(firstArticle.desc, 110)
                : firstArticle.desc}
            </p>

            <p
              className="text-[#66666A]"
              style={{ fontSize: `${textSize.sub_para}px` }}
            >
              อ่านต่อ...
            </p>
          </div>
        </div>

        <div className="flex justify-between h-[212px] sm:h-[345px] md:h-[445px] gap-4 mt-4">
          <div className="flex flex-col w-full rounded-2xl overflow-hidden">
            <div
              className="h-1/2 bg-blue-500"
              style={{
                backgroundImage: `url(${secondArticle.imgUrl})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            ></div>
            <div className="p-3 sm:p-5 h-1/2 bg-white bg-opacity-80 flex flex-col justify-between">
              <div>
                <h3
                  className="text-[#5A81BC] font-bold mb-1 md:mb-2"
                  style={{ fontSize: `${textSize.header}px` }}
                >
                  {secondArticle.title}
                </h3>
                <p
                  className="text-[#2A2A2A]"
                  style={{ fontSize: `${textSize.para}px` }}
                >
                  {truncateText(
                    secondArticle.desc,
                    isMobile ? 30 : isTablet ? 235 : 500
                  )}
                </p>
              </div>

              <p
                className="text-[#66666A] text-right"
                style={{ fontSize: `${textSize.sub_para}px` }}
              >
                อ่านต่อ...
              </p>
            </div>
          </div>

          <div className="flex flex-col w-full rounded-2xl overflow-hidden">
            <div
              className="h-1/2 bg-blue-500"
              style={{
                backgroundImage: `url(${thirdArticle.imgUrl})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            ></div>
            <div className="p-3 sm:p-5 h-1/2 bg-white bg-opacity-80 flex flex-col justify-between">
              <div>
                <h3
                  className="text-[#5A81BC] font-bold mb-1 md:mb-2"
                  style={{ fontSize: `${textSize.header}px` }}
                >
                  {thirdArticle.title}
                </h3>
                <p
                  className="text-[#2A2A2A]"
                  style={{ fontSize: `${textSize.para}px` }}
                >
                  {isMobile
                    ? truncateText(thirdArticle.desc, 70)
                    : thirdArticle.desc}
                </p>
              </div>

              <p
                className="text-[#66666A] text-right"
                style={{ fontSize: `${textSize.sub_para}px` }}
              >
                อ่านต่อ...
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
