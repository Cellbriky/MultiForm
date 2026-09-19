'use client';
import { FormContainer, FormSection, FormField } from '../step1/styles';
import { useRouter } from 'next/navigation';
import { useFormStore } from '../../store/formstore';
import { useForm } from 'react-hook-form';
import {
  AddonDiv,
  LabelDiv,
  AddonH1,
  Overline,
  InputCheck ,
  Amount
} from './styles';
import CheckIcon from '@mui/icons-material/Check';
type Step3PageProps = {
  choice: 'monthly' | 'yearly';
};
type step3Data = {
  onlineService: boolean;
  largeStorage: boolean;
};
const Step3Page = ({ choice }: Step3PageProps) => {
  console.log(choice);
  const router = useRouter();
  const { formData, updateForm } = useFormStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<step3Data>({
    defaultValues: {
      onlineService: false,
      largeStorage: false,
    },
  });
  const selectService = watch('onlineService');
  const selectStorage = watch('largeStorage');
  const onSubmit = (data: step3Data) => {};
  return (
    <div>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <FormSection>
          <FormField>
            <LabelDiv htmlFor="service" active={selectService === true}>
              <InputCheck
                type="checkbox"
                id="service"
                {...register('onlineService', {
                  required: '',
                })}
              />

              <AddonDiv>
                <AddonH1>Online Service</AddonH1>
                <Overline>Access to multiplayer games</Overline>
              </AddonDiv>
              <Amount>+$1/mo</Amount>
            </LabelDiv>
          </FormField>
        </FormSection>
      </FormContainer>
    </div>
  );
};

export default Step3Page;
