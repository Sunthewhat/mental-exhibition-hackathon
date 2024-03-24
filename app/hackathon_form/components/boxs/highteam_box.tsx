'use client';

import Image from "next/image";
import logo from "../../assets/logo.png";
import styles from '../../pages/pdpa_page/page.module.css';
import OuterBox from "../outer_box";
import GButton from "../g_button";
import Link from "next/link";
import InnerBox from "../inner_box";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from 'react';

const HighTeam: React.FC = () => {
  const [teamName, setTeamName] = useState('');
  const [teamMembers, setTeamMembers] = useState('');
  const [error, setError] = useState(false);

  const router = useRouter()

  useEffect(() => {
    const storedTeamName = localStorage.getItem('teamName');

    if (storedTeamName) setTeamName(storedTeamName);
  }, []);

  const clickHandle = () => {
    if (!validateForm()) return;
    
    if (teamMembers === '3') {
      for (let i = 4; i <= 5; i++) {
        localStorage.removeItem(`high_fullname_${i}`);
        localStorage.removeItem(`high_nickname_${i}`);
        localStorage.removeItem(`high_university_${i}`);
        localStorage.removeItem(`high_studentcode_${i}`);
        localStorage.removeItem(`high_tel_${i}`);
        localStorage.removeItem(`high_email_${i}`);
      }
    }else if (teamMembers === '4') {
      const i = 5;
      localStorage.removeItem(`high_fullname_${i}`);
      localStorage.removeItem(`high_nickname_${i}`);
      localStorage.removeItem(`high_university_${i}`);
      localStorage.removeItem(`high_studentcode_${i}`);
      localStorage.removeItem(`high_tel_${i}`);
      localStorage.removeItem(`high_email_${i}`);
    }

    localStorage.setItem('teamName', teamName);

    router.push('/hackathon_form/pages/highteam_data_page?num=1')
  }

  const handleChange = (event: { target: { value: string; }; }) => {
    setTeamMembers(event.target.value);
    localStorage.setItem('teamMembers', event.target.value);
  }

  const textHandleChange = (event: { target: { value: string; }; }) => {
    setTeamName(event.target.value);
    // console.log(localStorage.getItem('teamName'));
  }

  const validateForm = () => {
    if (!teamName || !teamMembers) {
      setError(true);
      return false;
    }
    setError(false);
    return true;
  }
  
  return (
    <section className="lg:mx-[10%]">
      <OuterBox>
        <InnerBox>
          <div className="flex flex-col items-center">
            <h1 className="text-[#5A81BC] text-[18px] md:text-[24px] font-bold">ระดับมัธยมศึกษาตอนปลาย/ปวช./ปวส.</h1>
          </div>
          <div>
            <ul className="list-style-none mb-5 text-[10px] md:text-[13px] font-medium text-[#34312F]">
              <li>- มีสมาชิกในทีม 3-5 คน</li>
              <li>- สมาชิกทุกคนต้องอยู่ในระดับมัธยมศึกษาตอนปลาย/ปวช./ปวส.เท่านั้น</li>
            </ul>
            <div>
              <h2 className=" font-medium text-[12px] md:text-[20px]">ชื่อทีม</h2>
              <input value={teamName} type="text" className={`${styles.textBox} rounded-[4px] w-full p-4 text-[12px] md:text-[16px]`} placeholder="ชื่อทีม" onChange={textHandleChange} />
              {error && !teamName && <p className="my-4 text-red-500 font-bold">กรุณากรอกชื่อทีม</p>}
            </div>
          </div>
          <div>
            <div className="flex flex-col items-start gap-3">
              <h2 className="text-[12px] md:text-[20px] font-medium">จำนวนสมาชิกในทีม</h2>
              <div className="flex gap-3 justify-center items-center">
                <input type="radio" className={styles.radioButton} id="3" name="teamMembers" value="3" onChange={handleChange} />
                <label className="text-[12px] md:text-[16px]" htmlFor="3">3</label>
              </div>
              <div className="flex gap-3 justify-center items-center">
                <input type="radio" className={styles.radioButton} id="4" name="teamMembers" value="4" onChange={handleChange} />
                <label className="text-[12px] md:text-[16px]" htmlFor="4">4</label>
              </div>
              <div className="flex gap-3 justify-center items-center">
                <input type="radio" className={styles.radioButton} id="5" name="teamMembers" value="5" onChange={handleChange} />
                <label className="text-[12px] md:text-[16px]" htmlFor="5">5</label>
              </div>
            </div>
            {error && !teamMembers && <p className="my-4 text-red-500 font-bold">กรุณาเลือกจำนวนสมาชิกทีม</p>}
          </div>
        </InnerBox>
        <div className="flex flex-row justify-between items-end">
          <GButton title="ย้อนกลับ" command="/hackathon_form/pages/gradesel_page" type='TYPE1' />
          <button className={`${styles.btn_gradient} px-[50px] md:px-[60px] py-[15px] rounded-[8px] z-20`} onClick={clickHandle}>
            <p className="text-white text-[16px] font-bold z-20">ถัดไป</p>
        </button>
        </div>
      </OuterBox>
    </section>
  );
};

export default HighTeam;