import ExplainBox from "@/features/hackathon/components/boxs/ExplainBox";

export default function ExplainPage() {
  const textStyle = {
    header: "text-xs md:text-base lg:text-2xl font-bold",
    subHeader: "text-[10px] md:text-[14px] lg:text-base font-bold",
    paragraph: "text-[10px] md:text-sm lg:text-base",
  };

  return (
    <>
      <ExplainBox textStyle={textStyle} />
    </>
  );
}
