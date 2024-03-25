"use client";

import UniTeamData from "@/features/hackathon/components/boxs/UniTeamData";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";

export default function UniTeam_Data_Page() {
  const numberParams = useSearchParams();

  const number = numberParams.get("num") ?? "";

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
        <UniTeamData num={number} />
      </motion.div>
    </>
  );
}
