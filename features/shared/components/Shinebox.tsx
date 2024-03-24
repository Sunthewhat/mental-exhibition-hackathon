import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  blurAmount:
    | "blue-none"
    | "blur-sm"
    | ""
    | "blur-md"
    | "blur-lg"
    | "blur-xl"
    | "blur-2xl"
    | "blur-3xl";
  boxSize: number;
  className?: string;
}

export default function ShineBox({
  children,
  blurAmount,
  boxSize,
  className,
}: Props) {
  const style = `absolute rounded-full bg-white ${blurAmount}`;

  return (
    <div className={`relative flex items-center justify-center`}>
      <div
        className={cn(style, className)}
        style={{
          width: `${boxSize}px`,
          height: `${boxSize}px`,
        }}
      ></div>
      <div className="relative">{children}</div>
    </div>
  );
}
