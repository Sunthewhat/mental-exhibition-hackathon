"use client";

import Image from "next/image";
import OuterBox from "@/features/hackathon/components/OuterBox";

import InnerBox from "@/features/hackathon/components/InnerBox";
import InViewAnimation from "../../../shared/Animation/InViewAnimation";
import ExhiButton from "../../ExhiButton";
import { ChevronRight } from "lucide-react";
interface Props {
  textStyle: {
    header: string;
    subHeader: string;
    paragraph: string;
  };
}

const ExplainBox = ({ textStyle: { header, subHeader, paragraph } }: Props) => {
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
            <br className="md:hidden" /> Color of Feelings Exhibition
          </h2>
        </div>
        <div className="flex flex-col gap-6 text-[#34312F] text-[10px]">
          <InViewAnimation>
            <h2 className={`${paragraph}`}>
              ให้นักวาดทุกคนสร้างสรรค์ผลงานภายใต้หัวข้อ
              <span className={`${subHeader} ${fontColor.black} ml-2 mr-2`}>
                “Color of Feelings”
              </span>
              โดยสื่อถึงความรู้สึกภายในจิตใจของตนเองในช่วงวัยใดก็ได้
              ไม่ว่าจะเป็นอารมณ์สุขหรือเศร้า ความรู้สึกทางด้านบวกหรือด้านลบ
            </h2>
          </InViewAnimation>
          <InViewAnimation>
            <h2 className={`${subHeader} ${fontColor.blue}`}>
              ระยะเวลาเปิดรับสมัครผลงาน
            </h2>
            <span className={`${paragraph}`}>6 - 15 เมษายน 2567</span>
          </InViewAnimation>
          <InViewAnimation>
            <h2 className={`${subHeader} ${fontColor.blue}`}>เงินรางวัล</h2>
            <span className={`${paragraph}`}>
              Popular Vote จำนวน 3 รางวัล รางวัลละ 1,000 บาท
            </span>
          </InViewAnimation>
          <div className="text-sm flex flex-col gap-7 mb-10">
            <div className=" space-y-5 leading-5">
              <InViewAnimation>
                <h1 className={`${header} ${fontColor.blue}`}>
                  เงื่อนไขและคุณสมบัติของผู้ส่งเข้าประกวด
                </h1>
              </InViewAnimation>
              <ol className={`${paragraph} space-y-2`}>
                <InViewAnimation>
                  <li>
                    1. ผู้เข้าร่วมต้องเป็นนักศึกษาที่กำลังศึกษาอยู่ที่
                    มจธ. โดยสามารถส่งผลงานได้คนละ 1 ผลงาน
                  </li>
                </InViewAnimation>
                <InViewAnimation>
                  <li>
                    2. ไม่จำกัดประเภทและเทคนิคของงาน รับทั้งงาน Digital Art,
                    Painting Art, งานปั้น, etc. 
                  </li>
                </InViewAnimation>
                <InViewAnimation>
                  <li>
                    3. ผลงานที่ส่งเข้าประกวดจะต้องเป็นงานที่สร้างสรรค์ด้วยตนเอง
                    ห้ามแอบอ้าง ดัดแปลง หรือคัดลอกจากผลงานของผู้อื่น 
                  </li>
                </InViewAnimation>
                <InViewAnimation>
                  <li>4. ห้ามใช้ AI ในการ generated รูป</li>
                </InViewAnimation>
                <InViewAnimation>
                  <li>
                    5. ผลงานต้องไม่มีเนื้อหารุนแรง เช่น Blood, Self – harm,
                    Suicide
                  </li>
                </InViewAnimation>
                <InViewAnimation>
                  <li>
                    6. ผลงานที่ส่งประกวดต้องไม่ลบหลู่สถาบันชาติ ศาสนา
                    พระมหากษัตริย์ และการเมืองการปกครอง
                  </li>
                </InViewAnimation>
                <InViewAnimation>
                  <li>7. ผลงานห้ามพาดพิงถึงบุคคลอื่น</li>
                </InViewAnimation>
                <InViewAnimation>
                  <li className="space-y-2">
                    8. ผลงาน หรือส่วนประกอบของผลงาน
                    ต้องไม่ละเมิดลิขสิทธิ์ตามกฎหมาย
                    <p className={`${paragraph} ${subHeader} lg:ml-4`}>
                      รายละเอียดของผลงาน
                    </p>
                    <ol className={`${paragraph} space-y-1 lg:ml-4`}>
                      <li>1. ขนาดของผลงาน : A3</li>
                      <li>2. ความละเอียด : 300 dpi ขึ้นไป</li>
                      <li>3. ระบบสี :  CYMK</li>
                      <li>
                        4. นามสกุลไฟล์ : pdf, psd, png (300 dpi ขึ้นไปเท่านั้น)
                      </li>
                      <li>
                        5. ทุกไฟล์ต้องเผื่อระยะตัดตก (bleed) และ margin อย่างละ
                        3 มม. สำหรับเนื้อหาสำคัญของภาพ
                      </li>
                    </ol>
                  </li>
                </InViewAnimation>
              </ol>
            </div>
            <div className=" space-y-4 leading-5 ">
              <InViewAnimation>
                <h1 className={`${header} ${fontColor.blue}`}>
                  ช่องทางการประกาศและสอบถามรายละเอียดเพิ่มเติม
                </h1>
              </InViewAnimation>
              <ol className="space-y-4 md:space-y-2">
                <InViewAnimation>
                  <li className="flex gap-1 items-center flex-wrap">
                    <Image
                      src="/icons/global.png"
                      alt="icon"
                      width={24}
                      height={24}
                    />
                    <span className="text-[#8E7AAB] text-[10px] font-semibold">
                      Website:
                    </span>
                    <a href="/" target="_blank" className="hover:text-blue-600">
                      www.hackmindgallery-kmutt.com
                    </a>
                  </li>
                </InViewAnimation>
                <InViewAnimation>
                  <li className="flex gap-1 items-center flex-wrap">
                    <Image
                      src="/icons/ig.png"
                      alt="icon"
                      width={24}
                      height={24}
                    />
                    <span className="text-[#8E7AAB] text-[10px] font-semibold">
                      Instagram:
                    </span>
                    <a
                      href="https://www.instagram.com/hackmindgallery.kmutt/"
                      target="_blank"
                      className="hover:text-blue-600"
                    >
                      hackmindgallery.kmutt
                    </a>
                  </li>
                </InViewAnimation>
              </ol>
            </div>
          </div>
        </div>
      </InnerBox>
      <div className="flex flex-row justify-end items-center">
        <ExhiButton href="/exhibition/example" type="PRIMARY">
          <div className="flex justify-center items-center">
            ยอมรับและถัดไป
            <ChevronRight />
          </div>
        </ExhiButton>
      </div>
    </OuterBox>
  );
};

export default ExplainBox;
