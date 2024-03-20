'use client';

import { Menu } from 'lucide-react';
import { Noto_Sans } from 'next/font/google';
import Link from 'next/link';
import { ReactNode, useState } from 'react';
import Sidebar from './Sidebar';

interface Props {
  children: ReactNode;
}

const noto = Noto_Sans({subsets: ['latin']});


export default function NavigationBar({children}: Props) {

  const [showSidebar, setShowSidebar] = useState<boolean>();
  
  return (
    <>
      <div className="flex justify-between">

        <div className='flex justify-between gap-2'>
          <Menu
            color='#fff'
            className='lg:hidden'
            onClick={() => {
              setShowSidebar(prev => !prev);
            }}
          />
          <Link href='/' className={`${noto.className} text-white font-bold`}>Mental Health Exhibition & Hackathon 2024</Link>
        </div>
        
        <Sidebar state={showSidebar} setState={setShowSidebar}/>

        <div className={`${noto.className} text-sm text-white hidden lg:flex justify-between gap-[90px]`}>
          <Link href='/'>Home</Link>
          <Link href='/'>Hackathon</Link>
          <Link href='/'>Game</Link>
        </div>

      </div>

      <div className='flex flex-col items-center'>
        {children}
      </div>

    </>
  )
}