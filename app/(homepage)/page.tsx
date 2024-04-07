import CallToActions from "@/features/home/components/CallToActions";
import Contributors from "@/features/home/components/Contributors";
import Hero from "@/features/home/components/Hero";
import Information from "@/features/home/components/Infomation";
import Slider from "@/features/home/components/Slider";
import React from "react";

const HomePage = () => {
  return (

    <div className="overflow-x-hidden mt-8 py-2 flex flex-col gap-4 items-center w-full max-w-[1500px] min-w-[350px]">
      <Slider />
      <Hero />
      <Information />
      <CallToActions />
      <Contributors />
    </div>
  );
};

export default HomePage;
