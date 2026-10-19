'use client';
import Link from 'next/link';
import React from 'react';
import { useFormStore } from '@/app/store/formstore';
import {
  Container,
  SectionOne,
  SectionTwo,
  Grid,
  GridDivBtm,
  GridDiv,
  H1,
  Change,
  OptionHeader,
  OptionDiv,
} from './styles';

const Step4Form = () => {
  const { formData } = useFormStore();
  const { plan, planAmount, option, addOn } = formData;
  const billingPeriod = option === 'monthly' ? 'mo' : 'yr';
  const totalAmount = planAmount + addOn.serviceAmount + addOn.storageAmount;
  return (
    <Container>
      <SectionOne>
        <Grid>
          <GridDivBtm>
            <H1>
              {plan.charAt(0).toUpperCase() + plan.slice(1)} (
              {option.charAt(0).toUpperCase() + option.slice(1)})
              <Change>
                <Link href={'/step2'}>Change</Link>
              </Change>
            </H1>
            <OptionHeader>
              ${planAmount}/{billingPeriod}
            </OptionHeader>
          </GridDivBtm>
          {addOn?.onlineService && (
            <GridDiv>
              <p>Online Service</p>
              <OptionDiv>
                ${addOn.serviceAmount}/{billingPeriod}
              </OptionDiv>
            </GridDiv>
          )}

          {addOn?.largeStorage && (
            <GridDiv>
              <p>Large Storage</p>
              <OptionDiv>
                ${addOn.storageAmount}/{billingPeriod}
              </OptionDiv>
            </GridDiv>
          )}
        </Grid>
      </SectionOne>

      <SectionTwo>
        <h3>Selected Add-ons</h3>
        <div>
          <div>Total</div>
          {totalAmount}
        </div>
      </SectionTwo>
    </Container>
  );
};

export default Step4Form;
