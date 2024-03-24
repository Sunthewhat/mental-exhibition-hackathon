import { Noto_Sans_Thai } from "next/font/google";
import styles from "./page.module.css";
import React, { Suspense } from "react";
import NavigationBar from "@/features/home/components/navigation/NavigationBar";


const noto_sans = Noto_Sans_Thai({ subsets: ["latin"] });

interface HackathonLayoutProps {
  children: React.ReactNode;
}

const HackathonLayout = ({ children }: HackathonLayoutProps) => {
  return (
    <Suspense>
      <div className={`${noto_sans.className} ${styles.bg_gradient} pt-[5%]`}>
        <NavigationBar>
          <div className='my-[12%]'>
            {children}
          </div>
        </NavigationBar>
      </div>
    </Suspense>
  );
};

export default HackathonLayout;
