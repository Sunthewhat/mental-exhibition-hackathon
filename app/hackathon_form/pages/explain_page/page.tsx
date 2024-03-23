// page.tsx of explain_page/
import Footer from "../../components/footer";
import Header from "../../components/header";
import ExplainBox from "../../components/boxs/explain_box"
import { Noto_Sans_Thai } from 'next/font/google'
import { text } from "stream/consumers";
 
const noto_thai = Noto_Sans_Thai({ subsets: ['latin'] })

export default function ExplainPage() {

  const textStyle = {
    header: 'text-xs md:text-base lg:text-2xl font-bold',
    subHeader: 'text-[10px] md:text-[14px] lg:text-base font-bold',
    paragraph: 'text-[10px] md:text-sm lg:text-base',
  }
  
  return (
    <main className={noto_thai.className}>
        <Header/>
        <ExplainBox textStyle={textStyle}/>
        <Footer />
    </main>
  );
}