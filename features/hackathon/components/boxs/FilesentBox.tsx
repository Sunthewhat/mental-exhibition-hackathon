"use client";

import styles from "@/app/hackathon/page.module.css";
import OuterBox from "../OuterBox";
import InnerBox from "../InnerBox";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";

const FileSent: React.FC = () => {
  const router = useRouter();

  const [error, setError] = useState(false);
  const [ideaName, setIdeaName] = useState("");
  const [slideLink, setSlideLink] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedName, setSelectedName] = useState("");

  useEffect(() => {
    const storedFullName = localStorage.getItem("ideaName");
    const storedNickName = localStorage.getItem("slideLink");

    if (storedFullName) setIdeaName(storedFullName);
    if (storedNickName) setSlideLink(storedNickName);
  }, []);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setSelectedFile(file || null);
    setSelectedName((prev) => (prev = file?.name || ""));
  };

  const handleReadyInformation = () => {
    const formData = new FormData();

    var edu = localStorage.getItem("educationLevel") || "";

    formData.append("educationLevel", edu);
    formData.append("teamName", localStorage.getItem("teamName") || "");
    formData.append("teamMembers", localStorage.getItem("teamMembers") || "");
    formData.append("ideaName", localStorage.getItem("ideaName") || "");
    formData.append("slideLink", localStorage.getItem("slideLink") || "");

    const members = [];
    if (edu == "university") {
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
    } else {
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
    formData.append("members", membersJSON);

    return formData;
  };

  const backClickHandle = () => {
    let inputs = document.getElementsByTagName("input");
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].value = "";
    }

    router.back();
  };

  const handleUpload = async () => {
    if (!validateForm()) return;
    try {
      if (!selectedFile) return;
      const formData = handleReadyInformation();
      formData.append("pdf", selectedFile);
      var res = await axios.post("/api/upload", formData);
      if (res.status === 200) {
        localStorage.removeItem("educationLevel");
        localStorage.removeItem("teamName");
        localStorage.removeItem("teamMembers");
        localStorage.removeItem("ideaName");
        localStorage.removeItem("slideLink");
        for (let i = 1; i <= 5; i++) {
          localStorage.removeItem(`uni_fullname_${i}`);
          localStorage.removeItem(`uni_nickname_${i}`);
          localStorage.removeItem(`uni_university_${i}`);
          localStorage.removeItem(`uni_studentcode_${i}`);
          localStorage.removeItem(`uni_tel_${i}`);
          localStorage.removeItem(`uni_email_${i}`);
          localStorage.removeItem(`high_fullname_${i}`);
          localStorage.removeItem(`high_nickname_${i}`);
          localStorage.removeItem(`high_university_${i}`);
          localStorage.removeItem(`high_tel_${i}`);
          localStorage.removeItem(`high_email_${i}`);
        }
      }
      router.push(`/hackathon/submit`);
    } catch (error: any) {
      console.log(error.response?.data);
    }
  };

  const validateForm = () => {
    if (!ideaName || !selectedFile) {
      setError(true);
      return false;
    }
    setError(false);
    return true;
  };

  const textHandleChange = (event: { target: { value: string } }) => {
    setIdeaName(event.target.value);
    localStorage.setItem("ideaName", event.target.value);
  };

  const slideLinkChange = (event: { target: { value: string } }) => {
    setSlideLink(event.target.value);
    localStorage.setItem("slideLink", event.target.value);
  };

  return (
    <section className="lg:mx-[10%]">
      <OuterBox>
        <InnerBox>
          <div className="flex flex-col items-center">
            <h1 className="text-[#5A81BC] text-[18px] md:text-[24px] font-bold">
              Proposal File
            </h1>
          </div>
          <div>
            <div className="text-[#34312F] text-[10px] md:text-[13px] font-medium">
              <p>แนบลิงก์นวัตกรรมหรือแนวคิดที่ใช้ในการแก้ไขปัญหา โดย</p>
              <ul className="list-style-none mb-5">
                <li>- ส่งเป็นไฟล์ Presentation (PDF) </li>
                <li>- จำนวนไม่เกิน 10 หน้า </li>
              </ul>
            </div>
            <div className="text-[#34312F] text-[10px] md:text-[13px] font-medium">
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
                <h2 className=" font-medium text-[15px] md:text-[20px]">
                  ชื่อไอเดีย
                </h2>
                <input
                  type="text"
                  className={`${styles.textBox} text-[16px] border-[#000] border-opacity-20 border bg-transparent bg-opacity-0 rounded-[4px] w-full p-4`}
                  placeholder="ชื่อไอเดีย"
                  onChange={textHandleChange}
                  value={ideaName}
                />
                {error && !ideaName && (
                  <p className="my-4 text-red-500 font-bold">
                    กรุณากรอกชื่อไอเดีย
                  </p>
                )}
              </div>
              <div>
                <h2 className=" font-medium text-[15px] md:text-[20px]">
                  แนบไฟล์ PDF
                </h2>
                <div
                  className={`${styles.file_upload} text-[16px] border-[#000] border-opacity-20 border bg-transparent bg-opacity-0 rounded-[4px] w-full p-4`}
                >
                  <h3 className=" text-[16px] absolute cursor-pointer">
                    {selectedName || "เพิ่มไฟล์"}
                  </h3>
                  <div className="flex flex-row justify-center items-center">
                    <input
                      type="file"
                      accept=".pdf"
                      onChange={handleFileChange}
                    />
                    <div>
                      <Image
                        src="/icons/Export.svg"
                        alt="icon"
                        width={24}
                        height={24}
                      />
                    </div>
                  </div>
                </div>
                {error && !selectedFile && (
                  <p className="my-4 text-red-500 font-bold">
                    กรุณาเลือกไฟล์ PDF
                  </p>
                )}
              </div>

              <div>
                <h2 className=" font-medium text-[15px] md:text-[20px]">
                  แนบลิงก์สไลด์ (Google, Drive, Onedrive และอื่น ๆ ) (Optional)
                </h2>
                <input
                  type="text"
                  className={`${styles.textBox} text-[16px] border-[#000] border-opacity-20 border bg-transparent bg-opacity-0 rounded-[4px] w-full p-4`}
                  placeholder="ลิงก์สไลด์"
                  onChange={slideLinkChange}
                  value={slideLink}
                />
              </div>
            </div>
          </div>
        </InnerBox>
        <div className="flex flex-row justify-between items-end">
          <button
            className={`px-[40px] md:px-[60px] py-[15px] rounded-[16px] border-[#B9A5D6] border-[2px] z-20`}
            onClick={backClickHandle}
          >
            <p className="text-[#B9A5D6] text-[16px] font-bold z-20">
              ย้อนกลับ
            </p>
          </button>
          <button
            className={`${styles.btn_gradient} px-[50px] md:px-[60px] py-[15px] rounded-[8px] z-20`}
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
