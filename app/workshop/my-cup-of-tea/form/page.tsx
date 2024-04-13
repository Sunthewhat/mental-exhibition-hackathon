"use client";

import MyCupOfTeaFormBox from "@/features/workshop/components/MyCupOfTeaFormBox";
import { motion } from "framer-motion";

export default function MyCupOfTeaForm() {
  const textStyle = {
    header: "text-xs md:text-base lg:text-2xl font-bold",
    subHeader: "text-[10px] md:text-[14px] lg:text-base font-bold",
    paragraph: "text-[10px] md:text-sm lg:text-base",
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,
          delay: 0.1,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <MyCupOfTeaFormBox
          textStyle={textStyle}
          title="My cup of tea"
          link="my-cup-of-tea"
        />
      </motion.div>
    </>
  );
}
