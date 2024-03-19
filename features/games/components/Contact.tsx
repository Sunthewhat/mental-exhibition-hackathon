import React from "react";
import { Download, Instagram } from "lucide-react";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";

const Contact = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/instragram");
  };

  return (
    <div className="flex flex-col gap-3 sm:gap-6 items-center w-3/5 xs:mt-[1.5rem] lg:mt-[8rem] z-100">
      <Download className="block md:hidden" color="#B9A5D6" size={24} />
      <Download className="hidden md:block" color="#B9A5D6" size={40} />
      <Label className="text-[#B9A5D6] font-small text-xs text-center sm:text-base sm:font-medium md:text-xl md:font-semibold">
        KMUTT MENTAL HEALTH EXHIBITION
      </Label>
      <button
        onClick={handleClick}
        className="flex gap-4 rounded-xl py-2 px-2 sm:px-10 bg-white drop-shadow-2xl hover:cursor-pointer z-100"
      >
        <Instagram color="#B9A5D6" />
        <Label className="text-[#B9A5D6] font-small text-xs my-auto sm:text-base sm:font-medium md:text-lg md:font-semibold">
          hackmindgallery.kmutt
        </Label>
      </button>
    </div>
  );
};

export default Contact;
