import { ReactNode, useCallback, useEffect, useState } from "react";
import Bubble from "./Bubble";

interface Props {
  spawnerPosition: {
    posX: number;
  };
  maxRandomNumber: number;
  randomMultiplier: number;
}

export default function BubbleSpawner({
  spawnerPosition: { posX },
  maxRandomNumber,
  randomMultiplier,
}: Props) {
  const [bubble, setBubble] = useState<ReactNode>();

  const loopBubbleEffects = useCallback(() => {
    console.log("Release effect");
    const rand = Math.random();
    const randomDestination =
      Math.floor(rand * maxRandomNumber) * randomMultiplier;

    const bubbleComponent = (
      <Bubble
        filePath="/bubble_1.svg"
        position={{ startPosX: posX, destPosX: randomDestination }}
      />
    );
    setBubble(bubbleComponent);
  }, [maxRandomNumber, posX, randomMultiplier]);

  useEffect(() => {
    const interval = setInterval(loopBubbleEffects, 2000);
    return () => {
      clearInterval(interval);
    };
  });

  return <>{bubble}</>;
}
