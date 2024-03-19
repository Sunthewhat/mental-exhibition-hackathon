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
    <div className="h-full w-full py-12 md:px-[2em] lg:px-[8em] lg:h-auto">
      <div className="mx-auto flex flex-col justify-center items-center">
        <Label className="md:mt-8 lg:mt-16">
          <span className="font-extrabold drop-shadow-2xl text-white text-base sm:text-2xl md:text-3xl lg:text-4xl">
            {name ?? "Guest User"}
          </span>
        </Label>

        <div
          className="w-full h-3/5 md:h-3/4 flex flex-col items-center  
          gap-[2rem] lg:mt-16 xl:h-4/5 ipad-pro:flex-row "
        >
          <div className="relative w-3/5 xl:w-1/2 h-auto bg-cover bg-result bg-transparent bg-opacity-70 rounded-full">
            <Image
              src="/assets/game/peppy_cat.png"
              alt="avatar"
              width={300}
              height={200}
              layout="responsive"
            />
          </div>
          <ScrollArea
            className="bg-white opacity-70 rounded-2xl shadow-md p-1
        w-2/3 h-3/4 md:w-[90%] ipad-pro:w-4/5 2xl:w-1/2 2xl:h-full"
          >
            <div className="p-4">
              <h4 className="mb-4 text-xs md:text-xl xl:text-2xl font-normal leading-none">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
                aliquam eum qui esse, pariatur illo! Libero amet dolores
                doloremque illum, temporibus enim, voluptatum dolore aspernatur,
                qui soluta nulla alias vero! Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Rerum aliquam eum qui esse,
                pariatur illo! Libero amet dolores doloremque illum, temporibus
                enim, voluptatum dolore aspernatur, qui soluta nulla alias vero!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
                aliquam eum qui esse, pariatur illo! Libero amet dolores
                doloremque illum, temporibus enim, voluptatum dolore aspernatur,
                qui soluta nulla alias vero!
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
