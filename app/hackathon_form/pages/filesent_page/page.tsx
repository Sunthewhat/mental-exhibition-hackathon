import Footer from "../../components/footer";
import Header from "../../components/header";
import { Noto_Sans_Thai } from 'next/font/google'
import FileSent from "../../components/boxs/filesent_box";
 
const noto_thai = Noto_Sans_Thai({ subsets: ['latin'] })

export default function FileSent_Page() {
  return (
    <main className={noto_thai.className}>
        <Header />
        <FileSent />
        <Footer />
    </main>
  );
}
