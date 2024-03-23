import Footer from "../../components/footer";
import Header from "../../components/header";
import UniTeam from "../../components/boxs/uniteam_box"
import { Noto_Sans_Thai } from 'next/font/google'
import HighTeam from "../../components/boxs/highteam_box";
 
const noto_thai = Noto_Sans_Thai({ subsets: ['latin'] })

export default function GradeSel_Page() {
  return (
    <main className={noto_thai.className}>
        <Header />
        <HighTeam />
        <Footer />
    </main>
  );
}
