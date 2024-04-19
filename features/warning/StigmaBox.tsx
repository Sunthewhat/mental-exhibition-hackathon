import React from "react";
import Image from "next/image";
import ArticleBox from "./ArticleBox";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

interface Props {
  textStyle: {
    header: string;
    subHeader: string;
    paragraph: string;
  };
  fontColor: {
    blue: string;
    purple: string;
    black: string;
  };
}

const StigmaBox = ({
  textStyle: { header, subHeader, paragraph },
  fontColor: { blue, purple, black },
}: Props) => {
  return (
    <div>
      <div className="flex items-center flex-col gap-5 mt-16">
        <h1 className={`${header} ${blue}`}>
          การตีตราทางสังคมต่อผู้ป่วยจิตเวช
        </h1>
        <Image
          src="/assets/warning/stigma.png"
          alt="depression"
          width={1100}
          height={70}
          className="px-6 md:px-0"
        />
      </div>
      <div className="flex flex-col gap-12 px-8 md:px-20 mt-10 md:mt-16">
        <p>กรมสุขภาพจิตได้ให้ความหมายของ “สุขภาพจิต” ไว้ว่า</p>
        <div className="space-y-5">
          <h2 className={`${header} ${blue}`}>สุขภาพจิต (Mental Health)</h2>
          <p className={`${paragraph}`}>
            หมายถึง ภาวะจิตใจที่เป็นสุข สามารถปรับตัวแก้ปัญหา สร้างสรรค์ทำงานได้
            มีความรู้ สึกที่ดีต่อตนเองและผู้อื่น มีความมั่นคงทางจิตใจ
            มีวุฒิภาวะทางอารมณ์ อยู่ในสังคม และสิ่งแวดล้อมที่เปลี่ยนแปลงได้
          </p>
        </div>
        <div className="space-y-5">
          <h2 className={`${header} ${blue}`}>การตีตราทางสังคม (Stigma)</h2>
          <p className={`${paragraph}`}>
            เป็นความรู้สึกในทางลบที่เกิดจากอคติของคนในสังคมที่มีต่อผู้ป่วยจิตเวช
            ถือเป็นการลดคุณค่าและศักดิ์ศรีความเป็นมนุษย์
            ส่งผลให้ผู้ป่วยเกิดความรู้สึกตำหนิผิดตนเอง
            นำมาซึ่งความต้องการในการปิดบังเกี่ยวกับความเจ็บป่วยทางจิตเวชและหลีกเลี่ยงการเข้ารับการรักษาจากผู้เชี่ยวชาญ
            (Mak & Cheung, 2553)
          </p>
        </div>
        <div className="space-y-5">
          <h2 className={`${header} ${blue}`}>
            ตัวอย่างการตีตราทางสังคมต่อผู้ป่วยจิตเวช
          </h2>
          <p className={`${paragraph}`}>
            <span className="font-bold">“ผู้ป่วยจิตเวชเป็นบุคคลอันตราย ชอบทำร้ายคนอื่น จึงไม่ควรเข้าใกล้” </span>
            การเหมารวมว่าผู้ป่วยจิตเวชทุกคนเป็นบุคคลอันตราย
            ซึ่งเห็นได้บ่อยครั้งผ่านการนำเสนอผ่านสื่อหรือการใช้คำพูดล้อเลียนผู้ป่วยจิตเวช
            เช่น คนบ้า คนไม่เต็มบาท คนไม่สมประกอบ และโรคจิต
            เป็นตัวอย่างของการตีตราทางสังคมต่อผู้ป่วยจิตเวชที่ก่อให้เกิดภาพจำที่ตอกย้ำว่าการมีปัญหาทางสุขภาพจิตเป็นตราบาป
            ในความเป็นจริง
            ผู้ป่วยจิตเวชโดยส่วนมากมีแนวโน้มทำร้ายตัวเองมากกว่าทำร้ายผู้อื่น
            (WHO, 2565)
          </p>
          <p className={`${paragraph}`}>ดังนั้น การไม่ตีตราผู้ป่วยทางจิตเวช จึงเป็นหนึ่งปัจจัยสำคัญที่ทุกภาคส่วนสามารถให้ความร่วมมือได้ เพื่อหยุดการผลิตซ้ำของอคติที่ไม่สัมพันธ์กับความเป็นจริงของผู้ป่วยจิตเวชและเสริมสร้างสังคมที่เคารพศักดิ์ศรีความเป็นมนุษย์และเปิดรับทุกความหลากหลายของบุคคล
</p>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className={`${header} ${purple}`}>บทความอื่น ๆ ที่น่าสนใจ</h1>
          <div className="grid grid-cols-2 gap-4 mb-12">
            <ArticleBox
              article="depression"
              title="9 ข้อสำรวจเข้าข่ายโรคซึมเศร้า"
              content="โรคซึมเศร้าเกิดจากความผิดปกติของสมองในส่วนที่มีผลกระทบต่อความคิด อารมณ์ ความรู้สึก พฤติกรรม รวมถึงสุขภาพทางกาย แต่คนส่วนใหญ่มักคิดว่าโรคซึมเศร้าเกิดจากความผิดหวัง"
            />
            <ArticleBox
              article="how-to"
              title="How to มีสุขภาพจิตที่ดี"
              content="สุขภาพจิตประกอบไปด้วยสุขภาวะทางอารมณ์ ทางกาย และการอยู่ร่วมกันด้วยดี ซึ่งสิ่งเหล่านี้ส่งผลต่อวิธีคิด ความรู้สึก การกระทำ การตัดสินใจ และความสัมพันธ์กับผู้อื่น "
            />
          </div>
        </div>
        <Link href='/' className={`${blue} font-bold flex items-center gap-2 mb-8`}>
          <ChevronLeft />
          <span>ย้อนกลับ</span>
        </Link>
      </div>
    </div>
  );
};

export default StigmaBox;
