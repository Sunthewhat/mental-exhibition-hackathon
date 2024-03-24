"use client";

import { Menu } from "lucide-react";
import { Noto_Sans_Thai, Noto_Sans } from "next/font/google";
import Link from "next/link";
import { ReactNode, useState } from "react";
import Sidebar from "./Sidebar";

interface Props {
  children: ReactNode;
}

const notoThai = Noto_Sans_Thai({ subsets: ["latin"] });
const noto = Noto_Sans({ subsets: ["latin"] });

export default function NavigationBar({ children }: Props) {
  const [showSidebar, setShowSidebar] = useState<boolean>();

  return (
    <>
      <div className="px-[30px] md:px-[60px] flex justify-between">
        <div className="flex justify-between gap-2">
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
          <Link href="/">Hackathon</Link>
          <Link href="/">Game</Link>
        </div>
      </div>

      <div className="flex flex-col items-center">{children}</div>
    </>
  );
}
