"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useCallback, useEffect, useState } from "react";
import { normalStringValidator } from "../../validators";
import { useToast } from "@/components/ui/use-toast";
import Image from "next/image";
import ShineBox from "@/features/ui/components/Shinebox";
import { Shippori_Mincho } from "next/font/google";

interface EnterNameProp {
  setEnterGame: (value: boolean) => void;
  name: string;
  setName: (name: string) => void;
}

const subHeader = Shippori_Mincho({ subsets: ["latin"], weight: "800" });

const EnterName: React.FC<EnterNameProp> = ({
  setEnterGame,
  name,
  setName,
}) => {
  const [warn, setWarn] = useState(false);
  const { toast } = useToast();

  const handleClick = useCallback(() => {
    if (warn || name === "") {
      if (!warn) {
        toast({
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
    window.localStorage.removeItem("answers");
    setEnterGame(true);
  }, [warn, name, setEnterGame, toast]);

  const handleEnter = useCallback(
    (e: any) => {
      if (e.key === "Enter" || e.key === "ArrowRight") {
        handleClick();
      }
    },
    [handleClick]
  );

  const validateInput = useCallback((input: string) => {
    if (!input) return;
    try {
      normalStringValidator.parse(input);
      setWarn(false);
    } catch (error) {
      setWarn(true);
    }
  }, []);

  const handleChange = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      const inputValue = e.currentTarget.value;
      setName(inputValue);
      validateInput(inputValue);
    },
    [setName, validateInput]
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      handleEnter(e);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleEnter]);

  return (
    <div className="px-8 py-16 flex w-full flex-col items-center justify-center gap-[3rem] xs:mt-[8rem] tablet:mt-[0rem]">
      <div className="relative w-2/3 sm:w-2/5 lg:w-1/3 h-auto">
        <Image
          src="/assets/icon.png"
          alt="icon"
          width={300}
          height={200}
          layout="responsive"
        />
      </div>

      <div className="w-3/5 flex flex-col gap-2 z-10">
        <Label
          className={`text-white font-bold text-md md:text-base lg:text-lg
          ${subHeader.className}`}
        >
          Enter your name
        </Label>
        <Input onChange={handleChange} value={name} className="z-10" />
        {warn && (
          <Label className="text-red-500">
            กรุณาใส่ชื่อให้ถูกต้อง [ห้ามมีอัครพิเศษ]
          </Label>
        )}
      </div>

      <ShineBox blurAmount="blur-3xl" boxSize={120}>
        <button
          className="relative w-[120px] h-[45px] md:w-[180px] md:h-[70px] mt-[4em] z-10"
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
      </ShineBox>
    </div>
  );
};

export default EnterName;
