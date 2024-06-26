"use client";

import SubmitBox from "@/features/workshop/components/SubmitBox";
import { motion } from "framer-motion";

export default function SubmitPage() {
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
        <SubmitBox title="จัดใจใส่แจกัน" />
      </motion.div>
    </>
  );
}
