import { create } from 'zustand';
import { FormData } from '../type/form';

type FormStore = {
  formData: FormData;
  updateForm: (data: Partial<FormData>) => void;
  resetForm: () => void;
};

const initialFormData: FormData = {
  email: '',
  name: '',
  phoneNo: '',

  // Billing option
  option: 'monthly',

  // Selected plan
  plan: 'arcade',

  amount: 0,

  addOn: {
    onlineService: false,
    largeStorage: false,
    serviceAmount: 0,
    storageAmount: 0,
  },
};

export const useFormStore = create<FormStore>((set) => ({
  formData: initialFormData,

  updateForm: (data) => {
    set((state) => ({
      formData: {
        ...state.formData,
        ...data,
      },
    }));
  },

  resetForm: () => {
    set({
      formData: initialFormData,
    });
  },
}));
