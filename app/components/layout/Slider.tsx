'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { useFormContext } from 'react-hook-form';
import { useSubmit } from '@/app/hook/useStepValidation';
import { Step1Form, Step2Form, Step3Form } from '@/app/schema/formSchema';
import {
  HeaderContainer,
  NavContainer,
  NavList,
  NavItem,
  NavCaption,
  NavName,
  NavMenu,
  NavNumber,
  NavLink,
} from '../../styles/Header';


type FormValues = Step1Form & Step2Form & Step3Form;

const Header = () => {
  const pathname = usePathname();

  const { handleSubmit } = useFormContext<FormValues>();

  const { submitStep1, submitStep2, submitStep3 } = useSubmit();

  const handleStepClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    step: number,
  ) => {
    event.preventDefault();

    if (step === 1) {
      handleSubmit((data) => {
        submitStep1(data);
      })();

      return;
    }

    if (step === 2) {
      handleSubmit((data) => {
        submitStep2(data);
      })();

      return;
    }

    if (step === 3) {
      handleSubmit((data) => {
        submitStep3(data);
      })();

      return;
    }
  };

  return (
    <HeaderContainer>
      <NavContainer>
        <NavList>

          <NavItem>
            <NavLink
              href="/"
              onClick={(event) => handleStepClick(event, 1)}
            >
              <NavNumber active={pathname === '/'}>
                1
              </NavNumber>

              <NavMenu>
                <NavCaption>STEP 1</NavCaption>
                <NavName>YOUR INFO</NavName>
              </NavMenu>
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              href="/step2"
              onClick={(event) => handleStepClick(event, 2)}
            >
              <NavNumber active={pathname === '/step2'}>
                2
              </NavNumber>

              <NavMenu>
                <NavCaption>STEP 2</NavCaption>
                <NavName>SELECT PLAN</NavName>
              </NavMenu>
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              href="/step3/monthly"
              onClick={(event) => handleStepClick(event, 3)}
            >
              <NavNumber
                active={
                  pathname === '/step3/monthly' ||
                  pathname === '/step3/yearly'
                }
              >
                3
              </NavNumber>

              <NavMenu>
                <NavCaption>STEP 3</NavCaption>
                <NavName>ADD-ONS</NavName>
              </NavMenu>
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              href="/step4"
              onClick={(event) => {
                event.preventDefault();

                handleSubmit((data) => {
                  submitStep3(data);
                })();
              }}
            >
              <NavNumber active={pathname === '/step4'}>
                4
              </NavNumber>

              <NavMenu>
                <NavCaption>STEP 4</NavCaption>
                <NavName>SUMMARY</NavName>
              </NavMenu>
            </NavLink>
          </NavItem>

        </NavList>
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header;

