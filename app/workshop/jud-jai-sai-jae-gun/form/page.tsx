"use client";

import JudJaiSaiJaeGunFormBox from "@/features/workshop/components/JudJaiSaiJaeGunFormBox";
import { motion } from "framer-motion";

export default function JudJaiSaiJaeGunForm() {
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
        <JudJaiSaiJaeGunFormBox
          textStyle={textStyle}
          title="จัดใจใส่แจกัน"
          link="jud-jai-sai-jae-gun"
        />
      </motion.div>
    </>
  );
}
