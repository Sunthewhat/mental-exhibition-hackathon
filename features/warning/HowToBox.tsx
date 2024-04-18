import React from "react";
import Image from "next/image";
import ArticleBox from "./ArticleBox";

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

const HowToBox = ({
  textStyle: { header, subHeader, paragraph },
  fontColor: { blue, purple, black },
}: Props) => {
  return (
    <div>
      <div className="flex items-center flex-col gap-5 mt-16">
        <h1 className={`${header} ${blue}`}>
        How to มีสุขภาพจิตที่ดี
        </h1>
        <Image
          src="/assets/warning/how-to.png"
          alt="depression"
          width={1100}
          height={70}
          className="px-6 md:px-0"
        />
      </div>
      <div className="flex flex-col gap-12 px-8 md:px-20 mt-10 md:mt-16">
        <div className="space-y-5">
          <h2 className={`${header} ${blue}`}>สุขภาพจิตคืออะไร</h2>
          <p className={`${paragraph}`}>
          สุขภาพจิตประกอบไปด้วยสุขภาวะทางอารมณ์ ทางกาย และการอยู่ร่วมกันด้วยดี ซึ่งสิ่งเหล่านี้ส่งผลต่อวิธีคิด ความรู้สึก การกระทำ การตัดสินใจ และความสัมพันธ์กับผู้อื่น สุขภาพจิตเป็นสิ่งสำคัญที่สามารถส่งเสริมคุณภาพชีวิตที่ดีและทำให้ตนเองมีความสุขได้ ในปัจจุบันเราต้องเผชิญกับสถานการณ์หรือเหตุการณ์ต่างๆ ที่เป็นปัจจัยเสี่ยงที่อาจทำให้เสียสุขภาพจิตได้ 
          </p>
        </div>
        <div className="space-y-6">
          <h2 className={`${header} ${blue}`}>อาการของปัญหาสุขภาพจิต </h2>
          <div className="space-y-2">
          <h2 className={`${subHeader} ${blue}`}>อาการของปัญหาสุขภาพจิต </h2>
          <p className={`${paragraph}`}>
            &emsp;เมื่อเกิดความเครียดในจิตใจ ระบบประสาทในร่างกาย เช่น หัวใจ เส้นเลือด ปอด กระเพาะอาหาร ลำไส้ และกระเพาะปัสสาวะ จะถูกกระตุ้นให้ทำงานเพิ่มขึ้นโดยอัตโนมัติ
          </p>
          </div>
          <div className="space-y-2">
          <h2 className={`${subHeader} ${blue}`}>อาการทางอารมณ์ </h2>
          <p className={`${paragraph}`}>
            &emsp; ความเครียดสามารถส่งผลให้จิตใจรู้สึกวิตกกังวล เช่น รู้สึกกลัว ตื่นเต้น ไม่สบายใจ มีอาการซึมเศร้า ท้อแท้ เบื่อ หงุดหงิดง่าย ไม่สนุกสนาน ร่างกายไม่สดชื่นร่าเริง อาการไม่สบายใจเหล่านี้ส่งผลให้เกิดอาการอื่น ๆ ได้ เช่น เบื่ออาหาร ปัญหาการนอนหลับ ความเหนื่อยล้า และความเหนื่อยง่าย

          </p>
          </div>
          <div className="space-y-2">
          <h2 className={`${subHeader} ${blue}`}>อาการทางจิตใจ</h2>
          <p className={`${paragraph}`}>
            &emsp; สามารถเปลี่ยนแปลงตามอารมณ์ อาจจะมีความคิดที่ไม่ดี เช่น คิดทำร้ายตนเอง มีความกังวล คิดมาก คิดวนซ้ำ ๆ และไม่สามารถหยุดความคิดดังกล่าวได้ จนทำให้มองตนเองในแง่ที่ไม่ดี รวมไปถึงมองคนอื่นและมองโลกในแง่ร้าย หากความเครียดสะสมปริมาณมาก อาจทำให้สมองเบลอ ขาดสมาธิ ความคิดความอ่านและความจำลดลง ลังเลตัดสินใจช้า และไม่มั่นใจในตนเอง

          </p>
          </div>
        </div>
        <div className="space-y-6">
          <h2 className={`${header} ${blue}`}>โรคที่เสี่ยงจากการเกิดปัญหาสุขภาพจิต</h2>
          <p className={`${paragraph}`}>โรคซึมเศร้ามีหลายประเภท ทำให้ผู้ป่วยซึมเศร้าแต่ละคนมีพฤติกรรมที่แตกต่างกันออกไป เช่น</p>
          <div className="space-y-2">
          <h2 className={`${subHeader} ${blue}`}>โรคซึมเศร้า (Depression)</h2>
          <p className={`${paragraph}`}>
            &emsp;โรคที่มีอารมณ์เศร้าลงและขาดแรงในการทำกิจวัตรประจำวัน อาการอื่น ๆ ที่อาจเกิดขึ้นได้รวมถึงความหดหู่ สูญเสียความสนใจ และปัญหาในการนอนหรืออาหาร
          </p>
          </div>
          <div className="space-y-2">
          <h2 className={`${subHeader} ${blue}`}>โรคจิตเภท (Schizophrenia)</h2>
          <p className={`${paragraph}`}>
            &emsp; โรคที่มีอาการขาดสติ ความคิดผิดปกติ และการรับรู้เหตุการณ์ที่ผิดปกติ ผู้ป่วยอาจมีอาการทางการจิตอื่น ๆ เช่น การได้ยินเสียงหรือความคิดผิดปกติ

          </p>
          </div>
          <div className="space-y-2">
          <h2 className={`${subHeader} ${blue}`}>โรควิตกกังวล (Anxiety)</h2>
          <p className={`${paragraph}`}>
            &emsp;   โรคที่เกี่ยวข้องกับอารมณ์ของความกังวล ผู้ป่วยอาจมีอาการหวาดกลัว กลัวสิ่งต่าง ๆ หรือมีอารมณ์ตึงเครียดเป็นระยะเวลานาน

          </p>
          </div>
          <div className="space-y-2">
          <h2 className={`${subHeader} ${blue}`}>โรคจิตเวชเนื่องมาจากสารเสพติด (Substance Induced Mental Illness)</h2>
          <p className={`${paragraph}`}>
            &emsp;โรคที่เกิดขึ้นจากการใช้สารเสพติด เช่น ยาเสพติด แอลกอฮอล์ หรือสารต่าง ๆ ที่ส่งผลให้เกิดอาการทางจิตเวช

          </p>
          </div>
          <div className="space-y-2">
          <h2 className={`${subHeader} ${blue}`}>โรคอารมณ์แปรปรวนสองขั้ว (Bipolar Disorder)</h2>
          <p className={`${paragraph}`}>
            &emsp;   ผู้ป่วยเป็นโรคนี้มักมีอาการของอารมณ์แปรปรวนระหว่างอารมณ์บรรเทา และอารมณ์ตึงเครียด โดยผู้ป่วยอาจมีรู้สีกมีความมีความสุขในบางช่วง แล้วอยู่ดีๆ ก็มีอารมณ์เศร้าและเครียดขึ้นมา

          </p>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <h1 className={`${header} ${purple}`}>บทความอื่น ๆ ที่น่าสนใจ</h1>
          <div className="grid grid-cols-2 gap-4 mb-12">
          <ArticleBox
              article="stigma"
              title="How to มีสุขภาพจิตที่ดี"
              content="โรคซึมเศร้าเกิดจากความผิดปกติของสมองในส่วนที่มีผลกระทบต่อความคิด อารมณ์ ความรู้สึก พฤติกรรม รวมถึงสุขภาพทางกาย แต่คนส่วนใหญ่มักคิดว่าโรคซึมเศร้าเกิดจากความผิดหวัง"
            />
            <ArticleBox
              article="depression"
              title="9 ข้อสำรวจเข้าข่ายโรคซึมเศร้า"
              content="“ผู้ป่วยจิตเวชเป็นบุคคลอันตราย ชอบทำร้ายคนอื่น จึงไม่ควรเข้าใกล้” 
              การเหมารวมว่าผู้ป่วยจิตเวชทุกคนเป็นบุคคลอันตราย ซึ่งเห็นได้บ่อยครั้งผ่านการนำเสนอผ่านสื่อหรือการใช้คำพูดล้อเลียนผู้ป่วยจิตเวช เช่น คนบ้า คนไม่เต็มบาท คนไม่สมประกอบ และโรคจิต "
            />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToBox;
