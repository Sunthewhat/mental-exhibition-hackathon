import { Noto_Sans } from "next/font/google"

const font = Noto_Sans({weight:["600"], subsets: ["latin"]});

/* eslint-disable @next/next/no-img-element */
export default function Contributors() {
  return (
    <div className="flex flex-col items-center gap-4 mt-8">
      <div className={`${font.className} font-semibold text-[#5A81BC] text-[14px]`}>Our Contributors Partners</div>
      <div className="flex justify-between items-center gap-8 h-14 ">
        <img 
          src="/assets/home/youdee-logo.png" alt="youdee logo"
          style={{
            width: 56,
            height: 56
          }}
        />
        <img 
          src="/assets/home/rotaract-logo.svg" alt="rotaract logo"
          style={{
            width: 183,
            height: 56
          }}
        />
      </div>
    </div>
  )
}
