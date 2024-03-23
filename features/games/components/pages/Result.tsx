"use client";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getDisplayName, getScore } from "@/features/games/helpers";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Contact from "../Contact";
import Lighting from "../Lighting";
import { useSeason } from "@/hooks/useSeason";
import { Noto_Sans_Thai } from "next/font/google";
import localFont from "next/font/local";

const headerFont = localFont({
  src: "../../../../app/fonts/golden-bridge-font.ttf",
  weight: "300",
  display: "swap",
});

const paragraphFont = Noto_Sans_Thai({ subsets: ["latin"], weight: "400" });

const Result = () => {
  const score = getScore();
  const userName = getDisplayName();
  const { name, desc, img } = useSeason(score);

  return (
    <div className="h-full w-full py-12 md:px-[2em] lg:px-[8em] lg:h-auto">
      <div className="mx-auto flex flex-col justify-center items-center">
        <Label className="md:mt-8 lg:mt-16">
          <span
            className={`font-extrabold drop-shadow-2xl text-white text-base sm:text-2xl md:text-3xl lg:text-4xl flex flex-col items-center justify-center ${headerFont.className}`}
          >
            <span className="text-center">{userName ?? "Guest User"}</span>
            <br />
            <span>Your season is {name}</span>
          </span>
        </Label>

        <div
          className="w-full h-3/5 md:h-3/4 flex flex-col items-center  
          gap-[2rem] lg:mt-16 xl:h-4/5 lg:flex-row "
        >
          <Lighting className="relative w-3/5 lg:w-1/2 h-auto bg-cover  rounded-full">
            <Image
              src={img}
              alt="avatar"
              width={300}
              height={200}
              layout="responsive"
            />
          </Lighting>
          <ScrollArea
            className="bg-white opacity-70 rounded-2xl shadow-md p-1
        w-2/3 h-3/4 md:w-[90%] lg:w-1/2 2xl:h-full"
          >
            <div className="p-4">
              <h4
                className={`mb-4 text-xs md:text-xl font-normal leading-none ${paragraphFont.className}`}
              >
                {desc}
              </h4>
            </div>
          </ScrollArea>
        </div>
        <Contact />
      </div>
    </div>
  );
};

export default Result;
