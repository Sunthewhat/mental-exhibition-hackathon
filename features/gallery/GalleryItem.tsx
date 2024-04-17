/* eslint-disable @next/next/no-img-element */

import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

interface Props {
  title: string;
  desc: string;
  imgUrl: string;
  isLandScape?: boolean;
}

interface TextSize {
  header: number;
  para: number;
}

export default function GalleryItem({
  title,
  desc,
  imgUrl,
  isLandScape,
}: Props) {
  
  const isMobile = useMediaQuery({minWidth: 320, maxWidth: 680});
  const isTablet = useMediaQuery({minWidth: 680, maxWidth: 768});
  const [textSize, setTextSize] = useState<TextSize>({header: 16, para: 12});

  useEffect(() => {
    setTextSize(
      isMobile ? {header: 16, para: 12} :
      isTablet ? {header: 20, para: 16} :
      {header: 20, para: 16}
    )
  }, [isMobile, isTablet])
  
  const STRING_LIMIT = 70;

  return (
    <div
      className={isLandScape ? "flex flex-col items-center justify-center" : ""}
    >
      <img src={imgUrl} alt="" className="w-full h-full" />
      <h3 className={`text-[#5A81BC] font-bold mt-2`} style={{fontSize: `${textSize.header}px`}}>{title}</h3>
      <p className={`text-[#5A81BC]`} style={{fontSize: `${textSize.para}px`}}>
        {desc.length >= STRING_LIMIT ? `${desc.substring(0, STRING_LIMIT)}...` : desc}
      </p>
    </div>
  );
}
