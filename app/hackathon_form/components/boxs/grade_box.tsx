'use client';

import Image from "next/image";
import logo from "../../assets/logo.png";
import styles from '../../pages/pdpa_page/page.module.css';
import OuterBox from "../outer_box";
import GButton from "../g_button";
import Link from "next/link";
import InnerBox from "../inner_box";

const GradeBox: React.FC = () => {
  
  
  return (
    <OuterBox>
      <InnerBox>
        <div className="flex flex-col justify-center items-center gap-3 border-b border-[#B9A5D6] pb-6">
          <div className="">
            <Image priority src={logo} alt="logo" />
          </div>
          <h2 className=" text-center ">
            แบบฟอร์มลงทะเบียน<br className="md:hidden" /> Mental Health Hackathon Challenge
          </h2>
          <p className=" text-center">
            Innovation hackathon challenge<br className="md:hidden" /> “นวัตกรรมเพื่อความตระหนักรู้ด้านสุขภาพจิตในสังคม”
          </p>
        </div>
        <div className="flex flex-col items-center">
          <h2>โปรดเลือกระดับการศึกษา</h2>
          <div className="flex flex-col items-start">
            <div className="flex gap-3">
              <input type="radio" id="highSchool" name="educationLevel" value="highSchool" />
              <label htmlFor="highSchool">High School</label>
            </div>
            <div className="flex gap-3">
              <input type="radio" className="" id="university" name="educationLevel" value="university" />
              <label htmlFor="university">University</label>
            </div>
            
          </div>
        </div>
      </InnerBox>
    </OuterBox>
  );
};

export default GradeBox;
