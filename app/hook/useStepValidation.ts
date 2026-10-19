'use client';

import type { FormValues } from '@/app/schema/formSchema';
import { useFormContext } from 'react-hook-form';
import { useFormStore } from '@/app/store/formstore';
import { useRouter } from 'next/navigation';

const plans = {
  arcade: 9,
  advanced: 12,
  pro: 15,
};

const yearlyPlans = {
  arcade: 90,
  advanced: 120,
  pro: 150,
};

export const useSubmit = () => {
  const { updateForm } = useFormStore();
  const router = useRouter();

  const { trigger, getValues, handleSubmit } = useFormContext<FormValues>();

  const submitStep1 = async () => {
    const isValid = await trigger(['name', 'email', 'phoneNo']);

    if (!isValid) return;

    const data = getValues();

    updateForm({
      name: data.name,
      email: data.email,
      phoneNo: data.phoneNo,
    });

    router.push('/step2');
  };

  const submitStep2 = async () => {
    const isValid = await trigger(['plan', 'option']);

    if (!isValid) return;

    const data = getValues();

    const selectedPlans = data.option === 'yearly' ? yearlyPlans : plans;

    updateForm({
      plan: data.plan,
      option: data.option,
      planAmount: selectedPlans[data.plan as keyof typeof selectedPlans],
    });

    router.push(`/step3/${data.option}`);
  };

const submitStep3 = async () => {
  const isValid = await trigger([
    'addOn.onlineService',
    'addOn.largeStorage',
    'addOn.customizable',
  ]);

  if (!isValid) return;

  const data = getValues();
  const storedAddOn = useFormStore.getState().formData.addOn;

  const addOn = data.addOn ??
    storedAddOn ?? {
      onlineService: false,
      largeStorage: false,
      customizable: false,
      serviceAmount: 0,
      storageAmount: 0,
    };

  updateForm({
    addOn: {
      onlineService: addOn.onlineService,
      largeStorage: addOn.largeStorage,
      customizable: addOn.customizable,
      serviceAmount: addOn.onlineService ? (data.option === 'monthly' ? 1 : 10) : 0,
      storageAmount: addOn.largeStorage ? (data.option === 'monthly' ? 2 : 20) : 0,
    },
  });

  router.push('/step4');
};

  return {
    submitStep1,
    submitStep2,
    submitStep3,
    handleSubmit,
  };
};
