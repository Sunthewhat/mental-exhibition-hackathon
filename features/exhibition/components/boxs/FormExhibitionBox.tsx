"use client";

import Image from "next/image";
import OuterBox from "@/features/hackathon/components/OuterBox";
import styles from "@/app/hackathon/page.module.css";
import InnerBox from "@/features/hackathon/components/InnerBox";
import GButton from "@/features/hackathon/components/GButton";
import InViewAnimation from "../../../shared/Animation/InViewAnimation";
import { useState,useEffect } from "react";
import { useRouter } from "next/navigation";
interface Props {
  textStyle: {
    header: string;
    subHeader: string;
    paragraph: string;
  };
}

const FormExhibitionBox = ({
  textStyle: { header, subHeader, paragraph },
}: Props) => {
  const fontColor = {
    blue: "text-[#5A81BC]",
    purple: "text-[#8E7AAB]",
    black: "text-[#34312F]",
  };

  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [studentId, setStudentId] = useState<string>("");
  const [faculty, setFaculty] = useState<string>(""); // คณะ
  const [department, setDepartment] = useState<string>(""); // ภาควิชา
  const [branch, setBranch] = useState<string>(""); // สาขา
  const [tel, setTel] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [explain, setExplain] = useState<string>("");
  const [technical, setTechnical] = useState<string>("");
  const [exhibitLink, setExhibitLink] = useState<string>(""); // ส่งผลงาน
  const [error, setError] = useState<boolean>(false);
  const [formData, setFormData] = useState(new FormData());

  const handleChange = (event: { target: { id: string; value: string } }) => {
    if (event.target.id === "firstname") {
      setFirstName(event.target.value);
    }
    if (event.target.id === "lastname") {
      setLastName(event.target.value);
    }
    if (event.target.id === "studentId") {
      setStudentId(event.target.value);
    }
    if (event.target.id === "faculty") {
      setFaculty(event.target.value);
    }
    if (event.target.id === "department") {
      setDepartment(event.target.value);
    }
    if (event.target.id === "branch") {
      setBranch(event.target.value);
    }
    if (event.target.id === "tel") {
      setTel(event.target.value);
    }
    if (event.target.id === "email") {
      setEmail(event.target.value);
    }
    if (event.target.id === "exhibit_link") {
      setExhibitLink(event.target.value);
    }
    if (event.target.id === "explain") {
      setExplain(event.target.value);
    }
    if (event.target.id === "technical") {
      setTechnical(event.target.value);
    }
  };

  const validateForm = () => {
    if (
      !firstName ||
      !lastName ||
      !studentId ||
      !faculty ||
      !department ||
      !branch ||
      !tel ||
      !email ||
      !exhibitLink
      || !explain
      || !technical
    ) {
      setError(true);
      return false;
    }
    if (!tel.match("[0-9]{10}") || !/^\d+$/.test(tel)) {
      setError(true);
      return false;
    }
    if (studentId.length !== 11) {
      setError(true);
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError(true);
      return false;
    }
    setError(false);
    return true;
  };
  const router = useRouter();

  const onSubmit = async () => {
    if (validateForm() === false) return;
    formData.set("firstName", firstName);
    formData.set("lastName", lastName);
    formData.set("studentId", studentId);
    formData.set("faculty", faculty);
    formData.set("department", department);
    formData.set("branch", branch);
    formData.set("tel", tel);
    formData.set("email", email);
    formData.set("exhibitLink", exhibitLink);
    formData.set("explain", explain);
    formData.set("technical", technical);
    
    try {
      const response = await fetch('/api/exhibition', {
        method: 'POST',
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error('Something went wrong during submission!');
      }
  
      const data = await response.json();
  
      if (data.Message === "Complete") {
        router.push("/exhibition/submit");
      } else {
        console.error("Submission failed:", data.error);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };


  return (
    <OuterBox>
      <InnerBox>
        <div className="flex flex-col justify-center items-center gap-3 border-b border-[#B9A5D6] pb-6">
          <div className="">
            <Image
              src="/assets/logo.svg"
              alt="logo"
              width={120}
              height={120}
              className="btn-hover"
            />
          </div>
          <h2
            className={`${header} ${fontColor.blue} md:text-[20px] lg:text-[24px] text-center text-[#5A81BC] font-bold`}
          >
            แบบฟอร์มลงทะเบียน
            <br className="md:hidden" /> Color of Feelings Exhibition
          </h2>
        </div>
        <InViewAnimation>
          <div className="flex flex-col gap-5">
            <div>
              <h2 className=" font-medium text-[14px]">ชื่อ</h2>
              <input
                value={firstName}
                id="firstname"
                type="text"
                className={`${styles.textBox} border-[#000] border-opacity-20 border bg-transparent bg-opacity-0 rounded-[4px] w-full p-4`}
                placeholder="ชื่อ"
                onChange={handleChange}
              />
              {error && !firstName && (
                <p className="my-4 text-red-500 font-bold">กรุณากรอกชื่อ</p>
              )}
            </div>
            <div>
              <h2 className=" font-medium text-[14px]">นามสกุล</h2>
              <input
                value={lastName}
                id="lastname"
                type="text"
                className={`${styles.textBox} border-[#000] border-opacity-20 border bg-transparent bg-opacity-0 rounded-[4px] w-full p-4`}
                placeholder="นามสกุล"
                onChange={handleChange}
              />
              {error && !lastName && (
                <p className="my-4 text-red-500 font-bold">กรุณากรอกนามสกุล</p>
              )}
            </div>
            <div>
              <h2 className=" font-medium text-[14px]">รหัสนักศึกษา</h2>
              <input
                value={studentId}
                id="studentId"
                type="text"
                className={`${styles.textBox} border-[#000] border-opacity-20 border bg-transparent bg-opacity-0 rounded-[4px] w-full p-4`}
                placeholder="รหัสนักศึกษา"
                onChange={handleChange}
              />
              {error && (!studentId || studentId.length !== 11) && (
                <p className="my-4 text-red-500 font-bold">กรุณากรอกรหัสนักศึกษา (11 หลัก)</p>
              )}
            </div>
            <div>
              <h2 className=" font-medium text-[14px]">คณะ</h2>
              <input
                value={faculty}
                id="faculty"
                type="text"
                className={`${styles.textBox} border-[#000] border-opacity-20 border bg-transparent bg-opacity-0 rounded-[4px] w-full p-4`}
                placeholder="คณะ"
                onChange={handleChange}
              />
              {error && !faculty && (
                <p className="my-4 text-red-500 font-bold">กรุณากรอกคณะ</p>
              )}
            </div>
            <div>
              <h2 className=" font-medium text-[14px]">ภาควิชา</h2>
              <input
                value={department}
                id="department"
                type="text"
                className={`${styles.textBox} border-[#000] border-opacity-20 border bg-transparent bg-opacity-0 rounded-[4px] w-full p-4`}
                placeholder="ภาควิชา"
                onChange={handleChange}
              />
              {error && !department && (
                <p className="my-4 text-red-500 font-bold">กรุณากรอกภาควิชา</p>
              )}
            </div>
            <div>
              <h2 className=" font-medium text-[14px]">สาขา</h2>
              <input
                value={branch}
                id="branch"
                type="text"
                className={`${styles.textBox} border-[#000] border-opacity-20 border bg-transparent bg-opacity-0 rounded-[4px] w-full p-4`}
                placeholder="สาขา"
                onChange={handleChange}
              />
              {error && !branch && (
                <p className="my-4 text-red-500 font-bold">กรุณากรอกสาขา</p>
              )}
            </div>
            <div>
              <h2 className=" font-medium text-[14px]">
                เบอร์โทรศัพท์ที่สามารถติดต่อได้
              </h2>
              <input
                value={tel}
                id="tel"
                type="text"
                className={`${styles.textBox} border-[#000] border-opacity-20 border bg-transparent bg-opacity-0 rounded-[4px] w-full p-4`}
                placeholder="เบอร์โทรศัพท์ที่สามารถติดต่อได้"
                onChange={handleChange}
              />
              {error && (!tel || !tel.match("[0-9]{10}") || !/^\d+$/.test(tel)) && (
                <p className="my-4 text-red-500 font-bold">กรุณากรอกเบอร์โทรศัพท์ที่สามารถติดต่อได้</p>
              )}
            </div>
            <div>
              <h2 className=" font-medium text-[14px]">Email</h2>
              <input
                value={email}
                id="email"
                type="text"
                className={`${styles.textBox} border-[#000] border-opacity-20 border bg-transparent bg-opacity-0 rounded-[4px] w-full p-4`}
                placeholder="Email"
                onChange={handleChange}
              />
              {error && (!email || !/\S+@\S+\.\S+/.test(email)) && (
                <p className="my-4 text-red-500 font-bold">กรุณากรอกอีเมล</p>
              )}
            </div>

            <div className="flex flex-col gap-6 text-[#34312F] text-[10px]">
              <InViewAnimation>
                <h2 className={`${subHeader}`}>Link ส่งผลงาน</h2>
                <p className={`${paragraph}`}>
                  นำไฟล์ผลงานอัพโหลดลงใน Google Drive
                  โดยเปลี่ยนสิทธิ์การเข้าถึงเป็นสาธารณะ
                  และแนบลิ้งค์มาในช่องด้านล่าง
                </p>
              </InViewAnimation>
              <InViewAnimation>
                <h2 className={`${subHeader}`}>รายละเอียดของผลงาน</h2>
                <ol className={`${paragraph} space-y-1`}>
                  <li>1. ขนาดของผลงาน : A3</li>
                  <li>2. ความละเอียด : 300 dpi ขึ้นไป</li>
                  <li>3. ระบบสี :  CYMK</li>
                  <li>
                    4. นามสกุลไฟล์ : pdf, psd, png(300 dpi ขึ้นไปเท่านั้น)
                  </li>
                  <li>
                    5. ทุกไฟล์ต้องเผื่อระยะตัดตก (bleed) และ margin อย่างละ 3
                    มม. สำหรับเนื้อหาสำคัญของภาพ
                  </li>
                </ol>
              </InViewAnimation>
            </div>
            <InViewAnimation>
            <div className="mt-3 lg:mt-6">
              <h2 className=" font-medium text-[14px]">คำอธิบายของผลงาน</h2>
              <input
                value={explain}
                id="explain"
                type="text"
                className={`${styles.textBox} border-[#000] border-opacity-20 border bg-transparent bg-opacity-0 rounded-[4px] w-full p-4`}
                placeholder="คำอธิบายของผลงาน"
                onChange={handleChange}
              />
              {error && !explain && (
                <p className="my-4 text-red-500 font-bold">กรุณากรอกคำอธิบายของผลงาน</p>
              )}
            </div>
            <div className="mt-3 lg:mt-6">
              <h2 className=" font-medium text-[14px]">เทคนิคที่ใช้</h2>
              <input
                value={technical}
                id="technical"
                type="text"
                className={`${styles.textBox} border-[#000] border-opacity-20 border bg-transparent bg-opacity-0 rounded-[4px] w-full p-4`}
                placeholder="เทคนิคที่ใช้"
                onChange={handleChange}
              />
              {error && !technical && (
                <p className="my-4 text-red-500 font-bold">กรุณาเทคนิคที่ใช้</p>
              )}
            </div>
              <div className="mt-3 lg:mt-6">
                <input
                  value={exhibitLink}
                  id="exhibit_link"
                  type="text"
                  className={`${styles.textBox} border-[#000] border-opacity-20 border bg-transparent bg-opacity-0 rounded-[4px] w-full p-4`}
                  placeholder="ส่งผลงาน"
                  onChange={handleChange}
                />
                {error && (!exhibitLink) && (
                  <p className="my-4 text-red-500 font-bold">
                    กรุณาใส่ลิงค์ส่งผลงาน
                  </p>
                )}
              </div>
            </InViewAnimation>
          </div>
        </InViewAnimation>
      </InnerBox>
        <div className="flex flex-row justify-between items-center">
          <GButton
            title="ย้อนกลับ"
            command="/exhibition/example"
            type="TYPE1"
            symbol={true}
          />
          <button
            className={`${styles.btn_gradient} px-[50px] md:px-[60px] py-[15px] rounded-[8px] z-20`}
            onClick={onSubmit}
            // disabled
          >
            <p className="text-white text-[16px] font-bold z-20">ส่งคำตอบ</p>
          </button>
        </div>
    </OuterBox>
  );
};

export default FormExhibitionBox;