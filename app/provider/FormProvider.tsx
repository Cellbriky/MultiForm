
'use client';

import type { ReactNode } from 'react';
import {
  FormProvider as RHFFormProvider,
  useForm,
} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  formSchema,
  type FormValues,
  type ValidatedFormValues,
} from '@/app/schema/formSchema';

type Props = {
  children: ReactNode;
};

const FormProvider = ({ children }: Props) => {
  const methods = useForm<
    FormValues,
    unknown,
    ValidatedFormValues
  >({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
    defaultValues: {
      name: '',
      email: '',
      phoneNo: '',
      plan: '',
      option: '',
      addOn: {
        onlineService: true,
        largeStorage: true,
        customizable: false,
      },
    },
  });

  return (
    <RHFFormProvider {...methods}>
      {children}
    </RHFFormProvider>
  );
};

export default FormProvider;

