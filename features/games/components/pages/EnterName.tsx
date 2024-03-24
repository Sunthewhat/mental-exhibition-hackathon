"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useCallback, useEffect, useState } from "react";
import { normalStringValidator } from "../../validators";
import { useToast } from "@/components/ui/use-toast";
import Image from "next/image";
import ShineBox from "@/features/shared/components/Shinebox";
import { useFonts } from "@/features/shared/hooks/useFont";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

interface EnterNameProp {
  setEnterGame: (value: boolean) => void;
  name: string;
  setName: (name: string) => void;
}

interface ItemProps {
  boxSize: number;
  size: number;
}

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const EnterName: React.FC<EnterNameProp> = ({
  setEnterGame,
  setName,
  name,
}) => {
  const [warn, setWarn] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 430px)" });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const prop = isMobile
    ? {
        boxSize: 180,
        size: 140,
      }
    : isTablet
    ? {
        boxSize: 280,
        size: 240,
      }
    : {
        boxSize: 330,
        size: 300,
      };

  const { toast } = useToast();
  const { subHeader } = useFonts();

  const handleClick = useCallback(() => {
    if (warn || name === "") {
      if (!warn) {
        toast({
          title: "Invalid Username",
          description: "Please input your name correctly",
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

    // Clear cached when we go back to first page
    window.localStorage.removeItem("name");
    window.localStorage.removeItem("answers");

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleEnter]);

  return (
    <motion.div variants={container} initial="hidden" animate="visible">
      <div className="px-8 py-16 flex w-full flex-col items-center justify-center gap-[3rem] xs:mt-[8rem] tablet:mt-[0rem]">
        <ShineBox blurAmount="blur-xl" boxSize={prop.boxSize}>
          <Image
            src="/assets/logo.svg"
            alt="logo"
            width={prop.size}
            height={prop.size}
          />
        </ShineBox>

        <div className="w-3/5 flex flex-col gap-2 z-10">
          <Label
            className={`text-white font-bold text-md md:text-base lg:text-lg
          ${subHeader.className}`}
          >
            Enter your name
          </Label>
          <Input onChange={handleChange} value={name} className="z-10" />
          {warn && (
            <Label className="text-red-500">Please input your name</Label>
          )}
        </div>

        <ShineBox blurAmount="blur-3xl" boxSize={180}>
          <button
            className="relative w-[120px] h-[45px] md:w-[180px] md:h-[70px] mt-[4em] z-10 text-transparent btn-hover"
            onClick={handleClick}
          >
            T
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
    </motion.div>
  );
};

export default EnterName;
