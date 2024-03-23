'use client';

import Image from "next/image";
import logo from "../../assets/logo.png";
import check_icon from "../../assets/check_ring.svg";
import OuterBox from "../outer_box";
import GButton from "../g_button";
import Link from "next/link";
import InnerBox from "../inner_box";

const SummitBox: React.FC = () => {
  
  return (
    <OuterBox>
      <InnerBox>
        <div className="flex flex-col justify-center items-center gap-3 border-b border-[#B9A5D6] pb-6">
          <div className="">
            <Image priority src={logo} alt="logo" />
          </div>
          <h2 className=" text-center text-[#5A81BC] font-bold">
            แบบฟอร์มลงทะเบียน<br className="md:hidden" /> Mental Health Hackathon Challenge
          </h2>
          <p className=" text-center">
            Innovation hackathon challenge<br className="md:hidden" /> <span className=" text-[#5A81BC] font-bold">“นวัตกรรมเพื่อความตระหนักรู้ด้านสุขภาพจิตในสังคม”</span>
          </p>
        </div>
        <div className="flex flex-col items-center justify-center text-center gap-3">
            <div>
                <Image
                priority
                src={check_icon}
                alt="header"
                className="w-full"
            />
            </div>
            <h2 className="font-bold text-[20px] text-[#5A81BC]">ดำเนินการเสร็จสิ้น</h2>
            <div>
                <p>เราได้รับคำตอบของคุณแล้ว ติดตามข่าวสารของเราได้ที่</p>
                <p>Website: www.hackmindgallery.com</p>
                <p>Instagram: hackmindgallery.kmutt</p>
            </div>
        </div>
      </InnerBox>
    </OuterBox>
    
  );
};

export default SummitBox;
