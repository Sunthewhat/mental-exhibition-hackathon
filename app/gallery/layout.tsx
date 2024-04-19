import styles from "../(homepage)/page.module.css";

import { Noto_Sans_Thai } from "next/font/google";

const noto_sans = Noto_Sans_Thai({ subsets: ["latin"] });

interface HomeLayoutProps {
  children: React.ReactNode;
}

import React from "react";

const HomePageLayout = ({ children }: HomeLayoutProps) => {
  return (
    <div className={`${styles.defaultBackground} ${noto_sans.className}`}>
      {children}
    </div>
  );
};

export default HomePageLayout;
