'use client'

import Footer from "../../components/footer";
import Header from "../../components/header";
import { Noto_Sans_Thai } from 'next/font/google'
import { useSearchParams } from 'next/navigation'
import UniTeamData from "../../components/boxs/uniteam_data_box";
import HighTeamData from "../../components/boxs/highteam_data_box";

const noto_thai = Noto_Sans_Thai({ subsets: ['latin'] })

export default function UniTeam_Data_Page() {
  const numberParams = useSearchParams()
 
  const number = numberParams.get('num') ?? ''
 
  return (
    <main className={noto_thai.className}>
        <Header />
        <UniTeamData num={number} />
        <Footer />
    </main>
  );
}
