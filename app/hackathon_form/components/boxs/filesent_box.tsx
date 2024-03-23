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

const handleReadyInformation = () => {
  const formData = new FormData();

  var edu = localStorage.getItem("educationLevel") || ''

  formData.append('educationLevel', edu);
  formData.append('teamName', localStorage.getItem("teamName") || '');
  formData.append('teamMembers', localStorage.getItem("teamMembers") || '');
  formData.append('ideaName', localStorage.getItem("ideaName") || '');
  formData.append('slideLink', localStorage.getItem("slideLink") || '');
  
  const members = [];
  if (edu == 'university') {
    for (let i = 1; i <= 5; i++) {
      const fullname = localStorage.getItem(`uni_fullname_${i}`) || "";
      const nickname = localStorage.getItem(`uni_nickname_${i}`) || "";
      const university = localStorage.getItem(`uni_university_${i}`) || "";
      const studentcode = localStorage.getItem(`uni_studentcode_${i}`) || "";
      const tel = localStorage.getItem(`uni_tel_${i}`) || "";
      const email = localStorage.getItem(`uni_email_${i}`) || "";
    
      const member = {
        fullname,
        nickname,
        university,
        studentcode,
        tel,
        email,
      };
    
      members.push(member);
    }
  }else {
    for (let i = 1; i <= 5; i++) {
      const fullname = localStorage.getItem(`high_fullname_${i}`) || "";
      const nickname = localStorage.getItem(`high_nickname_${i}`) || "";
      const university = localStorage.getItem(`high_university_${i}`) || "";
      const studentcode = "";
      const tel = localStorage.getItem(`high_tel_${i}`) || "";
      const email = localStorage.getItem(`high_email_${i}`) || "";
    
      const member = {
        fullname,
        nickname,
        university,
        studentcode,
        tel,
        email,
      };
    
      members.push(member);
    }
  }
  
  // Convert the members array to JSON (assuming the server expects JSON format)
  const membersJSON = JSON.stringify(members);
  formData.append('members', membersJSON);

  return formData;
}

const handleUpload = async () => {
  
  try {
    if (!selectedFile) return;
    const formData = handleReadyInformation();
    formData.append("pdf", selectedFile);
    await axios.post("/api/upload", formData);
    router.push(`/hackathon_form/pages/summit_page`);
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
