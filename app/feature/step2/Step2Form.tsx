'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { useFormStore } from '../../store/formstore';
import { useRouter } from 'next/navigation';
import { FormContainer, FormSection } from '../step1/styles';
import { useFormContext } from 'react-hook-form';
import {ErrorMessage} from '../../styles/style'
import {
  FormField,
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

// Monthly prices
const plans = {
  arcade: 9,
  advanced: 12,
  pro: 15,
};

// Yearly prices
const yearlyPlans = {
  arcade: 90,
  advanced: 120,
  pro: 150,
};

type Plan = keyof typeof plans;

type BillingOption = 'monthly' | 'yearly' ;

type Step2Data = {
  plan: Plan;
  option: BillingOption;
};

const Step2Form = () => {
  const router = useRouter();

  const { formData, updateForm } = useFormStore();

const {
  register,
  handleSubmit,
  reset,
  watch,
  formState: { errors },
} = useFormContext<Step2Data>();

  const selectedPlan = watch('plan');
  const selectedOption = watch('option');

  const selectedPlans = selectedOption === 'yearly' ? yearlyPlans : plans;

  const onSubmit = (data: Step2Data) => {
    const amount = data.option === 'monthly' ? plans[data.plan] : yearlyPlans[data.plan];

    const updatedData = {
      ...data,
      amount,
    };

    updateForm(updatedData);

    console.log('Step 2 data:', updatedData);

    console.log('Form store:', {
      ...formData,
      ...updatedData,
    });

    router.push(`/step3/${data.option}`);
  };

  return (
    <div>
      <FormContainer id="step-form" onSubmit={handleSubmit(onSubmit)}>
        <FormSection>
          <FormField>
            {/* Arcade */}
            <PlanDiv htmlFor="arcade" active={selectedPlan === 'arcade'}>
              <img src="/icon-arcade.svg" alt="Arcade" />

              <div>
                <Title>Arcade</Title>

                <Overview>
                  ${selectedPlans.arcade}/{selectedOption === 'yearly' ? 'yr' : 'mo'}
                </Overview>

                <YearOverview>{selectedOption === 'yearly' ? '2 months free' : ''}</YearOverview>
              </div>

              <InputRadio
                type="radio"
                value="arcade"
                id="arcade"
                {...register('plan', {
                  required: 'Please select a plan to continue',
                })}
              />
            </PlanDiv>

            {/* Advanced */}
            <PlanDiv htmlFor="advanced" active={selectedPlan === 'advanced'}>
              <img src="/icon-advanced.svg" alt="Advanced" />

              <div>
                <Title>Advanced</Title>

                <Overview>
                  ${selectedPlans.advanced}/{selectedOption === 'yearly' ? 'yr' : 'mo'}
                </Overview>

                <YearOverview>{selectedOption === 'yearly' ? '2 months free' : ''}</YearOverview>
              </div>

              <InputRadio
                type="radio"
                value="advanced"
                id="advanced"
                {...register('plan', {
                  required: 'Please select a plan to continue',
                })}
              />
            </PlanDiv>

            {/* Pro */}
            <PlanDiv htmlFor="pro" active={selectedPlan === 'pro'}>
              <img src="/icon-pro.svg" alt="Pro" />

              <div>
                <Title>Pro</Title>

                <Overview>
                  ${selectedPlans.pro}/{selectedOption === 'yearly' ? 'yr' : 'mo'}
                </Overview>

                <YearOverview>{selectedOption === 'yearly' ? '2 months free' : ''}</YearOverview>
              </div>

              <InputRadio
                type="radio"
                value="pro"
                id="pro"
                {...register('plan', {
                  required: 'Please select a plan to continue',
                })}
              />
            </PlanDiv>
          </FormField>

          {errors.plan && <ErrorMessage>{errors.plan.message}</ErrorMessage>}

          {/* Billing Option */}
          {/* Billing Option */}
          <OptionContainer>
            <LabelTitle htmlFor="monthly" active={selectedOption === 'monthly'}>
              Monthly
            </LabelTitle>

            <RadioDiv>
              <OptionRadio
                type="radio"
                value="monthly"
                id="monthly"
                {...register('option', {
                  required: 'Please select a billing option to continue.',
                })}
              />

              <OptionRadio type="radio" value="yearly" id="yearly" {...register('option')} />
            </RadioDiv>

            <LabelTitle htmlFor="yearly" active={selectedOption === 'yearly'}>
              Yearly
            </LabelTitle>
          </OptionContainer>

          {errors.option && <ErrorMessage role="alert">{errors.option.message}</ErrorMessage>}

          {errors.option && <ErrorMessage>{errors.option.message}</ErrorMessage>}
        </FormSection>
      </FormContainer>
    </div>
  );
};

export default Step2Form;
