"use client";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getDisplayName, getScore } from "@/features/games/helpers";
import React, { useEffect, useState } from "react";
import Contact from "../Contact";
import { motion } from "framer-motion";
import { useFonts } from "@/features/shared/hooks/useFont";
import { useRouter } from "next/navigation";
import { useSeason } from "@/features/games/hooks/useSeason";
import Lighting from "../Lighting";

const Complete = () => {
  const router = useRouter();
  const [userName, setUsername] = useState<string | null>("Unknown Guest");
  const [score, setScore] = useState<number>(0);

  const { headerFont, paragraphFont } = useFonts();
  const { name, description, imgUrl, downloadUrl } = useSeason(score);

  const handleDownloadImage = async () => {
    const response = await fetch(downloadUrl);
    const buffer = await response.arrayBuffer();
    const imageBlob = new Blob([buffer], { type: "image/png" });
    // const imageFile = new File([imageBlob], colorcode + '.png');
    const link = document.createElement("a");
    link.href = URL.createObjectURL(imageBlob);
    link.download = userName ?? name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

  };

  useEffect(() => {
    const userName = getDisplayName();
    const localScore = getScore();

    if (userName === null || localScore == null) {
      router.replace("/game");
      return;
    }

    setScore(localScore);
    setUsername(userName);
  }, []);

  return (
    <>
      <div className="h-full w-full py-12 md:px-[2em] lg:px-[8em] lg:h-auto">
        <div className="mx-auto flex flex-col justify-center items-center">
          <Label className="md:mt-8 lg:mt-16 z-50">
            <span
              className={`font-extrabold drop-shadow-2xl text-white text-base sm:text-2xl md:text-3xl lg:text-4xl flex flex-col items-center justify-center ${headerFont.className}`}
            >
              <span className="text-center">{userName ?? "Guest User"}</span>
              <br />
              <span>{name}</span>
            </span>
          </Label>

          <div
            className="w-full h-3/5 md:h-3/4 flex flex-col items-center
            gap-[2rem] lg:mt-16 xl:h-4/5 lg:flex-row "
          >
            <Lighting className="relative w-3/5 lg:w-1/2 h-auto bg-cover rounded-full z-50">
              <motion.img
                src={imgUrl}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
              />
            </Lighting>
            <ScrollArea
              className="bg-white opacity-70 rounded-2xl shadow-md p-1
          w-2/3 h-3/4 md:w-[90%] lg:w-1/2 2xl:h-full z-50"
            >
              <div className="p-4">
                <h4
                  className={`mb-4 text-xs md:text-xl font-normal leading-none ${paragraphFont.className} text-[#5C6192]`}
                >
                  {description}
                </h4>
              </div>
            </ScrollArea>
          </div>

          <Contact onClick={handleDownloadImage} />
        </div>
      </div>
    </>
  );
};

export default Complete;
