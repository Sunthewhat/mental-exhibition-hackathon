import styles from "./page.module.css";

import { Noto_Sans_Thai } from "next/font/google";

const noto_sans = Noto_Sans_Thai({ subsets: ["latin"] });

interface HomeLayoutProps {
  children: React.ReactNode;
}

import React from "react";
import SmokeBackground from "@/features/home/components/SmokeBackground";
import Layer from "@/features/shared/components/Layer";
import NavigationBar from "@/features/home/components/navigation/NavigationBar";

const HomePageLayout = ({ children }: HomeLayoutProps) => {
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

export default HomePageLayout;
