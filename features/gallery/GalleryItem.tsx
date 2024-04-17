/* eslint-disable @next/next/no-img-element */

interface Props {
  title: string;
  desc: string;
  imgUrl: string;
  isLandScape?: boolean;
}

export default function GalleryItem({
  title,
  desc,
  imgUrl,
  isLandScape,
}: Props) {
  const STRING_LIMIT = 70;

  return (
    <div
      className={isLandScape ? "flex flex-col items-center justify-center" : ""}
    >
      <img src={imgUrl} alt="" className="w-full h-full" />
      <h3 className={`text-[#5A81BC] font-bold text-[12px] mt-2`}>{title}</h3>
      <p className={`text-[#5A81BC] text-[10px]`}>
        {desc.length >= STRING_LIMIT ? `${desc.substring(0, STRING_LIMIT)}...` : desc}
      </p>
    </div>
  );
}
