"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import React, { useState } from "react";
import { normalStringValidator } from "../validators";
import { useToast } from "@/components/ui/use-toast";

interface EnterNameProp {
  setEnterGame: (value: boolean) => void;
  name: string;
  setName: (name: string) => void;
}

const EnterName: React.FC<EnterNameProp> = ({
  setEnterGame,
  name,
  setName,
}) => {
  const [warn, setWarn] = useState(false);
  const { toast, dismiss } = useToast();

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
    validateInput(e.currentTarget.value);
  };

  const validateInput = (input: string) => {
    if (input === "") return;
    try {
      normalStringValidator.parse(input);
      setWarn(false);
    } catch (error) {
      setWarn(true);
    }
  };

  const handleClick = () => {
    if (warn || name === "") {
      if (!warn) {
        toast({
          id: 1,
          title: "Invalid Username",
          description: "กรุณากรอกชื่อของคุณให้ถูกต้อง",
          variant: "destructive",
          duration: 3000,
        });

        setWarn(true);
      }
      return;
    }
    window.localStorage.setItem("name", name);
    setEnterGame(true);
  };

  return (
    <div className="px-8 pt-32 flex w-full flex-col items-center justify-center gap-[3rem] xs:gap-[5rem] xs:mt-[8rem] tablet:mt-[16rem]">
      <div className="relative w-[161px] h-[161px] md:w-[230px] md:h-[230px]">
        <Image
          src="/assets/icon.png"
          alt="icon"
          fill
          sizes="(min-width: 808px) 50vw, 100vw"
          priority
        />
      </div>

      <div className="w-3/5 flex flex-col gap-2 z-10">
        <Label className="text-white font-bold text-md md:text-base lg:text-lg ">
          Enter your name
        </Label>
        <Input onChange={handleChange} value={name} className="z-10" />
        {warn && (
          <Label className="text-red-500">
            กรุณาใส่ชื่อให้ถูกต้อง [ห้ามมีอัครพิเศษ]
          </Label>
        )}
      </div>

      <button
        className="relative w-[120px] h-[45px] md:w-[180px] md:h-[70px] xs:mt-[-1em] z-10 "
        onClick={handleClick}
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

export default EnterName;
