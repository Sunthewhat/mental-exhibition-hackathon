import { z } from "zod";

export const normalStringValidator = z
  .string()
  .refine((value: string) => /^[a-zA-Zก-๙_@ ]+$/.test(value), {
    message: "กรุณาใส่ชื่อให้ถูกต้อง [ห้ามมีอักขระพิเศษ]",
  });
