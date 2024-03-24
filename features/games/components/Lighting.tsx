import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface LightingProps {
  children: ReactNode;
  className?: string;
  onClick?: (e: any) => void;
}
const Lighting = ({ children, className }: LightingProps) => {
  return (
    <div className={cn("relative", className)}>
      <div className="bg-white shadow-lg blur-3xl w-full h-full rounded-full">
        {children}
      </div>
      <div className="absolute bottom-0 top-0 left-0 right-0 ">{children}</div>
    </div>
  );
};

export default Lighting;
