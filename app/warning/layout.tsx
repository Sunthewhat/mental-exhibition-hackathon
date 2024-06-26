import { Noto_Sans_Thai } from "next/font/google";
import styles from "../hackathon/page.module.css";
import React, { Suspense } from "react";
import Layer from "@/features/shared/components/Layer";
import NavigationBar from "@/features/home/components/navigation/NavigationBar";

const noto_sans = Noto_Sans_Thai({ subsets: ["latin"] });

interface WorkshopLayoutProps {
  children: React.ReactNode;
}

const WorkshopLayout = ({ children }: WorkshopLayoutProps) => {
  return (
    <Suspense>
      <div className={`${styles.bg_gradient_l_to_r} ${noto_sans.className} pt-[60px] h-[300px] md:h-[400px] lg:h-[500px]`}>
        <Layer depth={1}>
          <NavigationBar>{children}</NavigationBar>
        </Layer>
      </div>
    </Suspense>
  );
};

export default WorkshopLayout;
