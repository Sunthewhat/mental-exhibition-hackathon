"use client";
import Bubble from "@/features/games/components/layouts/Bubble";
import Cloud from "@/features/games/components/layouts/Cloud";
import Smoke from "@/features/games/components/layouts/Smoke";
import React, { ReactNode, useEffect, useRef } from "react";

interface GameLayoutProps {
  children: ReactNode;
}

const GameLayout = ({ children }: GameLayoutProps) => {
  return (
    <div
      className={`bg-gradient-to-b from-blue-400 via-pink-200 to-white bg-no-repeat bg-cover w-full min-h-screen relative overflow-auto`}
      id="game-layout"
    >
      <Cloud />
      <Smoke />
      <Bubble />
      {children}
    </div>
  );
};

export default GameLayout;
