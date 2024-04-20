export interface GalleryImage {
  id: number;
  title: string;
  desc: string;
  artistName: string;
  technique: string;
  imgUrl: string;
  isLandScape: boolean;
}

export const galleryData: GalleryImage[] = [
  {
    id: 0,
    title: "บางสิ่งที่ขาดหายไป",
    desc: "เป็นสถานการณ์ที่เต็มเปี่ยมไปด้วยความเครียด ความเศร้า ความโกรธ ความสิ้นหวังและความสับสนที่น่าอึดอัดใจแล้วเข้าสู่การจมดิ่งในที่สุดยึดติดอยู่กับความผิดพลาด เสมือนฝันร้ายที่คอยตามหลอกหลอนทุกคืนและความรู้สึกเหล่านี้ทำให้เราอยากจะหลบซ่อนหลีกหนีหลบเลี่ยงความรู้สึกนี้เอาไว้ไม่อยากให้ใครรับรู้เลยว่าเรานั้นอ่อนแอเพียงใด",
    artistName: "พนิตพิชา รังกูล",
    technique: "Digital Art",
    imgUrl: "/assets/gallery/bang-sing.png",
    isLandScape: false
  },
  {
    id: 1,
    title: "My little blue in mesopelagic",
    desc: "แรงบันดาลใจในการวาดภาพนี้จริงๆได้มาจากเนื้อเพลง blue - taeyong พูดถึงการจมดิ่งลงในสีฟ้าไพลินอย่างช้าๆ ในชื่อผลงาน คำว่า mesopelagic เป็นชื่อเรียกแบ่งระยะความลึกของระดับน้ำทะเล mesopelagic เป็นระดับที่สีแสงส่องถึงเพียงน้อยนิด แต่ก็พบสิ่งมีชีวิตเรืองแสง เป็นชั้นที่ดูก้ำกึ่งระหว่างขึ้นไปหาแสงสว่างและดำดิ่งไปสู่ส่วนที่ลึกที่สุดของทะเล",
    artistName: "ชนาพร สุขนิล",
    technique: "เปียกบนเปียก/แห้งบนเปียก",
    imgUrl: "/assets/gallery/my-little-blue.png",
    isLandScape: true
  },
  {
    id: 2,
    title: "คณะที่ใช่ นรกที่ชอบ",
    desc: "แรงบันดาลใจในครั้งนี้คือการนั่งเรียนวิชา programming แล้วรู้สึกว่าอยากจะร้องไห้ออกมา และอยากให้มีแมวในภาพด้วยเพราะคิดถึงแมวที่บ้านมาก",
    artistName: "ธิดารัตน์ ตั้งอนุศาสตร์",
    technique: "-",
    imgUrl: "/assets/gallery/kana-tee-chai.png",
    isLandScape: false
  },
  {
    id: 3,
    title: "evanescence",
    desc: "The conceptual elements, namely feelings, are depicted with colored wisps, capturing the transient and diverse nature of emotions, as the butterfly symbolized their fleeting, constantly changing, and temporary.",
    artistName: "Bhagya Saranunt",
    technique: "Digital",
    imgUrl: "/assets/gallery/evanescence.png",
    isLandScape: false
  },
  {
    id: 4,
    title: "The Fractured Pieces of Vulnerability",
    desc: "5 stages of grief, pieces of emotions falling apart, putting your vulnerability on display",
    artistName: "ปณิตา ฉวิกขุนรัมย์",
    technique: "Traditional painting using gouache",
    imgUrl: "/assets/gallery/fractured-piece.jpg",
    isLandScape: true
  },
  {
    id: 5,
    title: "แมวใต้น้ำ",
    desc: "วันไหนที่โลกใจร้าย ลองกลับไปพักใจในที่เงียบสงบ แล้วค่อยกลับมาสู้ต่อ เหมือนเช่นกันกับวัฏจักร transdifferentiation ของแมงกะพรุน",
    artistName: "นันทภา ปามา",
    technique: "สีไม้",
    imgUrl: "/assets/gallery/cat-in-water.jpg",
    isLandScape: false
  },
  {
    id: 6,
    title: "แสงผลัดยามกาลผ่าน",
    desc: "แปลงจากภาพมุมมองที่เห็นจากตนเองเทียบกับที่เปรียบกับผู้คนรอบตัว",
    artistName: "ชนาธิป ทรายทอง",
    technique: "ใช้บรัชสีน้ำที่สร้างเองร่วมกับบรัชแสงสะท้อนและการเกลี่ยไล่ระดับสี",
    imgUrl: "/assets/gallery/changing-light.png",
    isLandScape: false
  },
  {
    id: 7,
    title: "Embrace the windy night",
    desc: "ในทุกช่วงเวลาล้วนเต็มไปด้วยความรู้สึกหลายความรู้สึกปะปน กันไป จนในบางครั้งก่อเกิดเป็นความ สับสน ความกังวล ความกลัวภายใน จิตใจ หากเปรียบภาพวาดใบนี้เป็นพื้นที่ภายในจิตใจ คงเปรียบดั่งสภาพจิตใจที่ไม่มั่นคงคล้ายลมกรรโชกแรง แต่เหนือสิ่งอื่นใดในทุกครั้งที่เราได้มองย้อนไปในความคิดของตนเองจะพบพื้นที่ปลอดภัยซึ่งอาจเป็นตัวเราเองหรือใครสักคน ที่คอยโอบกอดและปลอบประโลมเราในยามที่เราอ่อนไหว อ่อนแอ ให้เรายังพร้อมเปิดรับวันใหม่และคอยอยู่ข้างๆ เราอยู่เสมอ หวังว่างานนี้จะเป็นพื้นที่สบายใจและอยู่ข้าง ๆ กับใครสักคน",
    artistName: "ริญชย์ สุวรรณ",
    technique: "Digital Art",
    imgUrl: "/assets/gallery/embrace-the-windy-night.png",
    isLandScape: false
  },
]