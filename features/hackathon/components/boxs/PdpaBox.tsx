"use client";

import Image from "next/image";
import logo from "@/public/assets/logo.svg";
import OuterBox from "../OuterBox";
import GButton from "../GButton";
import InnerBox from "../InnerBox";
import InViewAnimation from "../../../shared/Animation/InViewAnimation";

const PdpaBox: React.FC = () => {
  return (
    <OuterBox>
      <InnerBox>
        <div className="flex flex-col justify-center items-center gap-3 border-b border-[#B9A5D6] pb-6">
          <div className="">
            <Image priority src={logo} width={220} height={220} alt="logo" />
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
          <InViewAnimation>
            <h2 className="text-[20px] font-bold text-[#5A81BC]">
              หนังสือยินยอมเพื่อขอใช้ประโยชน์
              <br className="md:hidden" />
              ข้อมูลส่วนบุคคล
            </h2>
          </InViewAnimation>

          <InViewAnimation>
            <p>Mental Health Exhibition & Hackathon 2024  มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี</p>
            <br />
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;ทั้งนี้ ท่านมีสิทธิที่จะถอนความยินยอมหรือขอให้คณะดำเนินงาน ฯ ลบข้อมูลเมื่อใดก็ได้ตลอดระยะเวลาที่ข้อมูลส่วนบุคคลของท่านอยู่กับคณะดำเนินงาน ฯ  กรณีที่ท่านต้องการถอนความยินยอมกรุณาติดต่อ hackmindgallery.kmutt ในทุกช่องทาง
            </p>
          </InViewAnimation>

          <InViewAnimation>
            <p className='ml-4'>โดยข้อมูลของท่านและรูปภาพในวันกิจกรรมจะถูกนำไปใช้เพื่อวัตถุประสงค์ ดังนี้</p>
          </InViewAnimation>
          <ol className="list-decimal p-4 mt-[-2%]">
            <InViewAnimation>
              <li>
                เพื่อประโยชน์ทางการศึกษา การวิเคราะห์ ประมวลผล จัดทำสถิติ
              </li>
            </InViewAnimation>
            <InViewAnimation>
              <li>
              เพื่อจัดทำสื่อโฆษณา การเผยแพร่การประชาสัมพันธ์ต่อสาธารณะ ผ่านช่องทางสื่ออิเล็กทรอนิกส์ สื่อออนไลน์ สื่อวิดีโอ สื่อสิ่งพิมพ์ต่าง ๆ เช่น เว็บไซต์ Social Media การติดประกาศ และช่องทางอื่น ๆ
              </li>
            </InViewAnimation>
          </ol>
          <InViewAnimation>
            <p>
            &nbsp;&nbsp;&nbsp;&nbsp;คณะผู้ดำเนินงาน KMUTT Mental Health Exhibition & Hackathon 2024  เคารพข้อมูลส่วนบุคคลของท่าน โดยคณะดำเนินงาผู้เข้าถึงข้อมูลได้ถูกกำหนดการทำงานด้วยระเบียบและกฎเกณฑ์ที่ถูกกำหนดขึ้นเพื่อความปลอดภัยในข้อมูลของท่าน เพื่อให้ท่านมั่นใจได้ว่า ข้อมูลของท่านจะถูกใช้เท่าที่ได้รับการอนุญาต และตรงตามจุดประสงค์ 
            </p>
          </InViewAnimation>
          <InViewAnimation>
            <p>
            &nbsp;&nbsp;&nbsp;&nbsp;ด้วยจิตคารวะ Mental Health Exhibition & Hackathon 2024
            </p>
          </InViewAnimation>
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
