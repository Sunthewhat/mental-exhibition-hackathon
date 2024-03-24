import { Dispatch, SetStateAction } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";

interface Props {
  state: boolean | undefined;
  setState: Dispatch<SetStateAction<boolean | undefined>>;
}

export default function Sidebar({ state, setState }: Props) {
  function onClickHandler(e: React.MouseEvent<HTMLDivElement | SVGSVGElement>) {
    setState(() => false);
  }

  return (
    <AnimatePresence>
      {state && (
        <div
          className="z-50 fixed top-0 left-0 w-screen h-full"
          onClick={(e) => onClickHandler(e)}
        >
          <motion.div
            initial={{ x: -500, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -500, opacity: 0 }}
            transition={{ ease: "easeInOut", duration: 0.7 }}
            className="z-60 fixed top-[10%] pl-6 pt-8 pr-16 rounded-tr-[90px] rounded-br-[90px] bg-[#DDCDFA] w-[280px] h-[724px]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col">
              <X
                color="#fff"
                size={24}
                strokeWidth={3}
                onClick={(e) => onClickHandler(e)}
              />
              <ul className="mt-10 text-[#5A81BC] font-black text-xl">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <hr className="bg-white h-[3px] mt-1 mb-8" />
                <li>
                  <Link href="/hackathon/pdpa">Hackathon</Link>
                </li>
                <hr className="bg-white h-[3px] mt-1 mb-8" />
                <li>
                  <Link href="/game">Game</Link>
                </li>
                <hr className="bg-white h-[3px] mt-1 mb-8" />
              </ul>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
