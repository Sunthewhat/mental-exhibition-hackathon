"use client";

import Image from "next/image";
import logo from "../../assets/logo.png";
import styles from "../../pages/pdpa_page/page.module.css";
import OuterBox from "../outer_box";
import GButton from "../g_button";
import Link from "next/link";
import InnerBox from "../inner_box";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";

const FileSent: React.FC = () => {
  const router = useRouter();

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedName, setSelectedName] = useState("");

const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setSelectedFile(file || null);
    setSelectedName(file?.name || "");
    // Additional validation logic
};

const clickHandle = () => {

  };

const handleChange = (event: { target: { value: string } }) => {
    localStorage.setItem("teamMembers", event.target.value);
};

  const textHandleChange = (event: { target: { value: string } }) => {
    localStorage.setItem("ideaName", event.target.value);
    // console.log(localStorage.getItem('teamName'));
  };

  return (
    <section className="lg:mx-[10%]">
      <OuterBox>
        <InnerBox>
          <div className="flex flex-col items-center">
            <h1 className="text-[#5A81BC] text-[24px] font-bold">
              Proposal File
            </h1>
          </div>
          <div>
            <div>
              <p>แนบลิงก์นวัตกรรมหรือแนวคิดที่ใช้ในการแก้ไขปัญหา โดย</p>
              <ul className="list-style-none mb-5">
                <li>- ส่งเป็นไฟล์ Presentation (PDF) </li>
                <li>- จำนวนไม่เกิน 10 หน้า </li>
                <li>- ขนาดไม่เกิน 10 MB</li>
              </ul>
            </div>
            <div>
              <p>สิ่งที่ควรจะมีเนื้อหาใน Presentation</p>
              <ul className="list-style-none mb-5">
                <li>- Pain point พร้อมข้อมูลอ้างอิงเพื่อสนับสนุน Pain point</li>
                <li>- Solution (แนวคิดหรือนวัตกรรมที่ใช้ในการแก้ไขปัญหา)</li>
                <li>- ความเป็นไปได้ในการทำงานจริง</li>
                <li>- Business Model Canvas (Optional)</li>
              </ul>
            </div>
            <div className="flex flex-col gap-5">
              <div>
                <h2 className=" font-medium text-[15px]">ชื่อไอเดีย</h2>
                <input
                  type="text"
                  className={`${styles.textBox} border-[#000] border-opacity-20 border bg-transparent bg-opacity-0 rounded-[4px] w-full p-4`}
                  placeholder="ชื่อไอเดีย"
                  onChange={textHandleChange}
                />
              </div>
              <div>
                <h2 className=" font-medium text-[15px]">แนบไฟล์ PDF</h2>
                <div className={`${styles.file_upload} border-[#000] border-opacity-20 border bg-transparent bg-opacity-0 rounded-[4px] w-full p-4`}>
                  <h3>{selectedName || "เพิ่มไฟล์"}</h3>
                  <input type="file" accept=".pdf" onChange={handleFileChange} />
                </div>
              </div>

              <div>
                <h2 className=" font-medium text-[15px]">
                  แนบลิงก์สไลด์ (Google, Drive, และอื่นๆ)
                </h2>
                <input
                  type="text"
                  className={`${styles.textBox} border-[#000] border-opacity-20 border bg-transparent bg-opacity-0 rounded-[4px] w-full p-4`}
                  placeholder="ชื่อไอเดีย"
                  onChange={textHandleChange}
                />
              </div>
            </div>
          </div>
        </InnerBox>
        <div className="flex flex-row justify-between items-end">
          <GButton
            title="ย้อนกลับ"
            command="/hackathon_form/pages/gradesel_page"
            type="TYPE1"
          />
          <button
            className={`${styles.btn_gradient} px-[60px] py-[15px] rounded-[8px] z-20`}
            onClick={clickHandle}
          >
            <p className="text-white text-[16px] font-bold z-20">ส่งคำตอบ</p>
          </button>
        </div>
      </OuterBox>
    </section>
  );
};

export default FileSent;
