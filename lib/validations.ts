import { z } from "zod";

export const leadFormSchema = z.object({
  name: z.string().min(2, "Please enter your full name").max(200),
  email: z.string().email("Please enter a valid email").max(200),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number")
    .max(50)
    .regex(/[\d\s\-\(\)\+]/, "Please enter a valid phone number"),
  propertyAddress: z
    .string()
    .min(5, "Please enter the full property address")
    .max(500),
});

export type LeadFormData = z.infer<typeof leadFormSchema>;
