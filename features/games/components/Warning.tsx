import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import React from "react";

interface WarningProps {
  onClose: () => void;
}
const Warning = ({ onClose }: WarningProps) => {
  return (
    <div className="bottom-[50%] top-[50%] w-full flex flex-col items-center gap-8">
      <Label className="md:mt-8 lg:mt-16">
        <span className="font-extrabold drop-shadow-2xl text-white text-base sm:text-2xl md:text-3xl lg:text-4xl">
          Warning
        </span>
      </Label>

      <ScrollArea className="bg-white opacity-70 rounded-2xl shadow-md p-5 w-full h-64">
        <h4 className="mb-4 text-xs sm:text-lg font-normal leading-none">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
          aliquam eum qui esse, pariatur illo! Libero amet dolores doloremque
          illum, temporibus enim, voluptatum dolore aspernatur, qui soluta nulla
          alias vero! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Rerum aliquam eum qui esse, pariatur illo! Libero amet dolores
          doloremque illum, temporibus enim, voluptatum dolore aspernatur, qui
          soluta nulla alias vero! Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Rerum aliquam eum qui esse, pariatur illo! Libero
          amet dolores doloremque illum, temporibus enim, voluptatum dolore
          aspernatur, qui soluta nulla alias vero!
        </h4>
      </ScrollArea>

      <button
        className="relative w-[120px] h-[45px] md:w-[180px] md:h-[70px] mt-[4em] z-10"
        onClick={onClose}
      >
        <Image
          src="/assets/game/click-here.png"
          alt="icon"
          width={300}
          height={200}
          layout="responsive"
        />
      </button>
    </div>
  );
};

export default Warning;
