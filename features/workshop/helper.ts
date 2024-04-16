
const locations = {
  MatchaMoments: [
    "Design Showcase (ห้องเล็กใกล้ประตูเลื่อน)",
    "Design Showcase (small room near the sliding door)",
  ],
  JudJaiSaiJaeGun: [
    "Design Station Room (ห้องใหญ่สุด)",
    "Design Station Room (Biggest Room)",
  ],
  LaLaiSao: [
    "รอบ ๆ บริเวณ Publish Space 1-2 (ห้องเล็กตรงกลางและริมสุด)",
    "Around the Publish Space 1-2 (small rooms in the middle and at the end)",
  ],
  MyCupOfCoffee: [
    "Design Showcase (ห้องเล็กใกล้ประตูเลื่อน)",
    "Design Showcase (small room near the sliding door)",
  ],
} as Record<string, string[]>;

const workShops = {
  JudJaiSaiJaeGun: "จัดใจใส่แจกัน",
  LaLaiSao: "ละลายเศร้า",
  MyCupOfCoffee: "My cup of coffee",
  MatchaMoments: "Matcha Moments",
} as Record<string, string>;

export const getLocByWorkshop = (workShop: string) => {
  const location = locations[workShop];
  if (!location)
    return {
      thaiLoc: "LX ชั้น 4",
      engLoc: "LX floor 4",
    };

  return {
    thaiLoc: "LX ชั้น 4 " + location[0],
    engLoc: "LX floor 4 " + location[1],
  };
};

export const getWorkshopName = (workShop: string) => {
  return workShops[workShop];
};

export const parseDate = (date: string) => {
  const [datePart, timePart] = date.split(", ");
  const [day, month, year] = datePart
    .split("/")
    .map((part) => parseInt(part, 10));
  const [startTime, endTime] = timePart.split("-");
  const [startHour, startMinute] = startTime.split(".");
  const [endHour, endMinute] = endTime.split(".");

  if (
    isNaN(day) ||
    isNaN(month) ||
    isNaN(year) ||
    isNaN(parseInt(startHour, 10)) ||
    isNaN(parseInt(startMinute, 10)) ||
    isNaN(parseInt(endHour, 10)) ||
    isNaN(parseInt(endMinute, 10))
  ) {
    throw new Error(
      "Invalid date or time format. Expected format: DD/MM/YYYY, HH:mm-HH:mm"
    );
  }

  return { day, month, year, startHour, startMinute, endHour, endMinute };
};

export const dateToString = (day: number, isThai: boolean) => {
  const monthName = isThai ? "เมษายน" : "April";
  const yearValue = isThai ? 2567 : 2024;
  return `${day} ${monthName} ${yearValue}`;
};

export const periodToString = (
  hour: string,
  minute: string,
  isThai: boolean
) => {
  const period = isThai ? " น." : " AM";
  return `${hour}:${minute}${period}`;
};
