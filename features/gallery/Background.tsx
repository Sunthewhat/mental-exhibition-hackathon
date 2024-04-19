/* eslint-disable @next/next/no-img-element */
import { ReactNode, useEffect, useState } from "react"
import { useMediaQuery } from "react-responsive";

interface Props {
  children: ReactNode;
}

interface SmokeProps {
  imgMultiplier: number;
  topPosition: number;
}

export default function Background({children}: Props) {

  const isMobile = useMediaQuery({minWidth: 320, maxWidth: 680});
  const isTablet = useMediaQuery({minWidth: 680, maxWidth: 768});
  const [smokeProps, setSmokeProps] = useState<SmokeProps>({imgMultiplier: 0.4, topPosition: 128});

  useEffect(() => {
    setSmokeProps(
      isMobile ? {imgMultiplier: 0.4, topPosition: 200} :
      isTablet ? {imgMultiplier: 0.4, topPosition: 200} :
      {imgMultiplier: 0.4, topPosition: 300}
    )
  }, [isMobile, isTablet]);
  
  return (
    <div
      className="relative"
    >

      <img 
        src="/assets/gallery/smoke-left.svg" alt="" className="absolute left-0" 
        style={{
          width: `${100 * smokeProps.imgMultiplier}%`,
          height: `${100 * smokeProps.imgMultiplier}%`,
          top: `-${smokeProps.topPosition}px`
        }}
      />
      <img src="/assets/gallery/smoke-right.svg" alt="" className="absolute right-0"
        style={{
          width: `${100 * smokeProps.imgMultiplier}%`,
          height: `${100 * smokeProps.imgMultiplier}%`,
          top: `-${smokeProps.topPosition}px`
        }}
      />
      <img
        src="/assets/hackathon/bubble_end.svg" alt="" className="absolute bottom-0 w-full"/>

      <div className="relative overflow-hidden">
        {children}
      </div>
    </div>
  )
}