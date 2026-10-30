export const pricing = {
  plans: {
    arcade: { monthly: 9, yearly: 90 },
    advanced: { monthly: 12, yearly: 120 },
    pro: { monthly: 15, yearly: 150 },
  },

  addOns: {
    onlineService: { monthly: 1, yearly: 10 },
    largeStorage: { monthly: 2, yearly: 20 },
    customizable: { monthly: 2, yearly: 20 },
  },
} as const;

export type PlanType = keyof typeof pricing.plans;
export type BillingOption = 'monthly' | 'yearly';
export type AddOnType = keyof typeof pricing.addOns;

export const getPlanPrice = (plan: PlanType, billing: BillingOption) =>
  pricing.plans[plan][billing];

export const getAddOnPrice = (addOn: AddOnType, billing: BillingOption) =>
  pricing.addOns[addOn][billing];

export const isPlanType = (value: string): value is PlanType =>
  Object.prototype.hasOwnProperty.call(pricing.plans, value);

export const isBillingOption = (value: string): value is BillingOption =>
  value === 'monthly' || value === 'yearly';
