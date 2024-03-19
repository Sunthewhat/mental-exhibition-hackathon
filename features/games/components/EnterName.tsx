"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import React, { useState } from "react";
import { normalStringValidator } from "../validators";

interface EnterNameProp {
  setEnterGame: (value: boolean) => void;
}

const EnterName: React.FC<EnterNameProp> = ({ setEnterGame }) => {
  const [name, setName] = useState<string>("");
  const [warn, setWarn] = useState(false);

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
      if (!warn) setWarn(true);
      return;
    }
    window.localStorage.setItem("name", name);
    setEnterGame(true);
  };

  return (
    <div className="px-8 pt-32 flex w-full flex-col items-center justify-center gap-[8rem] ">
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
        <Input onChange={handleChange} className="z-10" />
        {warn && (
          <Label className="text-red-500">
            กรุณาใส่ชื่อให้ถูกต้อง [ห้ามมีอัครพิเศษ]
          </Label>
        )}
      </div>

      <button
        className="relative w-[120px] h-[45px] md:w-[180px] md:h-[70px] border-r-emerald-500 z-100"
        onClick={handleClick}
      >
        <Image
          src="/assets/game/click-here.png"
          alt="icon"
          sizes="200px 50px"
          fill
          priority
        />
      </button>
    </div>
  );
};

export default EnterName;
