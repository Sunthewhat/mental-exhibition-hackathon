"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const StartGame = () => {
  const router = useRouter();

  return (
    <div className="p-8 flex w-full flex-col items-center justify-center gap-[4rem] xs:mt-[8rem] xl:gap-0 md:mt-[0rem]">
      <div className="relative w-[240px] h-[240px] md:w-[350px] md:h-[350px]">
        <Image
          src="/assets/icon.png"
          alt="icon"
          fill
          sizes="(min-width: 808px) 50vw, 100vw"
          priority
        />
      </div>

      <button
        className="relative w-[400px] h-[250px] sm:w-[600px] sm:h-[350px]
      md:w-[725px] md:h-[413px]"
        onClick={() => router.push("/game/playing")}
      >
        <Image
          src="/assets/game/start-btn.png"
          alt="icon"
          fill
          sizes="(min-width: 808px) 50vw, 100vw"
          priority
        />
      </button>
    </div>
  );
};

export default StartGame;
