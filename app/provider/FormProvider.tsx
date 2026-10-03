'use client';

import { ReactNode } from 'react';
import { FormProvider as RHFFormProvider, useForm } from 'react-hook-form';

export type FormValues = {
  name: string;
  email: string;
  phoneNo: string;

  plan: string;
  option: 'monthly' | 'yearly';

  onlineService: boolean;
  largeStorage: boolean;
    customizable: boolean;
};

type Props = {
  children: ReactNode;
};

const FormProvider = ({ children }: Props) => {
  const methods = useForm<FormValues>({
    defaultValues: {
      name: '',
      email: '',
      phoneNo: '',
      plan: '',
      option: 'monthly',
      onlineService: false,
      largeStorage: false,
      customizable: false,
    },
  });

  return <RHFFormProvider {...methods}>{children}</RHFFormProvider>;
};

export default FormProvider;
