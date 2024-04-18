import { galleryData } from "@/constants/galleryData";
import GalleryItem from "./GalleryItem";

export default function Gallery() {

  const imageElement = galleryData.map((data) => <GalleryItem key={data.id} title={data.title} desc={data.desc} imgUrl={data.imgUrl} isLandScape={data.isLandScape}/>)
  
  return (
    <div className="grid grid-cols-3 grid-rows-3 grid-flow-row gap-3 justify-items-center items-center mt-8">
      {imageElement}
    </div>
  )
}