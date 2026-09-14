'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useFormStore } from '../../store/formstore';
import { useRouter } from 'next/navigation';
import { FormContainer, InputContent, FormLabel, FormSection, FormField } from './styles';

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
              <input
                id="name"
                type="text"
                placeholder="e.g. Stephen King"
                {...register('name', {
                  required: 'Name is required',
                })}
              />
              {errors.name && <p>{errors.name.message}</p>}
            </InputContent>
          </FormField>
          <FormField>
            <FormLabel htmlFor="email">Email Address</FormLabel>
            <InputContent>
              <input
                type="text"
                id="email"
                placeholder="e.g stephenKin@gmail.com"
                {...register('email', { required: 'Email is required' })}
              />
              {errors.email && <p>{errors.email.message}</p>}
            </InputContent>
          </FormField>
          <FormField>
            <FormLabel htmlFor="phone">Phone Number</FormLabel>
            <InputContent>
              <input
                type="number"
                placeholder="+234 506 6050"
                id="phone"
                {...register('phoneNo', { required: 'Phone Number is Required' })}
              />
              {errors.phoneNo && <p>{errors.phoneNo.message}</p>}
            </InputContent>
          </FormField>
        </FormSection>
      </FormContainer>
    
    </div>
  );
};

export default Step1Form;
