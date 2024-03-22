import Slider from "@/components/HomePage/Slider";
import Information from "@/components/HomePage/Infomation";
import CallToActions from "@/components/HomePage/CallToActions";
import Hero from "@/components/HomePage/Hero";

export default function HomePage() {
  return (
    <div className="overflow-x-hidden mt-8 px-[60px] py-2 flex flex-col gap-4 items-center w-full max-w-[1024px] min-w-[350px]">
      <Slider />
      <Hero />
      <Information />
      <CallToActions />
    </div>
  );
}
