"use client";
import React from "react";
import { Download, Instagram } from "lucide-react";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { useFonts } from "@/features/shared/hooks/useFont";
import Link from "next/link";

const Contact = () => {
  const { headerFont } = useFonts();

  return (
    <div className="flex flex-col gap-3 sm:gap-6 items-center w-3/5 my-[3rem] lg:mt-[6rem] z-50">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 2,
          delay: 0,
        }}
      >
        <Download className="block md:hidden" color="#B9A5D6" size={24} />
        <Download className="hidden md:block" color="#B9A5D6" size={40} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 2,
          delay: 0.3,
        }}
      >
        <Label
          className={`text-[#B9A5D6] font-small text-xs text-center sm:text-xl lg:text-2xl md:font-semibold text-[1rem] md:text-[1.8rem] lg:text-[2] ${headerFont.className}`}
        >
          KMUTT MENTAL HEALTH EXHIBITION
        </Label>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 2,
          delay: 0.6,
        }}
      >
        <Link
          className="flex gap-4 rounded-xl py-2 px-2 sm:px-10 bg-white shadow-2xl hover:cursor-pointer z-10"
          href="https://www.instagram.com/hackmindgallery.kmutt/"
        >
          <Instagram color="#B9A5D6" />
          <Label
            className={`text-[#B9A5D6] font-small text-xs my-auto sm:text-xl lg:text-2xl md:font-bold text-[1rem] md:text-[1.8rem] lg:text-[2] ${headerFont.className}`}
          >
            hackmindgallery.kmutt
          </Label>
        </Link>
      </motion.div>
    </div>
  );
};

export default Contact;
