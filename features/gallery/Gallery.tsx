import { galleryData } from "@/constants/galleryData";
import GalleryItem from "./GalleryItem";
import { useMediaQuery } from "react-responsive";

export default function Gallery() {

  
  const isMobile = useMediaQuery({minWidth: 320, maxWidth: 680});
  const isTablet = useMediaQuery({minWidth: 680, maxWidth: 768});
  const margin = isMobile ? 24 : isTablet ? 58 : 58;
  

  const imageElement = galleryData.map((data) => <GalleryItem key={data.id} title={data.title} desc={data.desc} imgUrl={data.imgUrl} isLandScape={data.isLandScape}/>)
  
  return (
    <div
      className="grid grid-cols-3 grid-rows-3 grid-flow-row gap-3 md:gap-6 gap-y-6 justify-items-center items-center"
      style={{marginTop: margin}}
    >
      {imageElement}
    </div>
  )
}