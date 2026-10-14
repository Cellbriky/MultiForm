export type Plan = 'arcade' | 'advanced' | 'pro' | '';
export type BillingOption = 'monthly' | 'yearly' | '';
export interface FormData {
  email: string;
  name: string;
  phoneNo: string;

  option: BillingOption;
  plan: Plan;

  planAmount: number;

  addOn: {
    onlineService: boolean | undefined;
    largeStorage: boolean | undefined;
    serviceAmount: number;
    storageAmount: number;
    customizable: boolean | undefined;
  };
}
