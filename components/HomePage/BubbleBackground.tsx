'use client';

import { ReactNode, useCallback, useEffect, useState } from "react"
import Bubble from "./Bubble";


export default function BubbleBackground() {
  
  const [bubbles, setBubbles] = useState<ReactNode[]>();
  
  let iter = 0;
  const setBubblePosition = useCallback(() => {

    const startingPosition = [
      window.innerWidth*20/100,
      window.innerWidth*40/100,
      window.innerWidth*60/100,
      window.innerWidth*80/100
    ];
    
    // random the starting point of the bubble position
    const randPos = startingPosition.map((pos) => pos + Math.floor(Math.random() * 10 + 1) * 10);
    
    const bubbleComponents = randPos.map(pos => <Bubble key={iter++} filePath="/bubble_1.svg" initialPos={{posX: pos}} />);

    setBubbles(bubbleComponents);
  }, [iter]);

  useEffect(() => {

    const interval = setInterval(() => {
      setBubblePosition();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [setBubblePosition]);
  
  return (
    <div className="absolute top-0 left-0 z-50 w-full h-full">
      {bubbles}
    </div>
  )
}