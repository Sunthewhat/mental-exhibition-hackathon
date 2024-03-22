import type { Metadata } from "next";
import "./globals.css";
import NavigationBar from "@/components/Navigation/NavigationBar";
import styles from "./page.module.css";
import Layer from "@/components/HomePage/Layer";
import SmokeBackground from "@/components/HomePage/SmokeBackground";
import { Noto_Sans } from "next/font/google";
import BubbleBackground from "@/components/HomePage/BubbleBackground";

export const metadata: Metadata = {
  title: "Mental Exhibition",
  description: "for your soul",
};

const noto_sans = Noto_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${styles.defaultBackground} ${noto_sans.className}`}>
        <SmokeBackground />

        <BubbleBackground />

        <Layer depth={1}>
          <NavigationBar>
              {children}
          </NavigationBar>
        </Layer>
      </body>
    </html>
  );
}
