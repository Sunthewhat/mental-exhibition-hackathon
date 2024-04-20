"use client";

import { Menu } from "lucide-react";
import { Noto_Sans_Thai, Noto_Sans } from "next/font/google";
import { ReactNode, useState } from "react";
import Sidebar from "../home/components/navigation/Sidebar";
import Link from "next/link";

const notoThai = Noto_Sans_Thai({ subsets: ["latin"] });
const noto = Noto_Sans({ subsets: ["latin"] });

export default function GalleryNav() {
  const [showSidebar, setShowSidebar] = useState<boolean>();

  const workshopClick = () => {
    const workshopSection = document.getElementById("workshop");
    if (workshopSection) {
      workshopSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="px-[10px] md:px-[60px] flex justify-between">
        <div className="flex items-center justify-between gap-2">
          <Menu
            color="#fff"
            className="lg:hidden"
            onClick={() => {
              setShowSidebar((prev) => !prev);
            }}
          />
          <Link
            href="/"
            className={`${noto.className} text-base md:text-lg text-white font-bold`}
          >
            Mental Health Exhibition & Hackathon 2024
          </Link>
        </div>

        <Sidebar state={showSidebar} setState={setShowSidebar} />

        <div
          className={`${notoThai.className} text-sm text-white hidden lg:flex items-center justify-between gap-[90px]`}
        >
          <Link href="/">Home</Link>
          {/* <Link href="/hackathon/pdpa">Hackathon</Link>
          <Link href="/exhibition/explain">Exhibition</Link> */}
          <Link href="/game">Game</Link>
          <button onClick={workshopClick} >
            Workshop
          </button>
        </div>
      </div>
    </>
  );
}
