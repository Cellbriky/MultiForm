'use client';

import React, { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { useFormStore } from '../../store/formstore';
import { useRouter } from 'next/navigation';
import { FormContainer, FormSection } from '../step1/styles';
import { ErrorMessage } from '../../styles/style';
import { type FormValues } from '../../schema/formSchema';
import plan from './step2.data';
import { pricing, getPlanPrice, type PlanType, BillingOption } from '../config/pricing';

import {
  FormField,
  PlanContainer,
  InputRadio,
  PlanDiv,
  Title,
  Overview,
  OptionContainer,
  OptionRadio,
  LabelTitle,
  RadioDiv,
  YearOverview,
} from './step2Form';

const Plans: Pick<plan, 'id' | 'name' | 'icon'>[] = [
  {
    id: 'arcade',
    name: 'Arcade',
    icon: '/icon-arcade.svg',
  },
  {
    id: 'advanced',
    name: 'Advanced',
    icon: '/icon-advanced.svg',
  },
  {
    id: 'pro',
    name: 'Pro',
    icon: '/icon-pro.svg',
  },
];

const Step2Form = () => {
  const router = useRouter();
  const { formData, updateForm } = useFormStore();

  const {
    register,
    trigger,
    getValues,
    reset,
    watch,
    formState: { errors },
  } = useFormContext<FormValues>();

  useEffect(() => {
    reset({
      plan: formData.plan,
      option: formData.option,
    });
  }, [formData.plan, formData.option, reset]);

  const selectedPlan = watch('plan');
  const selectedOption = watch('option');

  const onSubmit = async () => {
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

    console.log('Step 2 data:', updatedData);
  };

  return (
    <div>
      <FormContainer
        id="step-form"
        onSubmit={(event) => {
          event.preventDefault();
          onSubmit();
        }}
      >
        <FormSection>
          <FormField>
            <PlanContainer>
              {Plans.map((plan) => (
                <PlanDiv key={plan.id} htmlFor={plan.id} active={selectedPlan === plan.id}>
                  <img src={plan.icon} alt={plan.name} />

                  <div>
                    <Title>{plan.name}</Title>

                    <Overview>
                      ${pricing.plans[plan.id][selectedOption as 'monthly' | 'yearly']}/
                      {selectedOption === 'monthly' ? 'mo' : 'yr'}
                    </Overview>

                    <YearOverview>
                      {selectedOption === 'yearly' ? '2 months free' : ''}
                    </YearOverview>
                  </div>

                  <InputRadio type="radio" value={plan.id} id={plan.id} {...register('plan')} />
                </PlanDiv>
              ))}
            </PlanContainer>
          </FormField>

          {errors.plan && <ErrorMessage>{errors.plan.message}</ErrorMessage>}

          {/* Billing Option */}
          <OptionContainer>
            <LabelTitle htmlFor="monthly" active={selectedOption === 'monthly'}>
              Monthly
            </LabelTitle>

            <RadioDiv>
              <OptionRadio type="radio" value="monthly" id="monthly" {...register('option')} />

              <OptionRadio type="radio" value="yearly" id="yearly" {...register('option')} />
            </RadioDiv>

            <LabelTitle htmlFor="yearly" active={selectedOption === 'yearly'}>
              Yearly
            </LabelTitle>
          </OptionContainer>

          {errors.option && <ErrorMessage>{errors.option.message}</ErrorMessage>}
        </FormSection>
      </FormContainer>
    </div>
  );
};

export default Step2Form;
