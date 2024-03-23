'use client';

import Image from "next/image";
import logo from "../../assets/logo.png";
import styles from '../../pages/pdpa_page/page.module.css';
import OuterBox from "../outer_box";
import GButton from "../g_button";
import Link from "next/link";
import InnerBox from "../inner_box";
import { useRouter } from "next/navigation";

interface Props {
    num: string;
}

const UniTeamData: React.FC<{ num: string }> = ({ num }) => {

  var titleName;
  const router = useRouter()

  const clickHandle = () => {
    if (parseInt(num) == parseInt(localStorage.getItem('teamMembers') || '0')) {
        router.push('/hackathon_form/pages/filesent_page');
    }else {
      let inputs = document.getElementsByTagName('input');
      for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = '';
      }
      
      router.push(`/hackathon_form/pages/uniteam_data_page?num=${parseInt(num) + 1}`);
    }
  }

  const backClickHandle = () => {
    let inputs = document.getElementsByTagName('input');
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].value = '';
    }
    
    router.back();
  }

  const handleChange = (event: { target: { id: string, value: string; }; }) => {
    if (event.target.id === 'fullname') {
        localStorage.setItem('uni_fullname_'+num, event.target.value);
    }
    if (event.target.id === 'nickname') {
        localStorage.setItem('uni_nickname_'+num, event.target.value);
    }
    if (event.target.id === 'university') {
        localStorage.setItem('uni_university_'+num, event.target.value);
    }
    if (event.target.id === 'studentcode') {
        localStorage.setItem('uni_studentcode_'+num, event.target.value);
    }
    if (event.target.id === 'tel') {
        localStorage.setItem('uni_tel_'+num, event.target.value);
    }
    if (event.target.id === 'email') {
        localStorage.setItem('uni_email_'+num, event.target.value);
    }
  }

  if (num === '1') {
    titleName = <h1 className="text-[#5A81BC] text-[24px] font-bold">ข้อมูลผู้เข้าแข่งขันคนที่ 1 (หัวหน้าทีม)</h1>;
  }else{
    titleName = <h1 className="text-[#5A81BC] text-[24px] font-bold">ข้อมูลผู้เข้าแข่งขันคนที่ {num}</h1>;
  }
  
  return (
    <section className="lg:mx-[10%]">
      <OuterBox>
        <InnerBox>
          <div className="flex flex-col items-center">
            {titleName}
          </div>
          <div className="flex flex-col gap-5">
            <div>
              <h2 className=" font-medium text-[12px]">ชื่อ-นามสกุล</h2>
              <input id="fullname" type="text" className={`${styles.textBox} border-[#000] border-opacity-20 border bg-transparent bg-opacity-0 rounded-[4px] w-full p-4`} placeholder="ชื่อ-นามสกุล" onChange={handleChange} />
            </div>
            <div>
              <h2 className=" font-medium text-[12px]">ชื่อเล่น</h2>
              <input id="nickname" type="text" className={`${styles.textBox} border-[#000] border-opacity-20 border bg-transparent bg-opacity-0 rounded-[4px] w-full p-4`} placeholder="ชื่อเล่น" onChange={handleChange} />
            </div>
            <div>
              <h2 className=" font-medium text-[12px]">สถานศึกษา</h2>
              <input id="university" type="text" className={`${styles.textBox} border-[#000] border-opacity-20 border bg-transparent bg-opacity-0 rounded-[4px] w-full p-4`} placeholder="สถาบันการศึกษา" onChange={handleChange} />
            </div>
            <div>
              <h2 className=" font-medium text-[12px]">รหัสนักศึกษา</h2>
              <input id="studentcode" type="text" className={`${styles.textBox} border-[#000] border-opacity-20 border bg-transparent bg-opacity-0 rounded-[4px] w-full p-4`} placeholder="รหัสนักศึกษา" onChange={handleChange} />
            </div>
            <div>
              <h2 className=" font-medium text-[12px]">เบอร์ติดต่อ</h2>
              <input id="tel" type="text" className={`${styles.textBox} border-[#000] border-opacity-20 border bg-transparent bg-opacity-0 rounded-[4px] w-full p-4`} placeholder="เบอร์ติดต่อ" onChange={handleChange} />
            </div>
            <div>
              <h2 className=" font-medium text-[12px]">อีเมล</h2>
              <input id='email' type="text" className={`${styles.textBox} border-[#000] border-opacity-20 border bg-transparent bg-opacity-0 rounded-[4px] w-full p-4`} placeholder="อีเมล" onChange={handleChange} />
            </div>
          </div>
        </InnerBox>
        <div className="flex flex-row justify-between items-end">
          <button className={`px-[60px] py-[15px] rounded-[16px] border-[#B9A5D6] border-[2px] z-20`} onClick={backClickHandle}>
            <p className="text-[#B9A5D6] text-[16px] font-bold z-20">ย้อนกลับ</p>
          </button>
          <button className={`${styles.btn_gradient} px-[60px] py-[15px] rounded-[8px] z-20`} onClick={clickHandle}>
            <p className="text-white text-[16px] font-bold z-20">ถัดไป</p>
        </button>
        </div>
      </OuterBox>
    </section>
  );
};

export default UniTeamData;
