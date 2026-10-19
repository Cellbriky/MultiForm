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
  TotalContainer,
  TotalLabel,
  TotalAmount,
} from './styles';

const Step4Form = () => {
  const { formData } = useFormStore();

  const { plan, planAmount, option, addOn } = formData;

  const billingPeriod = option === 'monthly' ? 'mo' : 'yr';

  const serviceAmount = addOn?.serviceAmount ?? 0;
  const storageAmount = addOn?.storageAmount ?? 0;

  const totalAmount = (planAmount ?? 0) + serviceAmount + storageAmount;

  const formattedPlan = plan ? plan.charAt(0).toUpperCase() + plan.slice(1) : 'No plan selected';

  const formattedOption = option
    ? option.charAt(0).toUpperCase() + option.slice(1)
    : 'No billing option selected';

  return (
    <Container>
      <SectionOne>
        <Grid>
          <GridDivBtm>
            <H1>
              {formattedPlan} ({formattedOption})
              <Change>
                <Link href="/step2">Change</Link>
              </Change>
            </H1>

            <OptionHeader>
              ${planAmount ?? 0}/{billingPeriod}
            </OptionHeader>
          </GridDivBtm>

          {addOn?.onlineService && (
            <GridDiv>
              <p>Online Service</p>
              <OptionDiv>
                ${serviceAmount}/{billingPeriod}
              </OptionDiv>
            </GridDiv>
          )}

          {addOn?.largeStorage && (
            <GridDiv>
              <p>Large Storage</p>
              <OptionDiv>
                ${storageAmount}/{billingPeriod}
              </OptionDiv>
            </GridDiv>
          )}
        </Grid>
      </SectionOne>

      <SectionTwo>
        <TotalContainer>
          <TotalLabel>Total (per {option || 'billing period'})</TotalLabel>

          <TotalAmount>
            ${totalAmount}/{billingPeriod}
          </TotalAmount>
        </TotalContainer>
      </SectionTwo>
    </Container>
  );
};

export default Step4Form;
