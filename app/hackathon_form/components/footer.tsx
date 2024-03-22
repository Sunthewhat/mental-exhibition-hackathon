import Image from "next/image";
import bubble_end from "../assets/bubble_end.svg";

const Footer: React.FC = () => {
  return (
      <div className="w-full">
        <Image
          priority
          src={bubble_end}
          alt="footer"
          className="w-full"
        />
      </div>
  );
}

export default Footer;