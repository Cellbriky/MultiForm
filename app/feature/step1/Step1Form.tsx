'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useFormStore } from '../../store/formstore';
import { useRouter } from 'next/navigation';
import { FormContainer, InputContent, Error, Input, FormLabel, FormSection, FormField } from './styles';

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
    formState: { errors },
  } = useForm<step1Data>({
    defaultValues: {
      name: formData.name,
      email: formData.email,
      phoneNo: formData.phoneNo,
    },
  });
  const onSubmit = (data: step1Data) => {
    (updateForm(data), router.push('/step2'));
  };
  return (
    <div>
      <FormContainer id="step-one-form" onSubmit={handleSubmit(onSubmit)}>
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
              {errors.name && <Error>{errors.name.message}</Error>}
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
              {errors.email && <Error>{errors.email.message}</Error>}
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
              {errors.phoneNo && <Error>{errors.phoneNo.message}</Error>}
            </InputContent>
          </FormField>
        </FormSection>
      </FormContainer>
    </div>
  );
};

export default Step1Form;
