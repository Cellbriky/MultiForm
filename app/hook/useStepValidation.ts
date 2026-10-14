'use client';

import type { FormValues, Step1Form, Step2Form, Step3Form } from '@/app/schema/formSchema';

import { useFormContext } from 'react-hook-form';
import { useFormStore } from '@/app/store/formstore';
import { useRouter } from 'next/navigation';
const plans = {
  arcade: 9,
  advanced: 12,
  pro: 15,
};

// Yearly prices
const yearlyPlans = {
  arcade: 90,
  advanced: 120,
  pro: 150,
};
export const useSubmit = () => {
  const { updateForm } = useFormStore();
  const router = useRouter();

  const { trigger, getValues, watch, handleSubmit } = useFormContext<FormValues>();

const submitStep1 = async () => {
  const isValid = await trigger(['name', 'email', 'phoneNo']);

  if (!isValid) return;

  const data = getValues(['name', 'email', 'phoneNo']);

  const updatedData=({
    name: data[0],
    email: data[1],
    phoneNo: data[2],
  })
updateForm(updatedData);
  router.push('/step2');
  };
  const submitStep2 = async () => {
    const isValid = await trigger(['plan', 'option']);
    if (!isValid) return;
    const data = getValues(['plan', 'option']);
    const selectedPlan = watch('plan');
    const selectedOption = watch('option');
    const selectedPlans = selectedOption === 'yearly' ? yearlyPlans : plans;
    const updatedData = {
      plan: data[0],
      option: data[1],
      planAmount: selectedPlans[data[0] as keyof typeof selectedPlans],
    };
    updateForm(updatedData);
    router.push(`/step3/${data[1]}`);
    console.log(selectedPlan);
  }
  const submitStep3 = async () => {
    
    const isValid = await trigger([ 'addOn.onlineService', 'addOn.largeStorage', 'addOn.customizable']);
    if (!isValid) return;
    const data = getValues();
    const updatedData=({
      addOn: {
        onlineService: data.addOn.onlineService,
        largeStorage: data.addOn.largeStorage,
        customizable: data.addOn.customizable,
        serviceAmount: data.addOn.onlineService ? (data.option === 'monthly' ? 1 : 10) : 0,
        storageAmount: data.addOn.largeStorage ? (data.option === 'monthly' ? 2 : 20) : 0,
      }
    })
    updateForm(updatedData);
    router.push('/step4');
  }

  return {
    submitStep1,
    submitStep2,
    submitStep3,
    handleSubmit,
  };
};
