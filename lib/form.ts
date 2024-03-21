import { z } from "zod";

export const formSchema = z.object({
  teamName: z.string(),
  formType: z.string(),
  fullname: z.string().min(1,{message:  "Full name is required"}),
  nickname: z.string().min(1,{message: "Nickname is required"}),
  university: z.string().min(1,{message: "University is required"}),
  email: z.string({required_error:"Email is required"}).email({ message: "Invalid email address" }),

  student_id: z.string()
    .min(11, { message: "Student ID must be exactly 11 digits long." })
    .max(11, { message: "Student ID cannot exceed 11 digits." })
    .refine((val) => /^\d{11}$/.test(val), { message: "Phone number must be a valid 11-digit number." }),

  phone: z
    .string()
    .min(2, { message: "Phone number must be exactly 10 digits long." })
    .max(2, { message: "Phone number cannot exceed 10 digits." })
    .refine((val) => /^\d{2}$/.test(val), { message: "Phone number must be a valid 10-digit number." }),
    leader: z.boolean(),
});

export type per =  {
  file:File
}