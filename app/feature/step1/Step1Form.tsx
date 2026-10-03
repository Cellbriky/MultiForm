'use client';
import React from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useFormStore } from '../../store/formstore';
import { useRouter } from 'next/navigation';
import { FormContainer, InputContent, Input, FormLabel, FormSection, FormField } from './styles';
import { useFormContext } from 'react-hook-form';
import {ErrorMessage} from '../../styles/style'
type step1Data = {
  name: string;
  email: string;
  phoneNo: string;
};
const Step1Form = () => {
  const router = useRouter();
  const { formData, updateForm } = useFormStore();
const {
  register,
  handleSubmit,
  reset,
  formState: { errors },
} = useFormContext<step1Data>();
  useEffect(() => {
    reset({
      name: formData.name,
      email: formData.email,
      phoneNo: formData.phoneNo,
    });
  }, [formData, reset]);
  const onSubmit = (data: step1Data) => {
    (updateForm(data), router.push('/step2'));
    console.log('Step 2 data:', updateForm);

    console.log('Form store:', {
      ...formData,
      ...updateForm,
    });
  };
  return (
    <div>
      <FormContainer id="step-form" onSubmit={handleSubmit(onSubmit)}>
        <FormSection>
          <FormField>
            <FormLabel htmlFor="name">Name</FormLabel>
            <InputContent>
              <Input
                id="name"
                type="text"
                placeholder="e.g. Stephen King"
                {...register('name', {
                  required: 'Name is required',
                })}
              />
              {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
            </InputContent>
          </FormField>
          <FormField>
            <FormLabel htmlFor="email">Email Address</FormLabel>
            <InputContent>
              <Input
                type="text"
                id="email"
                placeholder="e.g stephenKin@gmail.com"
                {...register('email', { required: 'Email is required' })}
              />
              {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
            </InputContent>
          </FormField>
          <FormField>
            <FormLabel htmlFor="phone">Phone Number</FormLabel>
            <InputContent>
              <Input
                type="text"
                placeholder="+234 506 6050"
                id="phone"
                {...register('phoneNo', { required: 'Phone Number is Required' })}
              />
              {errors.phoneNo && <ErrorMessage>{errors.phoneNo.message}</ErrorMessage>}
            </InputContent>
          </FormField>
        </FormSection>
      </FormContainer>
    </div>
  );
};

export default Step1Form;
