'use client';

import { FormContainer, FormSection, FormField } from '../step1/styles';
import { useFormStore } from '../../store/formstore';
import { useFormContext } from 'react-hook-form';
import { AddonDiv, LabelDiv, AddonH1, Overline, InputCheck, Amount, ErrorMessage } from './styles';
import { useRouter } from 'next/navigation';
import { step3Schema, type Step3Form } from '../../schema/formSchema';
import { useEffect } from 'react';
type Step3PageProps = {
  choice: 'monthly' | 'yearly';
};

const addOnsPlan = {
  onlineService: 1,
  largeStorage: 2,
};

const yearlyAddOns = {
  onlineService: 10,
  largeStorage: 20,
};

const Step3Page = ({ choice }: Step3PageProps) => {
  const { formData, updateForm } = useFormStore();
  const router = useRouter();
  const {
    register,
    trigger,
    getValues,
    reset,
    watch,
    formState: { errors },
  } = useFormContext<Step3Form>();
  useEffect(() => {
    reset({
      addOn: {
        onlineService: formData.addOn.onlineService,
        largeStorage: formData.addOn.largeStorage,
        customizable: formData.addOn.customizable,
      },
    });
  }, [formData, reset]);
  const selectService = watch('addOn.onlineService');
  const selectStorage = watch('addOn.largeStorage');
  const selectCustomizable = watch('addOn.customizable');

  const onSubmit = async () => {
    const isValid = await trigger(['addOn.onlineService', 'addOn.largeStorage']);
    if (!isValid) {
      return;
    }
    const data = getValues();
    const updatedData = {
      addOn: {
        onlineService: data.addOn.onlineService,
        largeStorage: data.addOn.largeStorage,
        customizable: data.addOn.customizable,
        serviceAmount: data.addOn.onlineService
          ? choice === 'monthly'
            ? addOnsPlan.onlineService
            : yearlyAddOns.onlineService
          : 0,
        storageAmount: data.addOn.largeStorage
          ? choice === 'monthly'
            ? addOnsPlan.largeStorage
            : yearlyAddOns.largeStorage
          : 0,
      },
    };
    updateForm(updatedData);
    router.push('/step4');
    console.log(formData);
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
            <LabelDiv htmlFor="service" active={selectService}>
              <InputCheck
                type="checkbox"
                id="service"
                {...register('addOn.onlineService', {
                  required: 'Please select this option to continue',
                })}
              />
              <AddonDiv>
                <AddonH1>Online Service</AddonH1>
                <Overline>Access to multiplayer games</Overline>
              </AddonDiv>
              {choice === 'monthly' ? <Amount>+$1/mo</Amount> : <Amount>+$10/yr</Amount>}
            </LabelDiv>
            {errors.addOn?.onlineService && (
              <ErrorMessage>{errors.addOn.onlineService.message}</ErrorMessage>
            )}
          </FormField>
          <FormField>
            <LabelDiv htmlFor="storage" active={selectStorage}>
              <InputCheck
                type="checkbox"
                id="storage"
                {...register('addOn.largeStorage', {
                  required: 'Please select this option to continue',
                })}
              />

              <AddonDiv>
                <AddonH1>Large Storage</AddonH1>
                <Overline>Extra 1TB of cloud save</Overline>
              </AddonDiv>

              {choice === 'monthly' ? <Amount>+$2/mo</Amount> : <Amount>+$20/yr</Amount>}
            </LabelDiv>
            {errors.addOn?.largeStorage && (
              <ErrorMessage>{errors.addOn.largeStorage.message}</ErrorMessage>
            )}
          </FormField>

          <FormField>
            <LabelDiv htmlFor="customizable" active={selectCustomizable}>
              <InputCheck
                type="checkbox"
                id="customizable"
                disabled
                {...register('addOn.customizable')}
              />

              <AddonDiv>
                <AddonH1>Customizable Profile</AddonH1>
                <Overline>Custom theme on your profile</Overline>
              </AddonDiv>

              {choice === 'monthly' ? <Amount>+$2/mo</Amount> : <Amount>+$20/yr</Amount>}
            </LabelDiv>
          </FormField>
        </FormSection>
      </FormContainer>
    </div>
  );
};

export default Step3Page;
