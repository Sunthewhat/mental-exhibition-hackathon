"use client";

import Image from "next/image";
import OuterBox from "@/features/hackathon/components/OuterBox";

import InnerBox from "@/features/hackathon/components/InnerBox";
import GButton from "@/features/hackathon/components/GButton";
import InViewAnimation from "../../../shared/Animation/InViewAnimation";
interface Props {
  textStyle: {
    header: string;
  };
}

const ExplainBox = ({ textStyle: { header } }: Props) => {
  const fontColor = {
    blue: "text-[#5A81BC]",
    purple: "text-[#8E7AAB]",
    black: "text-[#34312F]",
  };

  return (
    <OuterBox>
      <InnerBox>
        <div className="flex flex-col justify-center items-center gap-3 border-b border-[#B9A5D6] pb-6">
          <div className="">
            <Image
              src="/assets/logo.svg"
              alt="logo"
              width={120}
              height={120}
              className="btn-hover"
            />
          </div>
          <h2 className={`${header} ${fontColor.blue} md:text-[20px] lg:text-[24px] text-center text-[#5A81BC] font-bold`}>
            แบบฟอร์มลงทะเบียน
            <br className="md:hidden" /> Color of Feelings Exhibition
          </h2>
        </div>
        <InViewAnimation>
        <div className="flex items-center justify-center mt-3">
            <Image src="/assets/exhibition/example.png" alt="example" width={750} height={400} />
        </div>
        </InViewAnimation>
      </InnerBox>
      <div className="flex flex-row justify-between items-end">
        <GButton
          title="ย้อนกลับ"
          command="/exhibition/explain"
          type="TYPE1"
          symbol={true}
        />
        <GButton title="ถัดไป" command="/exhibition/form" symbol={true} />
      </div>
    </OuterBox>
  );
};

export default ExplainBox;
