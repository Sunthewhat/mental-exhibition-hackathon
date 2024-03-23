'use client';

import Image from "next/image";
import logo from "../../assets/logo.png";
import styles from '../../pages/pdpa_page/page.module.css';
import OuterBox from "../outer_box";
import GButton from "../g_button";
import Link from "next/link";
import InnerBox from "../inner_box";
import { useRouter } from "next/navigation";

const HighTeam: React.FC = () => {
  const router = useRouter()

  const clickHandle = () => {
    router.push('/hackathon_form/pages/highteam_data_page?num=1')
  }

  const handleChange = (event: { target: { value: string; }; }) => {
    localStorage.setItem('teamMembers', event.target.value);
  }

  const textHandleChange = (event: { target: { value: string; }; }) => {
    localStorage.setItem('teamName', event.target.value);
    // console.log(localStorage.getItem('teamName'));
  }
  
  return (
    <section className="lg:mx-[10%]">
      <OuterBox>
        <InnerBox>
          <div className="flex flex-col items-center">
            <h1 className="text-[#5A81BC] text-[24px] font-bold">ระดับมัธยมศึกษาตอนปลาย/ปวช./ปวส.</h1>
          </div>
          <div>
            <ul className="list-style-none mb-5">
              <li>- มีสมาชิกในทีม 3-5 คน</li>
              <li>- สมาชิกทุกคนต้องอยู่ในระดับมัธยมศึกษาตอนปลาย/ปวช./ปวส.เท่านั้น</li>
            </ul>
            <div>
              <h2 className=" font-medium text-[12px]">ชื่อทีม</h2>
              <input type="text" className={`${styles.textBox} rounded-[4px] w-full p-4`} placeholder="ชื่อทีม" onChange={textHandleChange} />
            </div>
          </div>
          <div>
            <div className="flex flex-col items-start gap-3">
              <h2>จำนวนสมาชิกในทีม</h2>
              <div className="flex gap-3 justify-center items-center">
                <input type="radio" className={styles.radioButton} id="3" name="teamMembers" value="3" onChange={handleChange} />
                <label htmlFor="3">3</label>
              </div>
              <div className="flex gap-3 justify-center items-center">
                <input type="radio" className={styles.radioButton} id="4" name="teamMembers" value="4" onChange={handleChange} />
                <label htmlFor="4">4</label>
              </div>
              <div className="flex gap-3 justify-center items-center">
                <input type="radio" className={styles.radioButton} id="5" name="teamMembers" value="5" onChange={handleChange} />
                <label htmlFor="5">5</label>
              </div>
            </div>
          </div>
        </InnerBox>
        <div className="flex flex-row justify-between items-end">
          <GButton title="ย้อนกลับ" command="/hackathon_form/pages/gradesel_page" type='TYPE1' />
          <button className={`${styles.btn_gradient} px-[60px] py-[15px] rounded-[8px] z-20`} onClick={clickHandle}>
            <p className="text-white text-[16px] font-bold z-20">ถัดไป</p>
        </button>
        </div>
      </OuterBox>
    </section>
  );
};

export default HighTeam;
