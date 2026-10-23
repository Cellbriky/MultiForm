'use client';

import React, { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { useFormStore } from '../../store/formstore';
import { useRouter } from 'next/navigation';
import { FormContainer, FormSection } from '../step1/styles';
import { ErrorMessage } from '../../styles/style';
import { type FormValues } from '../../schema/formSchema';
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

  const selectedPlans = selectedOption === 'yearly' ? yearlyPlans : plans;

  const onSubmit = async () => {
    const isValid = await trigger(['plan', 'option']);
    if (!isValid) {
      return;
    }
    const data = getValues(['plan', 'option']);
    const updatedData = {
      plan: data[0],
      option: data[1],
      planAmount: selectedPlans[data[0] as keyof typeof selectedPlans],
    };
    updateForm(updatedData);
    router.push(`/step3/${data[1]}`);
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
            {/* Arcade */}
            <PlanContainer>
              <PlanDiv htmlFor="arcade" active={selectedPlan === 'arcade'}>
                <img src="/icon-arcade.svg" alt="Arcade" />
                <div>
                  <Title>Arcade</Title>
                  <Overview>
                    ${selectedPlans.arcade}/{selectedOption === 'yearly' ? 'yr' : 'mo'}
                  </Overview>
                  <YearOverview>{selectedOption === 'yearly' ? '2 months free' : ''}</YearOverview>
                </div>
                <InputRadio type="radio" value="arcade" id="arcade" {...register('plan')} />
              </PlanDiv>
            </PlanContainer>
            {/* Advanced */}
            <PlanContainer>
              <PlanDiv htmlFor="advanced" active={selectedPlan === 'advanced'}>
                <img src="/icon-advanced.svg" alt="Advanced" />
                <div>
                  <Title>Advanced</Title>
                  <Overview>
                    ${selectedPlans.advanced}/{selectedOption === 'yearly' ? 'yr' : 'mo'}
                  </Overview>
                  <YearOverview>{selectedOption === 'yearly' ? '2 months free' : ''}</YearOverview>
                </div>
                <InputRadio type="radio" value="advanced" id="advanced" {...register('plan')} />
              </PlanDiv>
            </PlanContainer>
            {/* Pro */}
            <PlanContainer>
              <PlanDiv htmlFor="pro" active={selectedPlan === 'pro'}>
                <img src="/icon-pro.svg" alt="Pro" />

                <div>
                  <Title>Pro</Title>

                  <Overview>
                    ${selectedPlans.pro}/{selectedOption === 'yearly' ? 'yr' : 'mo'}
                  </Overview>

                  <YearOverview>{selectedOption === 'yearly' ? '2 months free' : ''}</YearOverview>
                </div>

                <InputRadio type="radio" value="pro" id="pro" {...register('plan')} />
              </PlanDiv>
            </PlanContainer>
          </FormField>

          {errors.plan && <ErrorMessage>{errors.plan.message}</ErrorMessage>}

          {/* Billing Option */}
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
