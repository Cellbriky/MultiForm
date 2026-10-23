import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import type { FormData } from '../type/form';

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

  // Add-ons
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

            // Preserve existing add-on fields
            addOn: data.addOn
              ? {
                  ...state.formData.addOn,
                  ...data.addOn,
                }
              : state.formData.addOn,
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
