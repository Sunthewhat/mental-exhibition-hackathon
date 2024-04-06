  import Link from "next/link";

  export default function CallToActions() {
    const buttonStyle = {
      base: "flex items-center justify-center py-[10px] px-8 text-xs font-bold rounded-full shadow-md",
      clickToRegis:
        "text-white bg-gradient-to-r from-[#ddcdfa] via-[#f1d2ee] to-[#ddcdfa]",
      clickForInfo: "text-[#B9A5D6] border-2 border-[#DDCDFA]",
    };

    return (
      <div className="flex gap-4">
        <Link
          href="/hackathon/pdpa"
        className={`${buttonStyle.base} ${buttonStyle.clickToRegis}`}
      >
        สมัครเลย
      </Link>
      <Link
        target="_blank"
        href="https://drive.google.com/file/d/15OacsQSHFI0I02TH00qartyXCBdZuI3y/view?usp=sharing"
        className={`${buttonStyle.base} ${buttonStyle.clickForInfo}`}
      >
        รายละเอียดการแข่งขัน
      </Link>
    </div>
  );
}
