"use client";
import { z } from 'zod';
import { useRouter } from 'next/navigation';
import { useFormStore } from '../store/formstore';
import { Step1Form, Step2Form, Step3Form } from '../schema/formSchema';
export const useSubmit = () => {
  const router = useRouter();
  const updateForm = useFormStore((state) => state.updateForm);
  //step1 to step2
  const submitStep1 = (data: Step1Form) => {
    const updatedForm = {
      name: data.name,
      email: data.email,
      phoneNo: data.phoneNo,
    };
    updateForm(updatedForm);
  };
  // STEP 2 → STEP 3
  const submitStep2 = (data: Step2Form) => {
    const updatedData = {
      plan: data.plan,
      option: data.option,
      amount: data.amount,
    };

    updateForm(updatedData);

    router.push(`/step3/${data.option}`);
  };

  // STEP 3 → STEP 4
  const submitStep3 = (data: Step3Form) => {
    const updatedData = {
      addOn: {
        onlineService: data.onlineService,
        largeStorage: data.largeStorage,
        customizable: data.customizable,

        serviceAmount: data.onlineService ? data.serviceAmount : 0,

        storageAmount: data.largeStorage ? data.storageAmount : 0,
      },
    };

    updateForm(updatedData);

    router.push('/step4');
  };

  return {
    submitStep1,
    submitStep2,
    submitStep3,
  };
};