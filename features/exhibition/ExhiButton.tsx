import { Roboto } from "next/font/google";
import Link from "next/link";

const roboto = Roboto({weight: "700", subsets: ['latin']});

interface Props {
  type: 'PRIMARY' | 'SECONDARY';
  href: string;
  children: React.ReactNode;
}

export default function ExhiButton({ type, href, children }: Props) {

  const buttonStyle = {
    base: 'h-[50px] w-[140px] text-[14px] md:h-[60px] md:w-[160px] md:text-[16px] font-bold z-10 rounded-2xl flex justify-center items-center ',
    primary: 'text-[#fff] bg-gradient-to-r from-[#a9dbd0] to-[#89b6fb]',
    secondary: 'border-[3px] border-[#79CCEC] text-[#79CCEC]'
  }
  
  return (
    <Link
      href={href}
      className={
        `${buttonStyle.base} 
        ${type == 'PRIMARY' ? buttonStyle.primary : buttonStyle.secondary} 
        ${roboto.style}
      `}
    >
      {children}
    </Link>
  )
}