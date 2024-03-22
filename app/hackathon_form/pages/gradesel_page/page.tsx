import Footer from "../../components/footer";
import Header from "../../components/header";
import GradeBox from "../../components/boxs/grade_box"
import { Noto_Sans_Thai } from 'next/font/google'
 
const noto_thai = Noto_Sans_Thai({ subsets: ['latin'] })

export default function GradeSel_Page() {
  return (
    <main className={noto_thai.className}>
        <Header />
        <GradeBox />
        <Footer />
    </main>
  );
}
