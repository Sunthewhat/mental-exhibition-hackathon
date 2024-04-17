import Exhibition from "@/features/home/components/Exhibition";
import CallToActions from "@/features/home/components/CallToActions";
import Contributors from "@/features/home/components/Contributors";
import Hero from "@/features/home/components/Hero";
import Information from "@/features/home/components/Infomation";
import Slider from "@/features/home/components/Slider";
import Workshops from "@/features/home/components/Workshops";
import React from "react";
import Articles from "@/features/home/components/Articles";

const HomePage = () => {
  return (

    <div className="overflow-x-hidden mt-8 py-2 flex flex-col gap-4 items-center w-full max-w-[1500px] min-w-[350px] scroll-smooth">
      <Slider />
      <Hero />
      {/* <Information />
      <CallToActions /> */}
      {/* <Exhibition /> */}
      <Articles />
      <Workshops />
      <Contributors />
    </div>
  );
};

export default HomePage;
