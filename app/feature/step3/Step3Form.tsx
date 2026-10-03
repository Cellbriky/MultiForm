'use client';

import { FormContainer, FormSection, FormField } from '../step1/styles';
import { useFormStore } from '../../store/formstore';
import { useForm } from 'react-hook-form';
import { AddonDiv, LabelDiv, AddonH1, Overline, InputCheck, Amount, ErrorMessage } from './styles';
import { useRouter } from 'next/navigation';
import { useFormContext } from 'react-hook-form';
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

type Step3Data = {
  onlineService: boolean;
  largeStorage: boolean;
  customizable: boolean;
};

const Step3Page = ({ choice }: Step3PageProps) => {
  const { formData, updateForm } = useFormStore();
  const router=useRouter()
const {
  register,
  handleSubmit,
  reset,
  watch,
  formState: { errors },
} = useFormContext<Step3Data>();

  const selectService = watch('onlineService');
  const selectStorage = watch('largeStorage');
  const selectCustomizable = watch('customizable');

  const selectedAddOns = choice === 'monthly' ? addOnsPlan : yearlyAddOns;

  const onSubmit = (data: Step3Data) => {
    const updatedData = {
      addOn: {
        onlineService: data.onlineService,
        largeStorage: data.largeStorage,
        customizable: data.customizable,
        serviceAmount: data.onlineService ? selectedAddOns.onlineService : 0,
        storageAmount: data.largeStorage ? selectedAddOns.largeStorage : 0,
      },
    };

    updateForm(updatedData);
    router.push("/step4")
    console.log('Step 2 data:', updatedData);

    console.log('Form store:', {
      ...formData,
      ...updatedData,
    });
  };

  return (
    <div>
      <FormContainer id="step-form" onSubmit={handleSubmit(onSubmit)}>
        <FormSection>
          <FormField>
            <LabelDiv htmlFor="service" active={selectService}>
              <InputCheck
                type="checkbox"
                id="service"
                {...register('onlineService', {
                  required: 'Please select this option to continue',
                })}
              />

              <AddonDiv>
                <AddonH1>Online Service</AddonH1>
                <Overline>Access to multiplayer games</Overline>
              </AddonDiv>

              {choice === 'monthly' ? <Amount>+$1/mo</Amount> : <Amount>+$10/yr</Amount>}
            </LabelDiv>
            {errors.onlineService && <ErrorMessage>{errors.onlineService.message}</ErrorMessage>}
          </FormField>

          <FormField>
            <LabelDiv htmlFor="storage" active={selectStorage}>
              <InputCheck
                type="checkbox"
                id="storage"
                {...register('largeStorage', { required: 'Please select this option to continue' })}
              />

              <AddonDiv>
                <AddonH1>Large Storage</AddonH1>
                <Overline>Extra 1TB of cloud save</Overline>
              </AddonDiv>

              {choice === 'monthly' ? <Amount>+$2/mo</Amount> : <Amount>+$20/yr</Amount>}
            </LabelDiv>
            {errors.largeStorage && <ErrorMessage>{errors.largeStorage.message}</ErrorMessage>}
          </FormField>

          <FormField>
            <LabelDiv htmlFor="customizable" active={selectCustomizable}>
              <InputCheck
                type="checkbox"
                id="customizable"
                disabled
                {...register('customizable')}
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
