"use client";

import Image from "next/image";
import logo from "@/public/assets/hackathon/logo.png";
import styles from "@/app/hackathon/page.module.css";
import OuterBox from "../OuterBox";
import GButton from "../GButton";
import InnerBox from "../InnerBox";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const GradeBox: React.FC = () => {
  const [selected, setSelected] = useState(false);
  const [error, setError] = useState(false);

  const router = useRouter();

  const handleChange = (event: { target: { value: string } }) => {
    setSelected(true);
    setError(false);
    localStorage.setItem("educationLevel", event.target.value);
    //console.log(localStorage.getItem('educationLevel'));
  };

  const clickHandle = () => {
    if (!selected) {
      setError(true);
      return;
    } else {
      if (localStorage.getItem("educationLevel") === "highSchool") {
        router.push("/hackathon/highteam");
      } else if (localStorage.getItem("educationLevel") === "university") {
        router.push("/hackathon/uniteam");
      }
    }
  };

  return (
    <OuterBox>
      <InnerBox>
        <div className="flex flex-col justify-center items-center gap-3 border-b border-[#B9A5D6] pb-6">
          <div className="">
            <Image priority src={logo} alt="logo" />
          </div>
          <h2 className=" text-[12px] md:text-[20px] lg:text-[24px] text-center text-[#5A81BC] font-bold">
            แบบฟอร์มลงทะเบียน
            <br className="md:hidden" /> Mental Health Hackathon Challenge
          </h2>
          <p className=" text-center text-[10px] md:text-[15px] lg:text-[16px]">
            Innovation hackathon challenge
            <br className="md:hidden" />{" "}
            <span className=" text-[#5A81BC] font-bold">
              “นวัตกรรมเพื่อความตระหนักรู้ด้านสุขภาพจิตในสังคม”
            </span>
          </p>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-[#5A81BC] font-bold text-[12px] md:text-[20px] lg:text-[24px] mb-5">
            โปรดเลือกระดับการศึกษา
          </h2>
          <div className="flex flex-col items-start gap-3 text-[10px] md:text-[16px]">
            <div className="flex gap-3 justify-center items-center">
              <input
                type="radio"
                className={styles.radioButton}
                id="highSchool"
                name="educationLevel"
                value="university"
                onChange={handleChange}
              />
              <label htmlFor="highSchool">ระดับอุดมศึกษา</label>
            </div>
            <div className="flex gap-3 justify-center items-center">
              <input
                type="radio"
                className={styles.radioButton}
                id="university"
                name="educationLevel"
                value="highSchool"
                onChange={handleChange}
              />
              <label htmlFor="university">ระดับมัธยมศึกษาตอนปลาย</label>
            </div>
          </div>
          {error && (
            <p className="my-4 text-red-500 font-bold">
              กรุณาเลือกระดับการศึกษา
            </p>
          )}
        </div>
      </InnerBox>
      <div className="flex flex-row justify-between items-end">
        <GButton title="ย้อนกลับ" command="/hackathon/explain" type="TYPE1" symbol={true}/>
        <button
          className={`${styles.btn_gradient} px-[60px] py-[15px] rounded-[8px] z-20 flex flex-row items-center justify-center gap-3`}
          onClick={clickHandle}
        >
          <p className="text-white text-[16px] font-bold z-20">ถัดไป</p>
          <Image alt="next" src="/assets/hackathon/next.svg" width={10} height={10} />
        </button>
      </div>
    </OuterBox>
  );
};

export default GradeBox;
