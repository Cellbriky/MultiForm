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
};
export const useFormStore = create<FormStore>((set) => ({
  formData: initialFormData,
  updateForm: (data) => {
    set((state) => ({
      formData: {
        ...state.formData,
        ...data,
      },
    }))
  },
  resetForm: () => {
    set({ formData: initialFormData });
  },
}));