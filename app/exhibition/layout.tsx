import { Noto_Sans_Thai } from "next/font/google";
import styles from "../hackathon/page.module.css";
import React, { Suspense } from "react";
import Header from "@/features/hackathon/components/Header";
import Footer from "@/features/hackathon/components/Footer";


const noto_sans = Noto_Sans_Thai({ subsets: ["latin"] });

interface HackathonLayoutProps {
  children: React.ReactNode;
}

const HackathonLayout = ({ children }: HackathonLayoutProps) => {
  return (
    <Suspense>
      <div className={`${noto_sans.className} ${styles.bg_gradient}`}>
        <Header />
            {children}
        <Footer />
      </div>
    </Suspense>
  );
};

export default HackathonLayout;
