"use client";

import HighTeamData from "@/features/hackathon/components/boxs/HighTeamDataBox";
import { useSearchParams } from "next/navigation";

export default function UniTeamPage() {
  const numberParams = useSearchParams();

  const number = numberParams.get("num") ?? "";

  return (
    <>
      <HighTeamData num={number} />
    </>
  );
}
