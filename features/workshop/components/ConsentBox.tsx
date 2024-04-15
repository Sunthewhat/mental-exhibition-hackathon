"use client";

import Image from "next/image";
import OuterBox from "@/features/hackathon/components/OuterBox";
import InnerBox from "@/features/hackathon/components/InnerBox";
import InViewAnimation from "../../shared/Animation/InViewAnimation";
import GButton from "../../hackathon/components/GButton";

interface Props {
  textStyle: {
    header: string;
    subHeader: string;
    paragraph: string;
  };
  title:string
  link:string
}

const ConsentBox = ({ textStyle: { header, subHeader, paragraph }, title, link }: Props) => {
  const fontColor = {
    blue: "text-[#5A81BC]",
    purple: "text-[#8E7AAB]",
    black: "text-[#34312F]",
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
            <br className="md:hidden" /> Workshop {title}
          </h2>
        </div>
        <div className="flex flex-col gap-6 text-[#34312F] text-[10px]">
          <InViewAnimation>
            <h2 className={`${header} ${fontColor.blue}`}>
            หนังสือยินยอมเพื่อขอใช้ประโยชน์ข้อมูลส่วนบุคคล
            </h2>
          </InViewAnimation>
          <InViewAnimation>
            <p className={`${paragraph}`}>
            Mental Health Exhibition & Hackathon 2024 <br/> มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี
            </p>
          </InViewAnimation>
          <InViewAnimation >
            <p className={`${paragraph}`}>&emsp;ทั้งนี้ ท่านมีสิทธิที่จะถอนความยินยอมหรือขอให้คณะดำเนินงาน ฯ ลบข้อมูลเมื่อใดก็ได้ตลอดระยะเวลาที่ข้อมูลส่วนบุคคลของท่านอยู่กับคณะดำเนินงาน ฯ  กรณีที่ท่านต้องการถอนความยินยอมกรุณาติดต่อ hackmindgallery.kmutt ในทุกช่องทาง </p>
          </InViewAnimation>
          <InViewAnimation >
            <ol className={`${paragraph} space-y-2`}>
            <span>&emsp;โดยข้อมูลของท่านและรูปภาพในวันกิจกรรมจะถูกนำไปใช้เพื่อวัตถุประสงค์ ดังนี้</span>
            <li>1. เพื่อประโยชน์ทางการศึกษา การวิเคราะห์ ประมวลผล จัดทำสถิติ</li>
            <li>2. เพื่อจัดทำสื่อโฆษณา การเผยแพร่การประชาสัมพันธ์ต่อสาธารณะ ผ่านช่องทางสื่ออิเล็กทรอนิกส์ สื่อออนไลน์ สื่อวิดีโอ สื่อสิ่งพิมพ์ต่าง ๆ เช่น เว็บไซต์ Social Media การติดประกาศ และช่องทางอื่น ๆ   </li>
            </ol>
          </InViewAnimation>
          <InViewAnimation >
            <p className={`${paragraph}`}>
            &emsp;คณะผู้ดำเนินงาน KMUTT Mental Health Exhibition & Hackathon 2024  เคารพข้อมูลส่วนบุคคลของท่าน โดยคณะดำเนินงาผู้เข้าถึงข้อมูลได้ถูกกำหนดการทำงานด้วยระเบียบและกฎเกณฑ์ที่ถูกกำหนดขึ้นเพื่อความปลอดภัยในข้อมูลของท่าน เพื่อให้ท่านมั่นใจได้ว่า ข้อมูลของท่านจะถูกใช้เท่าที่ได้รับการอนุญาต และตรงตามจุดประสงค์ 
            </p>
          </InViewAnimation>
          <InViewAnimation >
            <p className={`${paragraph} mt-2`}>&emsp;ด้วยจิตคารวะ Mental Health Exhibition & Hackathon 2024</p>
          </InViewAnimation>
        </div>
      </InnerBox>
      <div className="flex flex-row justify-end items-center">
        <GButton command={`/workshop/${link}/form`} title="ยอมรับและถัดไป" />          
      </div>
    </OuterBox>
  );
};

export default ConsentBox;
