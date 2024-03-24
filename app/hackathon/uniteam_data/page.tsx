"use client";

import UniTeamData from "@/features/hackathon/components/boxs/UniTeamData";
import { useSearchParams } from "next/navigation";

export default function UniTeam_Data_Page() {
  const numberParams = useSearchParams();

  const number = numberParams.get("num") ?? "";

  return (
    <>
      <UniTeamData num={number} />
    </>
  );
}
