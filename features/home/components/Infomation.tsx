"use client";

import StaticBubbleBackground from "./StaticBubbleBackground";

export default function Information() {
  return (
    <div className="px-[30px]">
      <div className="relative max-w-[1060px] pt-6 pb-3 px-4 lg:px-36 shadow-md bg-white rounded-3xl">
        <StaticBubbleBackground />

        <div className="NotoSansThai text-sm  font-bold text-center text-[#5A81BC]">
          <span>Innovation Hackathon Challenge</span>
          <br />
          <span className="text-xs sm:text-sm">
            &quot;นวัตกรรมเพื่อความตระหนักรู้ด้านสุขภาพจิตในสังคม&quot;
          </span>
        </div>

        <div className="NotoSansThai text-xs text-center text-[#5A81BC] py-4">
          เสนอไอเดียหรือนวัตกรรมที่มีการนำเทคโนโลยีมาช่วยแก้ปัญหาด้านสุขภาพจิต
          ให้คนในสังคมหรือนวัตกรรมเพื่อลดความเสี่ยงการเกิดปัญหาด้านสุขภาพจิตหรือนวัตกรรม
          เพื่อเพิ่มความตระหนักรู้ถึงปัญหาสุขภาพจิตในสังคมและสนับสนุนให้ผู้คน
          เผยแพร่ความรู้ความเข้าใจในด้านสุขภาพจิตให้กับผู้อื่นได้อย่างถูกต้องโดยสิ่งที่นำเสนอ
          จะต้องมีการนำข้อมูลทั้งด้านเทคโนโลยีและด้านสุขภาพจิตมารองรับ
          เพื่อยืนยันความเป็นไปได้ในการต่อยอดนวัตกรรมในอนาคต I
        </div>
        <div className="NotoSansThai text-sm font-bold text-center text-[#5A81BC]">
          เงื่อนไขและคุณสมบัติของผู้ร่วมกิจกรรม
        </div>

        <div className="NotoSansThai text-xs text-left text-[#5A81BC] py-4 leading-6">
          <ol>
            <li>
              <p>
                1. มีสมาชิกในทีม 3-5 คน โดยแบ่งการตัดสินตามระดับการศึกษา ดังนี้
              </p>
              <ul>
                <li>&emsp;&emsp;ระดับอุดมศึกษา</li>
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

                <li>&emsp;&emsp;ระดับมัธยมศึกษาตอนปลาย/ปวช./ปวส.</li>
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
