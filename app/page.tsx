import Slider from "@/components/HomePage/Slider";
import Information from "@/components/HomePage/Infomation";
import CallToActions from "@/components/HomePage/CallToActions";
import Layer from "@/components/HomePage/Layer";

export default function HomePage() {
  return (
    <div className="mt-8 flex flex-col gap-4 items-center w-full max-w-[1024px] min-w-[350px]">
    
      <Slider />
      <Information />
      <CallToActions />

    </div>
  );
}
