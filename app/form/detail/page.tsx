import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const DetailPage = () => {
  return (
    <section className=" space-y-6">
      <div className="bg-white/70 max-w-[1200px] px-7 space-y-6 rounded">
        <div className="w-full flex flex-col items-center gap-2">
          <div className="mt-8">
            <Image src="/logo.png" alt="logo" width={120} height={120} />
          </div>
          <div className="space-y-4 text-center">
            <h1 className="text-xl font-bold text-[#5a81bc]">
              แบบฟอร์มลงทะเบียน Mental Health Hackathon Challenge
            </h1>
            <p>
              Innovation hackathon challenge
              <span className="ml-2 font-semibold text-[#5a81bc]">
                “นวัตกรรมเพื่อความตระหนักรู้ด้านสุขภาพจิตในสังคม”
              </span>
            </p>
          </div>
        </div>
        <hr className="p-[1px] bg-[#b9a5d6] w-full" />

        <div className="flex flex-col gap-6">
          <h1 className="text-xl font-bold text-[#5a81bc]">
            Mental Health Hackathon Challenge
          </h1>
          <h2 className="text-sm">
            การแข่งขันแฮกกาธอนสุดตื่นเต้น! ภายใต้โจทย์
            <span className="ml-2 text-[18px] font-semibold text-[#b9a5d6]">
              Innovation hackathon challenge
              “นวัตกรรมเพื่อความตระหนักรู้ด้านสุขภาพจิตในสังคม”
            </span>
          </h2>
          <div className="text-sm flex flex-col gap-7 mb-10">
            <div className=" space-y-5 leading-5">
              <h1 className="text-xl font-bold text-[#5a81bc]">
                เงื่อนไขและคุณสมบัติของผู้ร่วมกิจกรรม 
              </h1>
              <ol className="space-y-2">
                <li className=" leading-5">
                  1. สมาชิกในทีม 3-5 คน
                  โดย สมาชิกในทีมต้องศึกษาอยู่ในระดับชั้นมัธยมศึกษาตอนปลาย จนถึง
                  ระดับอุดมศึกษา{" "}
                  <i>
                    *กรณีที่สมาชิกภายในกลุ่มมีนักศึกษาจะนับเป็น ระดับอุดมศึกษา
                  </i><br />
                  <span className="text-[#b9a5d6] font-semibold">
                    ระดับอุดมศึกษา
                  </span>{" "}
                  <br /> - สมาชิกอย่างน้อย 3
                  คนต้องศึกษาอยู่ในมหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี
                  <br />
                  <span className="text-[#b9a5d6] font-semibold">
                    ระดับมัธยมศึกษาตอนปลาย
                  </span>
                      <br /> -
                  สมาชิกทุกคนต้องอยู่ในระดับมัธยมศึกษาตอนปลายเท่านั้น 
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
              <h1 className="text-xl font-bold text-[#5a81bc]">
                กำหนดการสำคัญ
              </h1>
              <ol className="space-y-5 md:space-y-2">
                
              <li className="flex gap-1 items-center flex-wrap">
                  <Image
                    src="/icons/icon1.png"
                    alt="icon1"
                    width={24}
                    height={24}
                  />
                  <span className="text-[#8E7AAB] font-semibold">
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
                  <span className="text-[#8E7AAB] font-semibold">
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
                  <span className="text-[#8E7AAB] font-semibold">
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
                  <span className="text-[#8E7AAB] font-semibold">
                  Pitching รอบที่1 และ ประกาศทีมที่ผ่านการคัดเลือกเข้าสู่รอบที่ 2 จำนวน 10 ทีม:
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
                  <span className="text-[#8E7AAB] font-semibold">
                  Pitching รอบที่2 และ ประกาศผู้ชนะในการแข่งขัน:
                  </span>
                  <p>วันจันทร์ที่ 22 เมษายน 2567 (On-site) </p>
                </li>
              </ol>
            </div>
            <div className=" space-y-4 leading-5">
              <h1 className="text-xl font-bold text-[#5a81bc]">
              รางวัล
              </h1>
              <ol className="space-y-4 md:space-y-2">
                
              <li className="flex gap-1 items-center flex-wrap">
                  <Image
                    src="/icons/king.png"
                    alt="icon"
                    width={24}
                    height={24}
                  />
                  <span className="text-[#8E7AAB] font-semibold">
                  รางวัลชนะเลิศอันดับที่ 1
                  </span>
                  <p>โล่รางวัลพร้อมเงินรางวัล 10,000 บาท</p>
                </li>
                <li className="flex gap-1 items-center flex-wrap">
                  <Image
                    src="/icons/king.png"
                    alt="icon"
                    width={24}
                    height={24}
                  />
                  <span className="text-[#8E7AAB] font-semibold">
                  รางวัลชนะเลิศอันดับที่ 2
                  </span>
                  <p>โล่รางวัลพร้อมเงินรางวัล 8,000 บาท</p>
                </li>
                <li className="flex gap-1 items-center flex-wrap">
                  <Image
                    src="/icons/king.png"
                    alt="icon"
                    width={24}
                    height={24}
                  />
                  <span className="text-[#8E7AAB] font-semibold">
                  รางวัลชนะเลิศอันดับที่ 3
                  </span>
                  <p>โล่รางวัลพร้อมเงินรางวัล 5,000 บาท</p>
                </li>
              </ol>
            </div>
            <div className=" space-y-4 leading-5 ">
              <h1 className="text-xl font-bold text-[#5a81bc]">
              รางวัล
              </h1>
              <ol className="space-y-4 md:space-y-2">
                
              <li className="flex gap-1 items-center flex-wrap">
                  <Image
                    src="/icons/global.png"
                    alt="icon"
                    width={24}
                    height={24}
                  />
                  <span className="text-[#8E7AAB] font-semibold">
                  Website:
                  </span>
                  <a href="#" target="_blank" className="hover:text-blue-600">modmood.kmutt.ac.th</a>
                </li>
                <li className="flex gap-1 items-center flex-wrap">
                  <Image
                    src="/icons/ig.png"
                    alt="icon"
                    width={24}
                    height={24}
                  />
                  <span className="text-[#8E7AAB] font-semibold">
                  Instagram:
                  </span>
                  <a href="#" target="_blank" className="hover:text-blue-600">hackmindgallery.kmutt</a>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between w-full">
      <Link href='/form/pdpa'>
        <Button className="text-lg lg:px-8">&lt; ย้อนกลับ</Button>
      </Link>
      <Link href='/form/choose-education-level'>
      <Button className="text-lg lg:px-10">ถัดไป &gt;</Button>
      </Link>        
      </div>
    </section>
  );
};

export default DetailPage;
