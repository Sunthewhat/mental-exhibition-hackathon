import Footer from "../../components/footer";
import Header from "../../components/header";
import SummitBox from "../../components/boxs/summit_box"
import { Noto_Sans_Thai } from 'next/font/google'
 
const noto_thai = Noto_Sans_Thai({ subsets: ['latin'] })

export default function SummitPage() {
  return (
    <main className={noto_thai.className}>
        <Header />
        <SummitBox />
        <Footer />
    </main>
  );
}
