import Image from "next/image";
import bubble_start from "../assets/bubble_start.svg";

const Header: React.FC = () => {
  return (
    <div className="w-screen">
        <Image
            priority
            src={bubble_start}
            alt="header"
        />
    </div>
  );
}

export default Header;