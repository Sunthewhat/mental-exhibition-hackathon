import React from 'react'
import StigmaBox from '@/features/warning/StigmaBox'

const page = () => {
  const textStyle = {
    header: "text-xs md:text-base lg:text-2xl font-bold",
    subHeader: "text-[10px] md:text-[14px] lg:text-base font-bold",
    paragraph: "text-[10px] md:text-sm lg:text-base",
  };
  const fontColor = {
    blue: "text-[#5A81BC]",
    purple: "text-[#8E7AAB]",
    black: "text-[#34312F]",}
    

  return (
    <StigmaBox textStyle={textStyle} fontColor={fontColor} />
  )
}

export default page