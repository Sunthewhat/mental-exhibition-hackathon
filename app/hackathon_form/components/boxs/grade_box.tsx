'use client';

import Image from "next/image";
import logo from "../../assets/logo.png";
import styles from '../../pages/pdpa_page/page.module.css';
import OuterBox from "../outer_box";
import GButton from "../g_button";
import InnerBox from "../inner_box";
import { useRouter } from "next/navigation";

const GradeBox: React.FC = () => {
  const router = useRouter()

  const handleChange = (event: { target: { value: string; }; }) => {
    localStorage.setItem('educationLevel', event.target.value);
    //console.log(localStorage.getItem('educationLevel'));
  }

  const clickHandle = () => {
    if (localStorage.getItem('educationLevel') === 'highSchool') {
      router.push('/hackathon_form/pages/highteam_page')
    } else if (localStorage.getItem('educationLevel') === 'university') {
      router.push('/hackathon_form/pages/uniteam_page')
    }
  }
  
  return (
    <OuterBox>
      <InnerBox>
      <div className="flex flex-col justify-center items-center gap-3 border-b border-[#B9A5D6] pb-6">
          <div className="">
            <Image priority src={logo} alt="logo" />
          </div>
          <h2 className=" text-center text-[#5A81BC] font-bold">
            แบบฟอร์มลงทะเบียน<br className="md:hidden" /> Mental Health Hackathon Challenge
          </h2>
          <p className=" text-center">
            Innovation hackathon challenge<br className="md:hidden" /> <span className=" text-[#5A81BC] font-bold">“นวัตกรรมเพื่อความตระหนักรู้ด้านสุขภาพจิตในสังคม”</span>
          </p>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-[#5A81BC] font-bold text-[24px] mb-5">โปรดเลือกระดับการศึกษา</h2>
          <div className="flex flex-col items-start gap-3">
            <div className="flex gap-3 justify-center items-center">
              <input type="radio" className={styles.radioButton} id="highSchool" name="educationLevel" value="university" onChange={handleChange} />
              <label htmlFor="highSchool">ระดับอุดมศึกษา</label>
            </div>
            <div className="flex gap-3 justify-center items-center">
              <input type="radio" className={styles.radioButton} id="university" name="educationLevel" value="highSchool" onChange={handleChange} />
              <label htmlFor="university">ระดับมัธยมศึกษาตอนปลาย</label>
            </div>
          </div>
        </div>
      </InnerBox>
      <div className="flex flex-row justify-between items-end">
        <GButton title="ย้อนกลับ" command="/hackathon_form/pages/explain_page" type='TYPE1' />
        <button className={`${styles.btn_gradient} px-[60px] py-[15px] rounded-[8px] z-20`} onClick={clickHandle}>
            <p className="text-white text-[16px] font-bold z-20">ถัดไป</p>
        </button>
      </div>
    </OuterBox>
  );
};

export default GradeBox;
