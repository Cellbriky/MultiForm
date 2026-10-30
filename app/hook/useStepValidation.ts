'use client';

import type { FormValues } from '@/app/schema/formSchema';
import { useFormContext } from 'react-hook-form';
import { useFormStore } from '@/app/store/formstore';
import { useRouter } from 'next/navigation';
import{ pricing,getAddOnPrice, getPlanPrice, type PlanType, BillingOption }  from '../feature/config/pricing';

const addOnsPlan = {
  onlineService: 1,
  largeStorage: 2,
};

const yearlyAddOns = {
  onlineService: 10,
  largeStorage: 20,
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


    const data = getValues(['plan', 'option']);
    const [plan, option] = data;

    const updatedData = {
      plan,
      option,
      planAmount: getPlanPrice(plan as PlanType, option as BillingOption),
    };
    updateForm(updatedData);
    router.push(`/step3/${option}`);
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
  const chioce=useFormStore.getState().formData.option
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
      onlineService: storedAddOn.onlineService,
      largeStorage: storedAddOn.largeStorage,
      customizable: storedAddOn.customizable,
      serviceAmount: storedAddOn.onlineService ? chioce === 'monthly' ? addOnsPlan.onlineService  : yearlyAddOns.onlineService : 0,
      storageAmount: storedAddOn.largeStorage ? chioce === 'monthly' ? addOnsPlan.largeStorage  : yearlyAddOns.largeStorage : 0
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
