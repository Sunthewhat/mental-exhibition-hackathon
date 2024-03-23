"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useCallback, useEffect, useState } from "react";
import { normalStringValidator } from "../../validators";
import { useToast } from "@/components/ui/use-toast";
import Image from "next/image";
import ShineBox from "@/features/ui/components/Shinebox";
import { useFonts } from "@/hooks/useFont";
import { motion } from "framer-motion";
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
  name,
  setName,
}) => {
  const [warn, setWarn] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  const [prop, setProp] = useState<ItemProps>({
    boxSize: 180,
    size: 140,
  });

  const { toast } = useToast();
  const { subHeader } = useFonts();

  useEffect(() => {
    const updateWindowDimensions = () => {
      setIsMobile(window.innerWidth <= 430);
      setIsTablet(window.innerWidth <= 1024 && !isMobile);

      const computedProp = isMobile
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
      setProp(computedProp);
    };
    // Initial call to set dimensions and styles
    updateWindowDimensions();

    window.addEventListener("resize", updateWindowDimensions);

    return () => {
      window.removeEventListener("resize", updateWindowDimensions);
    };
  }, [isMobile, isTablet]);

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
    </motion.div>
  );
};

export default EnterName;
