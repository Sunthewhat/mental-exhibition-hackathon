"use client";

import InViewAnimation from "@/features/shared/Animation/InViewAnimation";
import StaticBubbleBackground from "./StaticBubbleBackground";

export default function Information() {
  return (
    <div className="px-[30px]">
      <div className="relative max-w-[1060px] pt-6 pb-3 px-4 lg:px-36 shadow-md bg-white rounded-3xl">
        <StaticBubbleBackground />

        <div className="NotoSansThai text-sm  font-bold text-center text-[#5A81BC]">
          <InViewAnimation>
            <span>Innovation Hackathon Challenge</span>
          </InViewAnimation>
          <br />
          <InViewAnimation>
            <span className="text-xs sm:text-sm">
              &quot;นวัตกรรมเพื่อความตระหนักรู้ด้านสุขภาพจิตในสังคม&quot;
            </span>
          </InViewAnimation>
        </div>

        <InViewAnimation>
          <div className="NotoSansThai text-xs text-center text-[#5A81BC] py-4">
            เสนอไอเดียหรือนวัตกรรมที่มีการนำเทคโนโลยีมาช่วยแก้ปัญหาด้านสุขภาพจิต
            ให้คนในสังคมหรือนวัตกรรมเพื่อลดความเสี่ยงการเกิดปัญหาด้านสุขภาพจิตหรือนวัตกรรม
            เพื่อเพิ่มความตระหนักรู้ถึงปัญหาสุขภาพจิตในสังคมและสนับสนุนให้ผู้คน
            เผยแพร่ความรู้ความเข้าใจในด้านสุขภาพจิตให้กับผู้อื่นได้อย่างถูกต้องโดยสิ่งที่นำเสนอ
            จะต้องมีการนำข้อมูลทั้งด้านเทคโนโลยีและด้านสุขภาพจิตมารองรับ
            เพื่อยืนยันความเป็นไปได้ในการต่อยอดนวัตกรรมในอนาคต I
          </div>
        </InViewAnimation>
        <InViewAnimation>
          <div className="NotoSansThai text-sm font-bold text-center text-[#5A81BC]">
            เงื่อนไขและคุณสมบัติของผู้ร่วมกิจกรรม
          </div>
        </InViewAnimation>

        <div className="NotoSansThai text-xs text-left text-[#5A81BC] py-4 leading-6">
          <ol>
            <li>
              <InViewAnimation>
                <p>
                  1. มีสมาชิกในทีม 3-5 คน โดยแบ่งการตัดสินตามระดับการศึกษา
                  ดังนี้
                </p>
              </InViewAnimation>
              <ul>
                <InViewAnimation>
                  <li>&emsp;&emsp;ระดับอุดมศึกษา</li>
                </InViewAnimation>
                <ul>
                  <InViewAnimation>
                    <li>
                      &emsp;&emsp;&emsp;&emsp;- สมาชิกอย่างน้อย 3
                      คนต้องมาจากมหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี
                    </li>
                  </InViewAnimation>
                  <InViewAnimation>
                    <li>
                      &emsp;&emsp;&emsp;&emsp;-
                      สามารถร่วมทีมกับนักเรียนระดับมัธยมศึกษาตอนปลายได้
                    </li>
                  </InViewAnimation>
                </ul>

                <InViewAnimation>
                  <li>&emsp;&emsp;ระดับมัธยมศึกษาตอนปลาย</li>
                </InViewAnimation>
                <InViewAnimation>
                  <ul>
                    &emsp;&emsp;&emsp;&emsp;-
                    สมาชิกทุกคนต้องอยู่ในระดับมัธยมศึกษาตอนปลายเท่านั้น
                  </ul>
                </InViewAnimation>
              </ul>
            </li>
            <InViewAnimation>
              <li>2. ไม่จำกัดสัญชาติ</li>
            </InViewAnimation>

            <InViewAnimation>
              <li>3. ผู้สมัครต้องมีรายชื่ออยู่เพียงทีมเดียวเท่านั้น</li>
            </InViewAnimation>

            <InViewAnimation>
              <li>
                4. สามารถเข้าร่วมกิจกรรม Hackathon ในวันที่ 20 - 22 เมษายน 2567
                ได้ (เฉพาะทีมที่เข้ารอบจะได้ Pitch ใน วันที่ 22 เมษายน)
              </li>
            </InViewAnimation>

            <InViewAnimation>
              <li>5. สามารถนำเสนอเป็นภาษาไทยหรือภาษาอังกฤษก็ได้</li>
            </InViewAnimation>
          </ol>
        </div>
      </div>
    </div>
  );
}
