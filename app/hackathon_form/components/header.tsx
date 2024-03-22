import Image from "next/image";
import bubble_start from "../assets/bubble_start.svg";

const Header: React.FC = () => {
  return (
    <div className="w-full z-0 mb-[-10%] md:mb-[-3%] lg:mb-[-10%]">
        <Image
            priority
            src={bubble_start}
            alt="header"
            className="w-full"
        />
    </div>
  );
}

export default Header;