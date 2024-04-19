import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface Props {
    article: string
    title:string
    content:string
}


const ArticleBox = ({article,title,content}: Props) => {
  return (
    <Link href={`${article}`} className="bg-white shadow-xl rounded-b-xl hover:opacity-85 cursor-pointer">
    <Image
      src={`/assets/warning/${article}.png`}
      alt="stigma"
      width={550}
      height={100}
    />
    <h1 className={`text-xs md:text-sm lg:text-2xl font-bold text-[#5A81BC] mt-4 text-center mb-2 px-2`}>
      {title}
    </h1>
    <p className={`text-[8px] sm:text-xs md:text-sm lg:text-base px-2 md:px-5 h-[120px] md:h-[175px] overflow-scroll`}>
      {content}
    </p>
    <p className="text-right text-[10px] md:text-xs text-gray-400 mr-4 mb-5">อ่านต่อ...</p>
  </Link>
  )
}

export default ArticleBox