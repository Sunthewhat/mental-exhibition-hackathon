"use client"
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";


const EducationLevel = () => {
  const [selectedChoice, setSelectedChoice] = useState("");
  const handleRadioChange = (e:any) => {
    setSelectedChoice(e.target.value);
  };
  const getLink = () => {
    if (selectedChoice === "") {
      return 'error';
    } else if (selectedChoice === "form-hackathon") {
      localStorage.setItem("form-type", "hackathon");
      return '/form/team-and-members';
    } else if (selectedChoice === "form-exhibition") {
      localStorage.setItem("form-type", "exhibition");
      return '/form/team-and-members';
    } else {
      return 'error';
    }
  };
  
  const renderNextLink = () => {
    const link = getLink();
    if (link === 'error') {
      return <p className="text-[#5a81bc] font-medium underline-offset-4 underline">Please choose 1 choice</p>;
    } else {
      return (
        <Link href={link}>
          <Button className="text-lg lg:px-10">ถัดไป &gt;</Button>
        </Link>
      );
    }
  };
  
  return (
    <section className="space-y-6">
    <div className="bg-white/70  lg:w-[1000px] px-7 space-y-6 rounded">
      <div className="w-full flex flex-col items-center gap-2">
        <div className="mt-8">
          <Image src="/logo.png" alt="logo" width={120} height={120} />
        </div>
        <div className="space-y-4 text-center">
          <h1 className="text-xl font-bold text-[#5a81bc]">
            แบบฟอร์มลงทะเบียน Mental Health Hackathon Challenge
          </h1>
          <p>
            Innovation hackathon challenge
            <span className="ml-2 font-semibold text-[#5a81bc]">
              “นวัตกรรมเพื่อความตระหนักรู้ด้านสุขภาพจิตในสังคม”
            </span>
          </p>
        </div>
      </div>
      <hr className="p-[1px] bg-[#b9a5d6] w-full" />
      <div className="flex flex-col items-center gap-6 py-6">
      <h1 className="text-xl font-bold text-[#5a81bc]">โปรดเลือกระดับการแข่งขัน</h1>
          <ul className="space-y-4">
          <li className="flex items-center">
              <input id="" type="radio" value="form-exhibition" name="default-radio" className="w-4 h-4 lg:w-5 lg:h-5 border-gray-300" onChange={handleRadioChange} />
              <label htmlFor="" className="ms-2 ml-3 text-sm lg:text-base font-medium">ระดับอุดมศึกษา</label>
          </li>
          <li className="flex items-center">
              <input id="" type="radio" value="form-hackathon" name="default-radio" className="w-4 h-4 lg:w-5 lg:h-5 border-gray-300" onChange={handleRadioChange} />
              <label htmlFor="" className="ms-2 ml-3 text-sm lg:text-base font-medium">ระดับมัธยมศึกษาตอนปลาย</label>
          </li>
          
          </ul>
      </div>
        </div>
        <div className="flex justify-between w-full">
      <Link href='/form/detail'>
        <Button className="text-lg lg:px-8">&lt; ย้อนกลับ</Button>
      </Link>
      {renderNextLink()}    
      </div>
  </section>
  )
}

export default EducationLevel