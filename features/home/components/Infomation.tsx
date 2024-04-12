"use client";

import { useMediaQuery } from "react-responsive";
import StaticBubbleBackground from "./StaticBubbleBackground";
import { useEffect, useState } from "react";

interface TextSize {
  header: Number;
  para: Number;
}


export default function Information() {

  const isMobile = useMediaQuery({minWidth: 320, maxWidth: 680});
  const isTablet = useMediaQuery({minWidth: 680, maxWidth: 768});
  const [textSize, setTextSize] = useState<TextSize>({header: 14, para: 12});
  
  useEffect(() => {
    setTextSize(
      isMobile ? { header: 14, para: 12 }
        : isTablet ? { header: 20, para: 14 }
          : { header: 24, para: 16 }
    )
  }, [isMobile, isTablet]);
  
  return (
    <div className="px-[30px]">
      <div className="relative max-w-[1060px] pt-6 pb-3 px-4 lg:px-36 shadow-md bg-white rounded-3xl">
        <StaticBubbleBackground />

        <div className="NotoSansThai font-bold text-center text-[#5A81BC]">
          <span style={{fontSize: `${textSize.header}px`}}>Innovation Hackathon Challenge</span>
          <br />
          <span style={{fontSize: `${textSize.header}px`}}>
            &quot;นวัตกรรมเพื่อความตระหนักรู้ด้านสุขภาพจิตในสังคม&quot;
          </span>
        </div>

        <div className="NotoSansThai text-center text-[#5A81BC] py-4" style={{fontSize: `${textSize.para}px`}}>
          เสนอไอเดียหรือนวัตกรรมที่มีการนำเทคโนโลยีมาช่วยแก้ปัญหาด้านสุขภาพจิต
          ให้คนในสังคมหรือนวัตกรรมเพื่อลดความเสี่ยงการเกิดปัญหาด้านสุขภาพจิตหรือนวัตกรรม
          เพื่อเพิ่มความตระหนักรู้ถึงปัญหาสุขภาพจิตในสังคมและสนับสนุนให้ผู้คน
          เผยแพร่ความรู้ความเข้าใจในด้านสุขภาพจิตให้กับผู้อื่นได้อย่างถูกต้องโดยสิ่งที่นำเสนอ
          จะต้องมีการนำข้อมูลทั้งด้านเทคโนโลยีและด้านสุขภาพจิตมารองรับ
          เพื่อยืนยันความเป็นไปได้ในการต่อยอดนวัตกรรมในอนาคต
        </div>
        <div className="NotoSansThai font-bold text-center text-[#5A81BC]" style={{fontSize: `${textSize.header}px`}}>
          เงื่อนไขและคุณสมบัติของผู้ร่วมกิจกรรม
        </div>

        <div className="NotoSansThai text-left text-[#5A81BC] py-4 leading-6" style={{fontSize: `${textSize.para}px`}}>
          <ol>
            <li>
              <p>
              1. มีสมาชิกในทีม 3-5 คน โดย สมาชิกในทีมต้องศึกษาอยู่ในระดับชั้นมัธยมศึกษาตอนปลาย/ปวช./ปวส. จนถึง ระดับอุดมศึกษา
<br />*กรณีที่สมาชิกภายในกลุ่มมีนักศึกษาจะนับเป็น ระดับอุดมศึกษา
              </p>
              <ul>
                <li className='font-semibold'>&emsp;&emsp;ระดับอุดมศึกษา</li>
                <ul>
                  <li>
                    &emsp;&emsp;&emsp;&emsp;- สมาชิกอย่างน้อย 3
                    คนต้องมาจากมหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี
                  </li>
                  <li>
                    &emsp;&emsp;&emsp;&emsp;-
                    สามารถร่วมทีมกับนักเรียนระดับมัธยมศึกษาตอนปลายได้
                  </li>
                </ul>

                <li className='font-semibold'>&emsp;&emsp;ระดับมัธยมศึกษาตอนปลาย/ปวช./ปวส.</li>
                <ul>
                  &emsp;&emsp;&emsp;&emsp;- สมาชิกทุกคนต้องอยู่ในระดับมัธยมศึกษาตอนปลาย/ปวช./ปวส.เท่านั้น 
                </ul>
              </ul>
            </li>
            <li>2. ไม่จำกัดสัญชาติ</li>

            <li>3. ผู้สมัครต้องมีรายชื่ออยู่เพียงทีมเดียวเท่านั้น</li>

            <li>
              4. สามารถเข้าร่วมกิจกรรม Hackathon ในวันที่ 20 - 22 เมษายน 2567
              ได้ (เฉพาะทีมที่เข้ารอบจะได้ Pitch ใน วันที่ 22 เมษายน)
            </li>

            <li>5. สามารถนำเสนอเป็นภาษาไทยหรือภาษาอังกฤษก็ได้</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
