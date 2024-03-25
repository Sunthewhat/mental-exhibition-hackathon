export interface SeasonType {
  id: number;
  name: string;
  description: string;
  imgUrl: string;
  downloadUrl: string;
  percent: number;
}

export const seasons: SeasonType[] = [
  {
    id: 1,
    name: "The Thankful Hydrangea",
    description:
      "คุณคือไฮเดรนเยียที่แสดงถึงเจตจำนงแห่งคำขอบคุณ ธรรมชาติของดอกไฮเดรนเยียจะเบ่งบานในช่วงเวลาหนึ่งของฤดู  และเบ่งบานสวยงามได้ดีที่สุดในช่วงฤดูหนาว แต่สามารถเติบโตได้อย่างดีตลอดปีในสถานที่ที่เหมาะสม นัยยะนึงคือดอกไม้ที่อดทน สามารถปรับตัวได้ตามสถานการณ์ เช่นเดียวกับคุณ ที่จะเป็นขึ้นได้อย่างดีในที่ที่เป็นของตัวเอง ขอบคุณไฮเดรนเยีย ขอบคุณคุณ ขอบคุณที่ดำรงอยู่อย่างสวยงามเสมอ",
    imgUrl: "/assets/game/hydrangea.png",
    downloadUrl: "/assets/game/downloads/hydrangae_download.png",
    percent: 25,
  },
  {
    id: 2,
    name: "Freshy Pink Rose",
    description:
      "กุหลาบสีชมพูบ่งบอกถึงความชื่นชม น่าจดจำ และเป็นตัวแทนแห่งความมั่นคง แม้โอนอ่อนจะกลับมายืดหยัดได้ ดอกไม้ชนิดนี้จะมอบให้กับคนสนิทหรือคนที่รักและชื่นชม เป็นตัวแทนแห่งความสุขของคนมากมาย เช่นเดียวกับคุณ ที่เป็นส่วนสำคัญในชีวิตของใครหลายคนเสมอ ในอีกความหมายคือการเติบโตภายใน ขอให้คุณยังคงเป็นกุหลาบที่เติบโตภายในและเป็นส่วนสำคัญ เป็นที่มั่นคงของคนที่รักเสมอไปนะ",
    imgUrl: "/assets/game/rose.png",
    downloadUrl: "/assets/game/downloads/rose_download.png",
    percent: 50,
  },
  {
    id: 3,
    name: "The Sunflower of the field",
    description:
      "คุณคือทานตะวันที่แสนสดใสเข้าหาแสงสว่าง เป็นพลังงานดีที่เเพร่ความสุขให้ผู้อื่นได้ดีเสมอมา เป็นสัญญะเเห่งความเชื่อมั่นและศาสตร์แห่งศิลป์ที่งดงาม ทานตะวันเป็นดอกไม้ที่ปลูกง่าย เฉิดฉายไปรอบบริเวณและยิ้มรับดวงอาทิตย์แห่งวันใหม่เสมอ เช่นเดียวกับคุณที่เติบโตมาอย่างดีเป็นพลังบวกในทุกเช้าวันใหม่ ขอบคุณที่เป็นทานตะวันที่สดใสเสมอมานะ",
    imgUrl: "/assets/game/sunflower.png",
    downloadUrl: "/assets/game/downloads/sunflower_download.png",
    percent: 75,
  },
  {
    id: 4,
    name: "The Spring Barberton daisy",
    description:
      "คุณคือเยอบิร่าดอกเล็กที่สดใสและมอบความสุขให้ผู้คนรอบกาย  ในภาษาดอกไม้คุณคือความสุขที่จะนำทางชีวิตตนและคนรอบข้างไปข้างหน้าอย่างมั่นคง เยอบิร่าจะหันหน้าเข้าหาเเสงอาทิตย์แม้จะมีอุปสรรค์มากมายเสมือนกับความสดใสอันเป็นนิจที่คุณจะมอบให้ผู้คนรอบข้างเสมอแม้จะมีสิ่งบดบัง และเยอบิร่าเป็นดอกไม้ที่ให้เพื่อแสดงถึงความซื่อสัตย์อีกด้วย ขอให้คุณเป็นเยอบิร่าที่มอบความสดใสให้กับโลกใบนี้ต่อไปนะ",
    imgUrl: "/assets/game/barberton.png",
    downloadUrl: "/assets/game/downloads/barberton_download.png",
    percent: 100,
  },
];
