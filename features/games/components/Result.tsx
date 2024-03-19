"use client";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getDisplayName } from "@/features/games/helpers";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Contact from "./Contact";

const Result = () => {
  const [name, setName] = useState<string | null>(null);
  
  //Need to logic to choose the avatar to display

  useEffect(() => {
    setName(getDisplayName());
  }, []);

  return (
    <div className="mx-auto w-4/5 h-full flex flex-col justify-center items-center py-[6em]">
      <Label className="mt-20">
        <span className="font-bold drop-shadow-2xl text-white text-base sm:text-lg md:text-3xl">
          {name ?? "Guest User"}
        </span>
      </Label>
      <div
        className="w-full h-full flex flex-col items-center  
        lg:flex-row lg:h-2/5 gap-[2rem] lg:mt-16"
      >
        <div className="relative w-3/5 h-auto">
          <Image
            src="/assets/game/peppy_cat.png"
            alt="avatar"
            width={500}
            height={300}
            layout="responsive"
          />
        </div>
        <ScrollArea
          className="bg-white opacity-70 rounded-xl shadow-md p-1
        w-2/3 lg:w-3/4 h-1/2 xs:h-3/5 md:h-2/5 lg:h-3/5 2xl:h-full"
        >
          <div className="p-4">
            <h4 className="mb-4 text-xs md:text-base font-small md:font-medium leading-none">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
              aliquam eum qui esse, pariatur illo! Libero amet dolores
              doloremque illum, temporibus enim, voluptatum dolore aspernatur,
              qui soluta nulla alias vero! Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Rerum aliquam eum qui esse, pariatur
              illo! Libero amet dolores doloremque illum, temporibus enim,
              voluptatum dolore aspernatur, qui soluta nulla alias vero! Lorem
              ipsum dolor sit amet, consectetur adipisicing elit. Rerum aliquam
              eum qui esse, pariatur illo! Libero amet dolores doloremque illum,
              temporibus enim, voluptatum dolore aspernatur, qui soluta nulla
              alias vero!
            </h4>
          </div>
        </ScrollArea>
      </div>
      <Contact />
    </div>
  );
};

export default Result;
