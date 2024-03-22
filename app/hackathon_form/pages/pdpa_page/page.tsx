import Footer from "../../components/footer";
import Header from "../../components/header";
import PdpaBox from "../../components/boxs/pdpa_box";
import { Noto_Sans_Thai } from 'next/font/google'
 
const noto_thai = Noto_Sans_Thai({ subsets: ['latin'] })

export default function pdpa_page() {
  return (
    <main className={noto_thai.className}>
        <Header />
        <PdpaBox />
        <Footer />
    </main>
  );
}
