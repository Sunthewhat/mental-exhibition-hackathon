"use client";

import Image from "next/image";
import logo from "../../assets/logo.png";
import styles from "../../pages/pdpa_page/page.module.css";
import OuterBox from "../outer_box";
import GButton from "../g_button";
import Link from "next/link";
import InnerBox from "../inner_box";
import { ReactNode } from "react";

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
            <Image priority src={logo} alt="logo" />
          </div>
          <h2 className=" ${header} ${fontColor.blue} md:text-[20px] lg:text-[24px] text-center text-[#5A81BC] font-bold">
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
        <div className="flex flex-col gap-6 text-[#34312F] text-[10px]">
          <h1 className={`${header} ${fontColor.blue}`}>
            Mental Health Hackathon Challenge
          </h1>
          <h2 className={`${paragraph}`}>
            การแข่งขันแฮกกาธอนสุดตื่นเต้น! ภายใต้โจทย์
            <span className={`${subHeader} ${fontColor.purple} ml-2`}>
              Innovation hackathon challenge
              “นวัตกรรมเพื่อความตระหนักรู้ด้านสุขภาพจิตในสังคม”
            </span>
          </h2>
          <h2>
            <a href="https://drive.google.com/file/d/1wZF60345p7VkJTyY2YcYvkrkoHWCvEhR/view" target="blank" className="flex flex-row items-center gap-2">
              <div>
                <Image
                  src="/icons/download.svg"
                  alt="icon"
                  width={24}
                  height={24}
                />
              </div>
              <p className="text-[10px] md:text-[14px] lg:text-[16px] text-[#8E7AAB] font-bold underline">ดาวน์โหลดเอกสารฉบับเต็มที่นี่</p>
            </a>
          </h2>
          <div className="text-sm flex flex-col gap-7 mb-10">
            <div className=" space-y-5 leading-5">
              <h1 className={`${header} ${fontColor.blue}`}>
                เงื่อนไขและคุณสมบัติของผู้ร่วมกิจกรรม 
              </h1>
              <ol className={`${paragraph} space-y-2`}>
                <li className={`leading-5`}>
                  1. สมาชิกในทีม 3-5 คน
                  โดย สมาชิกในทีมต้องศึกษาอยู่ในระดับชั้นมัธยมศึกษาตอนปลาย จนถึง
                  ระดับอุดมศึกษา{" "}
                  <i>
                    *กรณีที่สมาชิกภายในกลุ่มมีนักศึกษาจะนับเป็น ระดับอุดมศึกษา
                  </i>
                  <br />
                  <span className={`${subHeader} ${fontColor.purple}`}>
                    ระดับอุดมศึกษา
                  </span>{" "}
                  <br /> - สมาชิกอย่างน้อย 3
                  คนต้องศึกษาอยู่ในมหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี
                  <br />
                  <span className={`${subHeader} ${fontColor.purple}`}>
                   ระดับมัธยมศึกษาตอนปลาย/ปวช./ปวส.
                  </span>
                      <br /> -
                  สมาชิกทุกคนต้องอยู่ในระดับมัธยมศึกษาตอนปลาย/ปวช./ปวส.เท่านั้น 
                </li>
                <li>2. ไม่จำกัดสัญชาติ </li>
                <li>3. ผู้สมัครต้องมีรายชื่ออยู่เพียงทีมเดียวเท่านั้น </li>
                <li>
                  4. สามารถเข้าร่วมกิจกรรม Hackathon ในวันที่ 20 - 22 เมษายน
                  2567 ได้ (เฉพาะทีมที่เข้ารอบจะได้ Pitch ใน วันที่ 22 เมษายน)
                </li>
                <li>5. สามารถนำเสนอเป็นภาษาไทยหรือภาษาอังกฤษก็ได้</li>
              </ol>
            </div>
            <div className=" space-y-4 leading-5">
              <h1 className={`${header} ${fontColor.blue}`}>กำหนดการสำคัญ</h1>
              <ol className={`${paragraph} space-y-5 md:space-y-2`}>
                <li className="flex gap-1 items-center flex-wrap">
                  <Image
                    src="/icons/icon1.png"
                    alt="icon1"
                    width={24}
                    height={24}
                  />
                  <span className={`${subHeader} ${fontColor.purple}`}>
                    รับสมัคร:
                  </span>
                  <p>วันจันทร์ที่ 25 มีนาคม - 15 เมษายน 2567 เปิดรับสมัคร</p>
                </li>
                <li className="flex gap-1 items-center flex-wrap">
                  <Image
                    src="/icons/icon2.png"
                    alt="icon2"
                    width={24}
                    height={24}
                  />
                  <span className={`${subHeader} ${fontColor.purple}`}>
                    ประกาศทีมที่ผ่านการคัดเลือก จำนวน 40 ทีม:
                  </span>
                  <p>วันพุธที่ 17 เมษายน 2567</p>
                </li>
                <li className="flex gap-1 items-center flex-wrap">
                  <Image
                    src="/icons/icon3.png"
                    alt="icon3"
                    width={24}
                    height={24}
                  />
                  <span className={`${subHeader} ${fontColor.purple}`}>
                    เริ่มกิจกรรม Hackathon:
                  </span>
                  <p>วันเสาร์ที่ 20 เมษายน 2567 (On-site)</p>
                </li>
                <li className="flex gap-1 items-center flex-wrap">
                  <Image
                    src="/icons/icon5.png"
                    alt="icon4"
                    width={24}
                    height={24}
                  />
                  <span className={`${subHeader} ${fontColor.purple}`}>
                    Pitching รอบที่1 และ
                    ประกาศทีมที่ผ่านการคัดเลือกเข้าสู่รอบที่ 2 จำนวน 10 ทีม:
                  </span>
                  <p>วันอาทิตย์ที่ 21 เมษายน 2567 (On-site)</p>
                </li>
                <li className="flex gap-1 items-center flex-wrap">
                  <Image
                    src="/icons/icon4.png"
                    alt="icon5"
                    width={24}
                    height={24}
                  />
                  <span className={`${subHeader} ${fontColor.purple}`}>
                    Pitching รอบที่2 และ ประกาศผู้ชนะในการแข่งขัน:
                  </span>
                  <p>วันจันทร์ที่ 22 เมษายน 2567 (On-site) </p>
                </li>
              </ol>
            </div>
            <div className=" space-y-4 leading-5 text-[10px]">
              <h1 className={`${header} ${fontColor.blue}`}>รางวัล</h1>
              <ol className={`${paragraph} space-y-5 md:space-y-2`}>
                <li className="flex flex-row gap-1 items-start">
                  <Image
                    src="/icons/king.png"
                    alt="icon"
                    width={24}
                    height={24}
                  />
                  <div>
                    <span className={`${subHeader} ${fontColor.purple}`}>
                      รางวัลชนะเลิศอันดับที่ 1
                    </span>
                    <ul className="list-disc list-inside">
                      <li className="ml-4">
                        Google credit จาก Google คนละ 6,000 credit มูลค่ารวม
                        120,000 บาท
                      </li>
                      <li className="ml-4">เงินรางวัล 10,000 บาท</li>
                      <li className="ml-4">โล่รางวัลพร้อมเกียรติบัตร</li>
                    </ul>
                  </div>
                </li>
                <li className="flex gap-1 items-start">
                  <Image
                    src="/icons/king.png"
                    alt="icon"
                    width={24}
                    height={24}
                  />
                  <div>
                    <span className={`${subHeader} ${fontColor.purple}`}>
                      รางวัลชนะเลิศอันดับที่ 2
                    </span>
                    <ul className="list-disc list-inside">
                      <li className="ml-4">
                        Google credit จาก Google คนละ 6,000 credit มูลค่ารวม
                        120,000 บาท
                      </li>
                      <li className="ml-4">เงินรางวัล 8,000 บาท</li>
                      <li className="ml-4">โล่รางวัลพร้อมเกียรติบัตร</li>
                    </ul>
                  </div>
                </li>
                <li className="flex gap-1 items-start">
                  <Image
                    src="/icons/king.png"
                    alt="icon"
                    width={24}
                    height={24}
                  />
                  <div>
                    <span className={`${subHeader} ${fontColor.purple}`}>
                      รางวัลชนะเลิศอันดับที่ 3
                    </span>
                    <ul className="list-disc list-inside">
                      <li className="ml-4">
                        Google credit จาก Google คนละ 6,000 credit มูลค่ารวม
                        120,000 บาท
                      </li>
                      <li className="ml-4">เงินรางวัล 4,000 บาท</li>
                      <li className="ml-4">โล่รางวัลพร้อมเกียรติบัตร</li>
                    </ul>
                  </div>
                </li>
              </ol>
            </div>
            <div className=" space-y-4 leading-5 ">
              <h1 className={`${header} ${fontColor.blue}`}>
                ช่องทางการประกาศและสอบถามรายละเอียดเพิ่มเติม
              </h1>
              <ol className="space-y-4 md:space-y-2">
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
                  <a href="#" target="_blank" className="hover:text-blue-600">
                    modmood.kmutt.ac.th
                  </a>
                </li>
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
                  <a href="#" target="_blank" className="hover:text-blue-600">
                    hackmindgallery.kmutt
                  </a>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </InnerBox>
      <div className="flex flex-row justify-between items-end">
        <GButton
          title="ย้อนกลับ"
          command="/hackathon_form/pages/pdpa_page"
          type="TYPE1"
        />
        <GButton title="ถัดไป" command="/hackathon_form/pages/gradesel_page" />
      </div>
    </OuterBox>
  );
};

export default ExplainBox;