'use client';
import React from 'react';
import { Container } from './styles';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { Button } from '@mui/material';
type props = {
  formID: string;
};
const Submit = ({ formID }: props) => {
  const pathname = usePathname();
  const router = useRouter();
  const handleBackButton = () => {
    if (pathname === '/step2') {
      router.push('/');
    }

    if (pathname === '/step3/monthly' || pathname === '/step3/yearly') {
      router.push('/step2');
    }

    if (pathname === '/step4') {
      router.push('/step3/monthly');
    }
  };
const isStep1 = pathname === '/';
const isStep2 = pathname === '/step2';
const isStep3 = pathname === '/step3/monthly' || pathname === '/step3/yearly';
  const isStep4 = pathname === '/step4';
  return (
    <Container>
      {isStep1 && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'end',
          }}
        >
          <button type="submit" form={formID}>
            Submit
          </button>
        </div>
      )}
      {isStep2 && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            color: '#92929c',
          }}
        >
          <div style={{ fontWeight: 500, fontSize: '14px' }} onClick={handleBackButton}>
            Go Back
          </div>
          <button type="submit" form={formID}>
            Next Step
          </button>
        </div>
      )}
      {isStep3 && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            color: '#92929c',
          }}
        >
          <div style={{ fontWeight: 500, fontSize: '14px' }} onClick={handleBackButton}>
            Go Back
          </div>
          <button type="submit" form={formID}>
            Next Step
          </button>
        </div>
      )}
      {isStep4 && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            color: '#92929c',
          }}
        >
          <div style={{ fontWeight: 500, fontSize: '14px' }} onClick={handleBackButton}>
            Go Back
          </div>
          <button type="submit" form={formID}>
            Next Step
          </button>
        </div>
      )}
    </Container>
  );
};

export default Submit;
