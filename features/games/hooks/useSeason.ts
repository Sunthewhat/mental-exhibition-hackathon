import { seasons, SeasonType } from "@/constants/seasons";

export const useSeason = (score: number) => {
  const scoreAsPercent = (score / 14) * 100;

  const season: SeasonType | undefined = seasons.find(
    (s) => scoreAsPercent <= s.percent
  );

  if (!season)
    return {
      id: -1,
      name: "Unknown",
      description: "Unknown",
      imgUrl: "",
      downloadUrl: "",
    };

  return season;
};
