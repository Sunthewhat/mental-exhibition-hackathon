'use client';

import ExampleBox from "@/features/exhibition/components/boxs/ExampleBox";
import { motion } from "framer-motion";

export default function ExamplePage() {
  const textStyle = {
    header: "text-xs md:text-base lg:text-2xl font-bold",
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,
          delay: 0.1,
          ease: [0, 0.71, 0.2, 1.01]
        }}
      >
        <ExampleBox textStyle={textStyle} />
      </motion.div>
    </>
  );
}
