import { create } from 'zustand';
import { FormData } from '../type/form';
import { createJSONStorage, persist } from 'zustand/middleware';

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
  option: '',

  // Selected plan
  plan: '',

  planAmount: 0,

  addOn: {
    onlineService: true,
    largeStorage: true,
    serviceAmount: 0,
    storageAmount: 0,
    customizable: false,
  },
};


export const useFormStore = create<FormStore>()(
  persist(
    (set) => ({
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
    }),
    {
      name: 'multi-step-form',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);