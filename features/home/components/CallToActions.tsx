"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

interface TextSize {
  header: Number;
  para: Number;
}

export default function CallToActions() {
  const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 680 });
  const isTablet = useMediaQuery({ minWidth: 680, maxWidth: 768 });
  const [textSize, setTextSize] = useState<TextSize>({ header: 14, para: 12 });

  useEffect(() => {
    setTextSize(
      isMobile
        ? { header: 14, para: 12 }
        : isTablet
        ? { header: 20, para: 14 }
        : { header: 24, para: 16 }
    );
  }, [isMobile, isTablet]);

  const buttonStyle = {
    base: "flex items-center justify-center py-[10px] px-8 font-bold rounded-full shadow-md",
    clickToRegis:
      "text-white bg-gradient-to-r from-[#ddcdfa] via-[#f1d2ee] to-[#ddcdfa]",
    clickForInfo: "text-[#B9A5D6] border-2 border-[#DDCDFA]",
  };

  return (
    <div className="flex gap-4">
      <Link
        href="/hackathon/pdpa"
        className={`${buttonStyle.base} ${buttonStyle.clickToRegis}`}
        style={{ fontSize: `${textSize.para}px` }}
      >
        สมัครเลย
      </Link>
      <Link
        target="_blank"
        href="https://drive.google.com/file/d/15OacsQSHFI0I02TH00qartyXCBdZuI3y/view?usp=sharing"
        className={`${buttonStyle.base} ${buttonStyle.clickForInfo}`}
        style={{ fontSize: `${textSize.para}px` }}
      >
        รายละเอียดการแข่งขัน
      </Link>
    </div>
  );
}
