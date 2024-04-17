import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/gallery-dialog";
import { galleryData } from "@/constants/galleryData";
import { Button } from "@react-email/components";
import next from "next";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  dataId: number;
}

export default function GalleryDialog({ open, onOpenChange, dataId }: Props) {
  const [realDataId, setRealDataId] = useState<number>(dataId);
  const [imgUrl, setImgUrl] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [artistName, setArtistName] = useState<string>("");
  const [technique, setTechnique] = useState<string>("");
  const [isLandScape, setIsLandScape] = useState<boolean>(false);

  useEffect(() => {
    const data = galleryData.find((data) => data.id === realDataId);
    if (data) {
      setImgUrl(data.imgUrl);
      setTitle(data.title);
      setDesc(data.desc);
      setArtistName(data.artistName);
      setTechnique(data.technique);
      setIsLandScape(data.isLandScape);
    }
  }, [realDataId]);

  const nextImage = () => {
    if (realDataId < 6) {
      setRealDataId(realDataId + 1);
    } else {
      setRealDataId(0);
    }
  };

  const backImage = () => {
    if (realDataId > 0) {
      setRealDataId(realDataId - 1);
    } else {
      setRealDataId(6);
    }
  };

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
          <DialogContent className="flex flex-col items-center justify-center bg-transparent border-0">
            <div className="flex flex-col border bg-background p-6 shadow-lg rounded-lg py-10 px-5 gap-10 text-left">
              <Image
                src={imgUrl ?? ""}
                width={isLandScape ? 800 : 400}
                height={isLandScape ? 400 : 800}
                alt="image"
              />
              <DialogHeader className="flex flex-col justify-center items-start text-[#5A81BC]">
                <DialogTitle className="text-[14px]">
                  {title}
                </DialogTitle>
                <div className="border-[#5A81BC] border-b-[1px] my-4 w-full" />
                <DialogDescription className="text-[#5A81BC] text-left text-[12px]">
                  (แรงบันดาลใจ) {desc}
                </DialogDescription>
                <DialogDescription className="text-[#5A81BC] text-[12px]">
                  เทคนิคที่ใช้ <span className=" font-bold">{technique}</span>
                </DialogDescription>
                <DialogDescription className="text-[#5A81BC] text-[12px]">
                  วาดโดย <span className=" font-bold">{artistName}</span>
                </DialogDescription>
              </DialogHeader>
            </div>
            <div className=" sm:hidden w-full flex flex-row justify-between mt-5">
              <Button onClick={backImage} className=" bg-transparent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  <circle
                    cx="24"
                    cy="24"
                    r="19"
                    transform="rotate(-180 24 24)"
                    fill="white"
                  />
                  <path
                    d="M45 24C45 19.8466 43.7684 15.7865 41.4609 12.333C39.1534 8.87959 35.8736 6.18797 32.0364 4.59853C28.1991 3.00909 23.9767 2.59322 19.9031 3.40351C15.8295 4.2138 12.0877 6.21386 9.15076 9.15076C6.21386 12.0877 4.2138 15.8295 3.40351 19.9031C2.59322 23.9767 3.00909 28.1991 4.59853 32.0364C6.18797 35.8736 8.87959 39.1534 12.333 41.4609C15.7865 43.7684 19.8466 45 24 45C29.5695 45 34.911 42.7875 38.8492 38.8492C42.7875 34.911 45 29.5695 45 24ZM36 25.5H17.775L26.145 33.9105L24 36L12 24L24 12L26.145 14.1405L17.775 22.5H36V25.5Z"
                    fill="#5A81BC"
                  />
                </svg>
              </Button>
              <Button onClick={nextImage} className=" bg-transparent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="#fff"
                >
                  <circle cx="24" cy="24" r="19" fill="white" />
                  <path
                    d="M3 24C3 28.1534 4.23163 32.2135 6.53914 35.667C8.84665 39.1204 12.1264 41.812 15.9636 43.4015C19.8009 44.9909 24.0233 45.4068 28.0969 44.5965C32.1705 43.7862 35.9123 41.7861 38.8492 38.8492C41.7861 35.9123 43.7862 32.1705 44.5965 28.0969C45.4068 24.0233 44.9909 19.8009 43.4015 15.9636C41.812 12.1264 39.1204 8.84665 35.667 6.53914C32.2135 4.23163 28.1534 3 24 3C18.4305 3 13.089 5.21249 9.15076 9.15076C5.21249 13.089 3 18.4305 3 24ZM12 22.5H30.225L21.855 14.0895L24 12L36 24L24 36L21.855 33.8595L30.225 25.5H12V22.5Z"
                    fill="#5A81BC"
                  />
                </svg>
              </Button>
            </div>
          </DialogContent>
      </Dialog>
    </>
  );
}
