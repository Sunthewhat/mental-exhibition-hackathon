"use client";

import Image from "next/image";
import logo from "@/public/assets/hackathon/logo.png";
import check_icon from "@/public/assets/hackathon/check_ring.svg";
import OuterBox from "@/features/hackathon/components/OuterBox";
import InnerBox from "@/features/hackathon/components/InnerBox";
import GButton from "@/features/hackathon/components/GButton";
import Link from "next/link";
import InViewAnimation from "@/features/shared/Animation/InViewAnimation";
import ExhiButton from "../../ExhiButton";

const SubmitBox: React.FC = () => {
  return (
    <OuterBox>
      <InnerBox>
        <div className="flex flex-col justify-center items-center gap-3 border-b border-[#B9A5D6] pb-6">
          <>
            <Image priority src={logo} alt="logo" />
          </>
          <h2 className=" text-[12px] md:text-[20px] lg:text-[24px] text-center text-[#5A81BC] font-bold">
            แบบฟอร์มลงทะเบียน
            <br className="md:hidden" /> Color of Feelings Exhibition
          </h2>
        </div>
        <div className="flex flex-col items-center justify-center text-center gap-3">
          <div>
            <Image priority src={check_icon} alt="header" className="w-full" />
          </div>
          <h2 className="font-bold text-[20px] text-[#5A81BC]">
            ดำเนินการเสร็จสิ้น
          </h2>
          <div className="text-[10px] md:text-[14px] lg:text-[24px] text-[#34312F]">
            <p>เราได้รับคำตอบของคุณแล้ว ติดตามข่าวสารของเราได้ที่</p>
            <p>
              <span className="font-bold">Website:</span>{" "}
              <Link href="/" className="hover:text-[#5A81BC]">
                www.hackmindgallery-kmutt.com
              </Link>
            </p>
            <p>
              <span className="font-bold">Instagram</span>:
              <Link
                href="https://www.instagram.com/hackmindgallery.kmutt/"
                className="hover:text-[#5A81BC]"
              >
                hackmindgallery.kmutt
              </Link>
            </p>
          </div>
        </div>
      </InnerBox>
      <div className="flex justify-center items-center">
        <Link
          className="text-[16px] font-bold z-20 px-[40px] md:px-[60px] py-[15px] rounded-[16px] text-[#fff] bg-gradient-to-r from-[#a9dbd0] to-[#89b6fb]"
          href='/'
        >
          ย้อนกลับไปหน้าหลัก
        </Link>
      </div>
    </OuterBox>
  );
};

export default SubmitBox;
