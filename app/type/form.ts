export interface FormData {
  email: string;
  name: string;
  phoneNo: string;

  option: 'monthly' | 'yearly';
  plan: 'arcade' | 'advanced' | 'pro';

  amount: number;

  addOn: {
    onlineService: boolean;
    largeStorage: boolean;
    serviceAmount: number;
    storageAmount: number;
  };
}
