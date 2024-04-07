import { Url } from "next/dist/shared/lib/router/router";
import { Roboto } from "next/font/google";
import Link from "next/link";

const roboto = Roboto({weight: "500", subsets: ['latin']});

interface Props {
  type: 'PRIMARY' | 'SECONDARY';
  href: Url;
  children: React.ReactNode;
}

export default function ExhiButton({ type, href, children }: Props) {

  const buttonStyle = {
    base: 'rounded-2xl font-semibold flex justify-between items-center min-w-fit px-4',
    primary: 'text-[#fff] bg-gradient-to-r from-[#a
      9dbd0] to-[#89b6fb]',
    secondary: 'border-2 border-[#79CCEC] text-[#79CCEC]'
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