import Image from "next/image";
import bubble_start from "../assets/bubble_start.svg";

const Header: React.FC = () => {
  return (
    <div className="w-full">
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