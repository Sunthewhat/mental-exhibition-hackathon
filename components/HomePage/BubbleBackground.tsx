'use client';

import BubbleSpawner from "./BubbleSpawner";


export default function BubbleBackground() {
  
  return (
    <div className="absolute top-0 left-0 z-50 w-full h-full">
      <BubbleSpawner spawnerPosition={{posX: 600}} maxRandomNumber={10} randomMultiplier={10}/>
    </div>
  )
}