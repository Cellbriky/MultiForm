
import { z } from 'zod';

// STEP 1
export const step1Schema = z.object({
  name: z.string().trim().min(2, 'Name must be at least 2 characters'),
  email: z.string().trim().email('Please enter a valid email address'),
  phoneNo: z
    .string()
    .min(7, 'Phone number is required')
    .regex(/^\+?[0-9\s()-]+$/, 'Enter a valid phone number'),
});

export type Step1Form = z.infer<typeof step1Schema>;

// STEP 2
export const plans = {
  arcade: 9,
  advanced: 12,
  pro: 15,
} as const;

export const yearlyPlans = {
  arcade: 90,
  advanced: 120,
  pro: 150,
} as const;

export const step2Schema = z.object({
  plan: z.enum(['arcade', 'advanced', 'pro', '']).pipe(
    z.enum(['arcade', 'advanced', 'pro'], {
      error: 'Please select a subscription plan.',
    }),
  ),

  option: z.enum(['monthly', 'yearly', '']).pipe(
    z.enum(['monthly', 'yearly'], {
      error: 'Please select a billing option.',
    }),
  ),
});

export type Step2Form = z.output<typeof step2Schema>;


// STEP 3
export const step3Schema = z.object({
  addOn: z.object({
    onlineService: z.boolean(),
    largeStorage: z.boolean(),
    customizable: z.boolean(),
  }),
}).refine((data) => {
  const { onlineService, largeStorage, customizable } = data.addOn;
  return onlineService || largeStorage || customizable;
}, {
  message: 'Please select at least one add-on',
});

export type Step3Form = z.infer<typeof step3Schema>;

// COMPLETE FORM
export const formSchema = step1Schema
  .merge(step2Schema)
  .merge(step3Schema);

// Input values can contain empty strings.
export type FormValues = z.input<typeof formSchema>;

// Output values contain only valid plan and billing selections.
export type ValidatedFormValues = z.output<typeof formSchema>;

