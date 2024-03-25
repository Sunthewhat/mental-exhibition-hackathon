"use client";

import styles from "@/app/hackathon/page.module.css";
import OuterBox from "../OuterBox";
import InnerBox from "../InnerBox";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import Image from "next/image";

interface Props {
  num: string;
}

const HighTeamData: React.FC<Props> = ({ num }) => {
  const [fullname, setFullName] = useState("");
  const [nickname, setNickName] = useState("");
  const [university, setUniversity] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  var titleName;
  const router = useRouter();

  useEffect(() => {
    const storedFullName = localStorage.getItem("high_fullname_" + num);
    const storedNickName = localStorage.getItem("high_nickname_" + num);
    const storedUniversity = localStorage.getItem("high_university_" + num);
    const storedTel = localStorage.getItem("high_tel_" + num);
    const storedEmail = localStorage.getItem("high_email_" + num);

    if (storedFullName) setFullName(storedFullName);
    else setFullName("");
    if (storedNickName) setNickName(storedNickName);
    else setNickName("");
    if (storedUniversity) setUniversity(storedUniversity);
    else setUniversity("");
    if (storedTel) setTel(storedTel);
    else setTel("");
    if (storedEmail) setEmail(storedEmail);
    else setEmail("");
  }, [num]);

  const clickHandle = () => {
    if (validateForm() === false) return;

    localStorage.setItem("high_fullname_" + num, fullname);
    localStorage.setItem("high_nickname_" + num, nickname);
    localStorage.setItem("high_university_" + num, university);
    localStorage.setItem("high_tel_" + num, tel);
    localStorage.setItem("high_email_" + num, email);

    if (parseInt(num) == parseInt(localStorage.getItem("teamMembers") || "0")) {
      router.push("/hackathon/filesent");
    } else {
      let inputs = document.getElementsByTagName("input");
      for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
      }

      router.push(`/hackathon/highteam_data?num=${parseInt(num) + 1}`);
    }
  };

  const backClickHandle = () => {
    let inputs = document.getElementsByTagName("input");
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].value = "";
    }

    router.back();
  };

  const validateForm = () => {
    if (!fullname || !nickname || !university || !tel || !email) {
      setError(true);
      return false;
    }
    if (!tel.match("[0-9]{10}") || !/^\d+$/.test(tel)) {
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

  const handleChange = (event: { target: { id: string; value: string } }) => {
    if (event.target.id === "fullname") {
      setFullName(event.target.value);
    }
    if (event.target.id === "nickname") {
      setNickName(event.target.value);
    }
    if (event.target.id === "university") {
      setUniversity(event.target.value);
    }
    if (event.target.id === "tel") {
      setTel(event.target.value);
    }
    if (event.target.id === "email") {
      setEmail(event.target.value);
    }
  };

  if (num === "1") {
    titleName = (
      <h1 className="text-[#5A81BC] text-[18px] md:text-[24px] font-bold">
        ข้อมูลผู้เข้าแข่งขันคนที่ 1 (หัวหน้าทีม)
      </h1>
    );
  } else {
    titleName = (
      <h1 className="text-[#5A81BC] text-[18px] md:text-[24px] font-bold">
        ข้อมูลผู้เข้าแข่งขันคนที่ {num}
      </h1>
    );
  }

  return (
    <section className="lg:mx-[10%]">
      <OuterBox>
        <InnerBox>
          <div className="flex flex-col items-center">{titleName}</div>
          <div className="flex flex-col gap-5">
            <div>
              <h2 className=" font-medium text-[12px]">ชื่อ-นามสกุล</h2>
              <input
                value={fullname}
                id="fullname"
                type="text"
                className={`${styles.textBox} border-[#000] border-opacity-20 border bg-transparent bg-opacity-0 rounded-[4px] w-full p-4`}
                placeholder="ชื่อ-นามสกุล"
                onChange={handleChange}
              />
              {error && !fullname && (
                <p className="my-4 text-red-500 font-bold">
                  กรุณากรอกชื่อ-นามสกุล
                </p>
              )}
            </div>
            <div>
              <h2 className=" font-medium text-[12px]">ชื่อเล่น</h2>
              <input
                value={nickname}
                id="nickname"
                type="text"
                className={`${styles.textBox} border-[#000] border-opacity-20 border bg-transparent bg-opacity-0 rounded-[4px] w-full p-4`}
                placeholder="ชื่อเล่น"
                onChange={handleChange}
              />
              {error && !nickname && (
                <p className="my-4 text-red-500 font-bold">กรุณากรอกชื่อเล่น</p>
              )}
            </div>
            <div>
              <h2 className=" font-medium text-[12px]">สถานศึกษา</h2>
              <input
                value={university}
                id="university"
                type="text"
                className={`${styles.textBox} border-[#000] border-opacity-20 border bg-transparent bg-opacity-0 rounded-[4px] w-full p-4`}
                placeholder="สถาบันการศึกษา"
                onChange={handleChange}
              />
              {error && !university && (
                <p className="my-4 text-red-500 font-bold">
                  กรุณากรอกสถาบันการศึกษา
                </p>
              )}
            </div>
            <div>
              <h2 className=" font-medium text-[12px]">เบอร์ติดต่อ</h2>
              <input
                value={tel}
                id="tel"
                type="text"
                className={`${styles.textBox} border-[#000] border-opacity-20 border bg-transparent bg-opacity-0 rounded-[4px] w-full p-4`}
                placeholder="เบอร์ติดต่อ"
                onChange={handleChange}
              />
              {error && !tel && (
                <p className="my-4 text-red-500 font-bold">
                  กรุณากรอกเบอร์ติดต่อ
                </p>
              )}
              {error &&
                tel &&
                (!tel.match("[0-9]{10}") || !/^\d+$/.test(tel)) && (
                  <p className="my-4 text-red-500 font-bold">
                    กรุณากรอกเบอร์ติดต่อให้ถูกต้อง
                  </p>
                )}
            </div>
            <div>
              <h2 className=" font-medium text-[12px]">อีเมล</h2>
              <input
                value={email}
                id="email"
                type="text"
                className={`${styles.textBox} border-[#000] border-opacity-20 border bg-transparent bg-opacity-0 rounded-[4px] w-full p-4`}
                placeholder="อีเมล"
                onChange={handleChange}
              />
              {error && !email && (
                <p className="my-4 text-red-500 font-bold">กรุณากรอกอีเมล</p>
              )}
              {error && email && !/\S+@\S+\.\S+/.test(email) && (
                <p className="my-4 text-red-500 font-bold">
                  กรุณากรอกอีเมลให้ถูกต้อง
                </p>
              )}
            </div>
          </div>
        </InnerBox>
        <div className="flex flex-row justify-between items-end">
          <button
            className={`px-[40px] md:px-[60px] py-[15px] rounded-[16px] border-[#B9A5D6] border-[2px] z-20 flex flex-row items-center justify-center gap-3`}
            onClick={backClickHandle}
          >
            <Image alt="back" src="/assets/hackathon/back.svg" width={10} height={10} />
            <p className="text-[#B9A5D6] text-[16px] font-bold z-20">
              ย้อนกลับ
            </p>
          </button>
          <button
            className={`${styles.btn_gradient} px-[50px] md:px-[60px] py-[15px] rounded-[8px] z-20 flex flex-row items-center justify-center gap-3`}
            onClick={clickHandle}
          >
            <p className="text-white text-[16px] font-bold z-20">ถัดไป</p>
            <Image alt="next" src="/assets/hackathon/next.svg" width={10} height={10} />
          </button>
        </div>
      </OuterBox>
    </section>
  );
};

export default HighTeamData;
