"use client";

import styles from "../../pages/pdpa_page/page.module.css";
import OuterBox from "../outer_box";
import GButton from "../g_button";;
import InnerBox from "../inner_box";
import { useRouter } from "next/navigation";
import {  useState } from "react";
import axios from "axios";

const FileSent: React.FC = () => {
  const router = useRouter();

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedName, setSelectedName] = useState("");

const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setSelectedFile(file || null);
    setSelectedName((prev) => prev = file?.name || "");
    // Additional validation logic
};

const sentToForms = async () => {
  try {
    const prefilledLink = "https://docs.google.com/forms/d/e/1FAIpQLSeisXSSnIgj40V5_zvJbmj18qzNcYnjuqSGA1zDJWyTDD-sbA//formResponse?usp=pp_url&entry.1074003173=%E0%B8%A3%E0%B8%B0%E0%B8%94%E0%B8%B1%E0%B8%9A%E0%B8%AD%E0%B8%B8%E0%B8%94%E0%B8%A1%E0%B8%A8%E0%B8%B6%E0%B8%81%E0%B8%A9%E0%B8%B2&entry.1738580510=afdsfa&entry.1088984327=3&entry.2092238618=fadsf&entry.345067144=afdsf&entry.1122129402=adfsadf&entry.1093082736=fadfads&entry.1550610923=asdfadsf&entry.416472573=adfasdfsdaf&entry.916735898=adfasdfsdaf&entry.2096266230=adfasdfsdaf&entry.1376184245=adfasdfsdaf&entry.1245284820=adfasdfsdaf&entry.1558967097=adfasdfsdaf&entry.1573341874=adfasdfsdaf&entry.1152629801=adfasdfsdaf&entry.1044899895=adfasdfsdaf&entry.275731210=adfasdfsdaf&entry.845462045=adfasdfsdaf&entry.688762263=adfasdfsdaf&entry.717812639=adfasdfsdaf&entry.1899444650=adfasdfsdaf&entry.1761295364=adfasdfsdaf&entry.1672473860=adfasdfsdaf&submit=Submit"

    const res = await fetch(prefilledLink)
    console.log(res);
  } catch (error: any) {
    console.log(error);
  }
  router.push(`/hackathon_form/pages/summit_page`);
}

const handleUpload = async () => {
  
  try {
    if (!selectedFile) return;
    const formData = new FormData();
    formData.append("pdf", selectedFile);
    const { data } = await axios.post("/api/upload", formData);
    localStorage.setItem("pdfLink", data.message);
  } catch (error: any) {
    console.log(error.response?.data);
  }
  
};

  const textHandleChange = (event: { target: { value: string } }) => {
    localStorage.setItem("ideaName", event.target.value);
    // console.log(localStorage.getItem('teamName'));
  };

  const slideLinkChange = (event: { target: { value: string } }) => {
    localStorage.setItem("slideLink", event.target.value);
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
                  placeholder="ลิงก์สไลด์"
                  onChange={slideLinkChange}
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
            onClick={handleUpload}
          >
            <p className="text-white text-[16px] font-bold z-20">ส่งคำตอบ</p>
          </button>
        </div>
      </OuterBox>
    </section>
  );
};

export default FileSent;
