import Image from "next/image";

interface BubbleImageProps {
  cssStyling: string;
}

function BubbleImage({ cssStyling }: BubbleImageProps) {
  return (
    <Image
      src="/bubble_1.svg"
      alt="bubble"
      className={cssStyling}
      width={60}
      height={60}
    />
  );
}

export default function StaticBubbleBackground() {
  return (
    <>
      <BubbleImage cssStyling="absolute -top-[25px] -left-[25px]" />
      <BubbleImage cssStyling="absolute top-[60%] -left-[40px]" />
      <BubbleImage cssStyling="absolute top-[33%] -right-[25px]" />
      <BubbleImage cssStyling="absolute top-[92%] -right-[25px]" />
    </>
  );
}
