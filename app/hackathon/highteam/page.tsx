'use client';

import HighTeam from "@/features/hackathon/components/boxs/HighTeamBox";
import { motion } from "framer-motion";

export default function HighTeamPage() {
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
        <HighTeam />
      </motion.div>
    </>
  );
}
