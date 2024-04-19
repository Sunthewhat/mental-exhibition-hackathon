export interface ArticleProps {
  id: string;
  title: string;
  desc: string;
  imgUrl: string;
}

const articles: ArticleProps[] = [
  {
    id: "9-major",
    title: "9 ข้อสำรวจเข้าข่ายโรคซึมเศร้า",
    desc: "โรคซึมเศร้าเกิดจากความผิดปกติของสมองในส่วนที่มีผลกระทบต่อความคิด อารมณ์ ความรู้สึก พฤติกรรม รวมถึงสุขภาพทางกาย แต่คนส่วนใหญ่มักคิดว่าโรคซึมเศร้าเกิดจากความผิดหวัง หรือการได้รับความกระทบกระเทือนทางจิตใจ และจะสามารถรักษาหรือแก้ไขได้ด้วยการให้กำลังใจ ซึ่งในความจริงแล้ว โรคซึมเศร้าเป็นโรคที่เกิดจากความไม่สมดุลของสารสื่อประสาท",
    imgUrl: "/assets/home/article_3.png",
  },
  {
    id: "social-mental",
    title: "การตีตราทางสังคมต่อผู้ป่วยจิตเวช",
    desc: `“ผู้ป่วยจิตเวชเป็นบุคคลอันตราย ชอบทำร้ายคนอื่น จึงไม่ควรเข้าใกล้” 
    การเหมารวมว่าผู้ป่วยจิตเวชทุกคนเป็นบุคคลอันตราย ซึ่งเห็นได้บ่อยครั้งผ่านการนำเสนอผ่านสื่อหรือการใช้คำพูดล้อเลียนผู้ป่วยจิตเวช เช่น คนบ้า คนไม่เต็มบาท คนไม่สมประกอบ และโรคจิต`,
    imgUrl: "/assets/home/article_2.png",
  },
  {
    id: "how-to-good-mental",
    title: "How to มีสุขภาพจิตที่ดี",
    desc: "สุขภาพจิตประกอบไปด้วยสุขภาวะทางอารมณ์ ทางกาย และการอยู่ร่วมกันด้วยดี ซึ่งสิ่งเหล่านี้ส่งผลต่อวิธีคิด ความรู้สึก การกระทำ การตัดสินใจ และความสัมพันธ์กับผู้อื่น ",
    imgUrl: "/assets/home/article_1.png",
  },
];

export const getMockupArticleAsList = (): ArticleProps[] => {
  return articles;
};

export const getMockupArticles = () => {
  return {
    firstArticle: articles[0],
    secondArticle: articles[1],
    thirdArticle: articles[2],
  };
};
