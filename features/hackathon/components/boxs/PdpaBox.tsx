"use client";

import Image from "next/image";
import logo from "@/public/assets/hackathon/logo.png";
import OuterBox from "../OuterBox";
import GButton from "../GButton";
import InnerBox from "../InnerBox";

const PdpaBox: React.FC = () => {
  return (
    <OuterBox>
      <InnerBox>
        <div className="flex flex-col justify-center items-center gap-3 border-b border-[#B9A5D6] pb-6">
          <div className="">
            <Image priority src={logo} alt="logo" />
          </div>
          <h2 className=" text-[12px] md:text-[20px] lg:text-[24px] text-center text-[#5A81BC] font-bold">
            แบบฟอร์มลงทะเบียน
            <br className="md:hidden" /> Mental Health Hackathon Challenge
          </h2>
          <p className=" text-center text-[10px] md:text-[15px] lg:text-[16px]">
            Innovation hackathon challenge
            <br className="md:hidden" />{" "}
            <span className=" text-[#5A81BC] font-bold">
              “นวัตกรรมเพื่อความตระหนักรู้ด้านสุขภาพจิตในสังคม”
            </span>
          </p>
        </div>
        <div className="flex flex-col items-start justify-start text-left gap-3 text-[#3E3C3D] text-[16px]">
          <h2 className="text-[20px] font-bold text-[#5A81BC]">
            หนังสือยินยอมเพื่อขอใช้ประโยชน์
            <br className="md:hidden" />
            ข้อมูลส่วนบุคคล
          </h2>
          <p>คณะเทคโนโลยีสารสนเทศ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี</p>
          <p>
            ทั้งนี้ ท่านมีสิทธิที่จะถอนความยินยอมหรือขอให้คณะ ฯ
            ลบข้อมูลเมื่อใดก็ได้ตลอดระยะเวลาที่ข้อมูลส่วนบุคคลของท่านอยู่กับคณะ
            ฯ
            อย่างไรก็ตามการถอนความยินยอมของท่านอาจส่งผลกระทบต่อท่านจากการใช้บริการต่าง
            ๆ เช่น ท่านจะไม่ได้รับสิทธิประโยชน์ที่ทางคณะ ฯ ให้บริการอยู่
            หรือไม่ได้รับข้อมูลข่าวสารอันเป็นประโยชน์แก่ท่าน เป็นต้น
            ดังนั้นเพื่อประโยชน์ของท่านจึงควรศึกษาและสอบถามถึงผลกระทบ
            ก่อนเพิกถอนความยินยอมดังกล่าว
            กรณีที่ท่านต้องการถอนความยินยอมกรุณาติดต่อผ่านอีเมล
            info@sit.kmutt.ac.th
          </p>
          <ol className="list-decimal p-4">
            <li>
              เพื่อประโยชน์ทางการศึกษา การวิเคราะห์ ประมวลผล จัดทำสถิติ
              รวมไปถึงการจัดบริการต่าง ๆ เช่น การแนะแนว การสมัครงาน
              การพัฒนาทักษะด้านต่าง ๆ
            </li>
            <li>
              เพื่อจัดทำสื่อโฆษณา การเผยแพร่การประชาสัมพันธ์ต่อสาธารณะ
              ผ่านช่องทางสื่ออิเล็กทรอนิกส์ สื่อออนไลน์ สื่อวิดีโอ
              สื่อสิ่งพิมพ์ต่าง ๆ เช่น เว็บไซต์ Social Media การติดประกาศ
              และช่องทางอื่น ๆ
            </li>
            <li>
              เพื่อใช้ข้อมูลของท่านในการแจ้งข้อมูลข่าวสาร การเรียนการสอน
              บริการของคณะ ฯ และการโฆษณาประชาสัมพันธ์ เช่น
              การเปิดรับสมัครนักศึกษาใหม่ การอบรม หรือกิจกรรมที่เกี่ยวข้อง
            </li>
            <li>
              วัตถุประสงค์อื่น ๆ เพื่อประโยชน์ของคณะฯ และ/หรือมหาวิทยาลัย
              และ/หรือนักศึกษา
            </li>
          </ol>
          <p>
            คณะเทคโนโลยีสารสนเทศ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี
            ให้ความสำคัญด้านการเคารพสิทธิในความเป็นส่วนตัว
            และการรักษาความปลอดภัยของข้อมูลส่วนบุคคลของท่าน โดยคณะฯ
            ได้กำหนดนโยบาย ระเบียบ และหลักเกณฑ์ต่าง ๆ ในการดำเนินงาน ของคณะ ฯ
            เพื่อให้เป็นไปตามมาตรฐาน ในการรักษาความปลอดภัยของข้อมูลส่วนบุคคล
            เพื่อให้ท่านได้มั่นใจว่า ข้อมูลส่วนบุคคลของท่านที่คณะ ฯ
            ได้รับจะถูกนำไปใช้ ตรงตามความต้องการของท่าน และถูกต้องตามกฎหมาย
            โดยคณะ ฯ จะจัดเก็บข้อมูลส่วนบุคคลของท่านตลอดระยะเวลา ที่จำเป็น
            ในการดำเนินการตามวัตถุประสงค์ของคณะ ฯ รวมถึงงานต่าง ๆ ที่จำเป็น
            ทางคณะ ฯ เก็บ รวบรวมและใช้ข้อมูลส่วนบุคคลของท่าน รวมทั้งภาพถ่าย
            และวีดีโอ ที่เกิดจากการเข้าร่วมกิจกรรมของท่าน ซึ่งจัดโดยมหาวิทยาลัย
            คณะ ฯ และ/หรือนักศึกษา เพื่อวัตถุประสงค์ของคณะฯ
            ตลอดจนตามวัตถุประสงค์ดังต่อไปนี้{" "}
          </p>
        </div>
      </InnerBox>
      <div className="flex flex-row justify-between items-end">
        <GButton title="ย้อนกลับ" command="/" type="TYPE1" symbol={true} />
        <GButton title="ยอมรับและถัดไป" command="/hackathon/explain" />
      </div>
    </OuterBox>
  );
};

export default PdpaBox;
