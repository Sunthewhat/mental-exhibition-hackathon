import { Noto_Sans_Thai } from "next/font/google";
import styles from "./page.module.css";
import React, { Suspense } from "react";

const noto_sans = Noto_Sans_Thai({ subsets: ["latin"] });

interface HackathonLayoutProps {
  children: React.ReactNode;
}

const HackathonLayout = ({ children }: HackathonLayoutProps) => {
  return (
    <Suspense>
      <div className={`${noto_sans.className} ${styles.bg_gradient}`}>
        {children}
      </div>
    </Suspense>
  );
};

export default HackathonLayout;
