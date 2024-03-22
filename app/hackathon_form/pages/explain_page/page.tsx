import Footer from "../../components/footer";
import Header from "../../components/header";
import ExplainBox from "../../components/explain_box"
import { Noto_Sans_Thai } from 'next/font/google'
 
const noto_thai = Noto_Sans_Thai({ subsets: ['latin'] })

export default function ExplainPage() {
  return (
    <main className={noto_thai.className}>
        <Header />
        <ExplainBox />
        <Footer />
    </main>
  );
}
