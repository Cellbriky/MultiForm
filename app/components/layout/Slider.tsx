'use client';

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';

import { useSubmit } from '../../hook/useStepValidation';
import { useFormStore } from '../../store/formstore';

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

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();

  const { submitStep1, submitStep2, submitStep3 } = useSubmit();
  const { formData } = useFormStore();

  // Navigate to the previous step
  const handleBack = () => {
    switch (pathname) {
      case '/step2':
        router.push('/');
        break;

      case '/step3/monthly':
      case '/step3/yearly':
        router.push('/step2');
        break;

      case '/step4':
        router.push(`/step3/${formData.option}`);
        break;

      default:
        break;
    }
  };

  // Validate Step 1 before navigating forward
  const handleSubmit1 = async (
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault();
    await submitStep1();
  };

  // Validate Step 2 before navigating forward
  const handleSubmit2 = async (
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault();
    await submitStep2();
  };

  // Validate Step 3 before navigating forward
  const handleSubmit3 = async (
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault();
    await submitStep3();
  };

  return (
    <HeaderContainer>
      <NavContainer>
        <NavList>
          {/* Step 1 */}
          <NavItem>
            <NavLink
              href="/"
              onClick={(event) => {
                event.preventDefault();
                handleBack();
                if (pathname !== '/') {
                  router.push('/');
                }
              }}
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

          {/* Step 2 */}
          <NavItem>
            <NavLink
              href="/step2"
              onClick={
                pathname === '/'
                  ? handleSubmit1
                  : (event) => {
                      event.preventDefault();
                      if (pathname !== '/step2') {
                        router.push('/step2');
                      }
                    }
              }
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

          {/* Step 3 */}
          <NavItem>
            <NavLink
              href={`/step3/${formData.option}`}
              onClick={
                pathname==='/' || pathname === '/step2' || pathname === '/step3/monthly' || pathname === '/step3/yearly' || pathname === '/step4'
                  ? handleSubmit2
                  : (event) => {
                      event.preventDefault();
                      if (
                        pathname !== '/step3/monthly' &&
                        pathname !== '/step3/yearly'
                      ) {
                        router.push(`/step3/${formData.option}`);
                      }
                    }
              }
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

          {/* Step 4 */}
          <NavItem>
            <NavLink
              href="/step4"
              onClick={
                pathname === '/' || pathname === '/step2' ||
                pathname === '/step3/monthly' ||
                pathname === '/step3/yearly'
                  ? handleSubmit3
                  : (event) => {
                      event.preventDefault();
                      if (pathname !== '/step4') {
                        router.push('/step4');
                      }
                    }
              }
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
