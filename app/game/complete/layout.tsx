"use client";
import { getDisplayName } from "@/features/games/helpers";
import { useRouter } from "next/navigation";
import React, { ReactNode, useEffect } from "react";

interface GameResultLayoutProps {
  children: ReactNode;
}

const GameCompleteLayout = ({ children }: GameResultLayoutProps) => {
  const userName = getDisplayName();
  const router = useRouter();

  useEffect(() => {
    if (userName === null) {
      router.replace("/game");
    }
  });

  return <>{children}</>;
};

export default GameCompleteLayout;
