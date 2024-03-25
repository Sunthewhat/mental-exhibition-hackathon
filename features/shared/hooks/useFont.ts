import localFont from "next/font/local";
import { Itim, Noto_Sans_Thai, Shippori_Mincho } from "next/font/google";

const headerFont = localFont({
  src: "../fonts/golden-bridge-font.ttf",
  weight: "300",
  display: "swap",
});

const subHeader = Shippori_Mincho({ subsets: ["latin"], weight: "800" });

// const paragraphFont = Noto_Sans_Thai({ subsets: ["latin"], weight: "400" });
const paragraphFont = Itim({ subsets: ["latin"], weight: "400" });
export const useFonts = () => {
  return { headerFont, subHeader, paragraphFont };
};
