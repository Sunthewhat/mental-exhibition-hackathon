"use client";
import { getDisplayName } from "@/features/games/helpers";
import NavigationBar from "@/features/home/components/navigation/NavigationBar";
import Layer from "@/features/shared/components/Layer";
import { useRouter } from "next/navigation";
import React, { ReactNode, useEffect } from "react";

interface GameResultLayoutProps {
  children: ReactNode;
}

const GameCompleteLayout = ({ children }: GameResultLayoutProps) => {
  const router = useRouter();

  useEffect(() => {
    const userName = getDisplayName();
    

    if (userName === null) {
      router.replace("/game");
    }
  });
  
  return (
    <>
      {children}
    </>
  );
};

export default GameCompleteLayout;
