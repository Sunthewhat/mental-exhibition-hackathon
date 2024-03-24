import styles from "../(homepage)/page.module.css";
import { Noto_Sans_Thai } from "next/font/google";

import React from "react";
import SmokeBackground from "@/features/home/components/SmokeBackground";
import Layer from "@/features/ui/components/Layer";
import NavigationBar from "@/features/home/components/navigation/NavigationBar";

const noto_sans = Noto_Sans_Thai({ subsets: ["latin"] });

interface HackathonLayoutProps {
  children: React.ReactNode;
}

const HackathonLayout = ({ children }: HackathonLayoutProps) => {
  return (
    <div className={`${styles.defaultBackground} ${noto_sans.className}`}>
      <SmokeBackground />
      {/* <BubbleBackground /> */}

      <Layer depth={1}>
        <NavigationBar>{children}</NavigationBar>
      </Layer>
    </div>
  );
};

export default HackathonLayout;
