import Link from "next/link";
import styles from "@/app/hackathon/page.module.css";
import Image from "next/image";

interface Props {
  title: string;
  command: string;
  type?: "TYPE1" | "TYPE2";
  symbol?: boolean;
}

export default function GButton({ title, command, type, symbol }: Props) {
  if (type == "TYPE1") {
    return (
      <Link
        className="text-[#B9A5D6] text-[16px] font-bold z-20"
        href={command}
      >
        <button
          className={`px-[40px] md:px-[60px] py-[15px] rounded-[16px] border-[#B9A5D6] border-[2px] flex flex-row items-center justify-center gap-3`}
        >
          {symbol && <div>
            <Image alt="back" src="/assets/hackathon/back.svg" width={10} height={10} />
            </div>} {title}
        </button>
      </Link>
    );
  }

  return (
    <Link className="text-white text-[16px] font-bold z-20" href={command}>
      <button
        className={`${styles.btn_gradient} px-[50px] md:px-[60px] py-[15px] rounded-[8px] flex flex-row items-center justify-center gap-3`}
      >
        {title}{symbol && <div>
            <Image alt="next" src="/assets/hackathon/next.svg" width={10} height={10} />
            </div>}
      </button>
    </Link>
  );
}
