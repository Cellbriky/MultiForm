'use client';

import React, { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { ErrorMessage } from '../../styles/style';
import { type FormValues } from '../../schema/formSchema';
import { useFormStore } from '../../store/formstore';

import { FormContainer, InputContent, Input, FormLabel, FormSection, FormField } from './styles';

const Step1Form = () => {
  const router = useRouter();

  const { formData, updateForm } = useFormStore();

  const {
    register,
    trigger,
    getValues,
    reset,
    formState: { errors },
  } = useFormContext<FormValues>();

  useEffect(() => {
    reset({
      name: formData.name,
      email: formData.email,
      phoneNo: formData.phoneNo,
    });
  }, [formData, reset]);

  const onSubmit = async () => {
    // Validate only Step 1 fields
    const isValid = await trigger(['name', 'email', 'phoneNo']);

    if (!isValid) {
      return;
    }

    // Get the validated Step 1 values
    const data = getValues(['name', 'email', 'phoneNo']);

    const updatedForm=({
      name: data[0],
      email: data[1],
      phoneNo: data[2],
    });
    updateForm(updatedForm);
    router.push('/step2');
    console.log('Step 1 data:', updatedForm);

  };

  return (
    <FormContainer
      id="step-form"
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit();
      }}
    >
      <FormSection>
        <FormField>
          <FormLabel htmlFor="name">Name</FormLabel>

          <InputContent>
            <Input id="name" type="text" placeholder="e.g. Stephen King" {...register('name')} />

            {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
          </InputContent>
        </FormField>

        <FormField>
          <FormLabel htmlFor="email">Email Address</FormLabel>

          <InputContent>
            <Input
              id="email"
              type="email"
              placeholder="e.g. stephenKing@gmail.com"
              {...register('email')}
            />

            {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
          </InputContent>
        </FormField>

        <FormField>
          <FormLabel htmlFor="phone">Phone Number</FormLabel>

          <InputContent>
            <Input id="phone" type="text" placeholder="+234 506 6050" {...register('phoneNo')} />

            {errors.phoneNo && <ErrorMessage>{errors.phoneNo.message}</ErrorMessage>}
          </InputContent>
        </FormField>
      </FormSection>
    </FormContainer>
  );
};

export default Step1Form;
