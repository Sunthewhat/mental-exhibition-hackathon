export const parseDate = (date: string) => {
  const [datePart, timePart] = date.split("-");
  const [day, month, year] = datePart
    .split("/")
    .map((part) => parseInt(part, 10));
  const [hour, minute] = timePart.split(":");

  if (
    isNaN(day) ||
    isNaN(month) ||
    isNaN(year) ||
    isNaN(parseInt(hour, 10)) ||
    isNaN(parseInt(minute, 10))
  ) {
    throw new Error(
      "Invalid date or time format. Expected format: DD/MM/YYYY-HH:mm"
    );
  }

  return { day, month, year, hour, minute };
};

export const dateToString = (day: number, isThai: boolean) => {
  const monthName = isThai ? "เมษายน" : "April";
  const yearValue = isThai ? 2567 : 2024;
  return `${day} ${monthName} ${yearValue}`;
};

export const periodToString = (hour: string, minute: string, isThai: boolean) => {
  const period = isThai ? " น." : " AM";
  return `${hour}:${minute}${period}`;
};
