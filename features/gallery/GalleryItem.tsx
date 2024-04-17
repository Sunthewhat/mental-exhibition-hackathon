/* eslint-disable @next/next/no-img-element */
interface Props {
  title: string;
  desc: string;
  imgUrl: string;
  isLandScape?: boolean
}

export default function GalleryItem({title, desc, imgUrl, isLandScape}: Props) {
  return (
    <div className={isLandScape ? 'flex flex-col items-center justify-center' : ''}>
      <img src={imgUrl} alt="" />
      <h3 className={`text-[#5A81BC] font-bold text-[32px]`}>{title}</h3>
      <p className={`text-[#5A81BC] font-bold text-[32px]`}>{desc}</p>
    </div>
  )
}