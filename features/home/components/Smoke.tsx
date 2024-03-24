import Image from "next/image";

interface Props {
  filePath: string;
  style: string;
}

export default function Smoke({filePath, style}: Props) {
  return (
    <Image 
      src={filePath}
      alt="Smoke"
      className={`fixed ${style}`}
      width={500}
      height={500}
    />
  )
}