import { z } from 'zod';
export const step1Schema = z.object({
  name: z.string().min(2, 'Name must at less be 2 characters').trim(),
  email: z.string().email('Please enter a valid email address').trim(),
  phoneNo: z.string().min(7, 'Please enter a valid Phone number').trim(),
});
export type Step1Form = z.infer<typeof step1Schema>;
export const step2Schema = z.object({
  plan: z.enum(['arcade', 'advanced', 'pro']),
  option: z.enum(['monthly', 'yearly']),
  amount: z.number().positive('Amount must be greater than 0'),
});
export type Step2Form = z.infer<typeof step2Schema>;
export const step3Schema = z.object({
  onlineService: z.boolean(),
  largeStorage: z.boolean(),
  customizable: z.boolean(),
  serviceAmount: z.number().nonnegative(),
  storageAmount: z.number().nonnegative(),
});
export type Step3Form = z.infer<typeof step3Schema>