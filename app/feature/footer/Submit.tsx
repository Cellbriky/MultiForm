'use client';

import React, { useState } from 'react';
import { Container, BackButton } from './styles';
import { usePathname, useRouter } from 'next/navigation';
import { useSubmit } from '@/app/hook/useSubmit';
import SuccessDialog from '@/app/feature/step4/suceessfullModal';

type Props = {
  formID: string;
};

const Submit = ({ formID }: Props) => {
  const pathname = usePathname();
  const router = useRouter();

  const { submitForm, isSubmitting, error, success } = useSubmit();

  const [showSuccessDialog, setShowSuccessDialog] = useState(false);

  const isStep1 = pathname === '/';
  const isStep2 = pathname === '/step2';

  const isStep3 = pathname === '/step3/monthly' || pathname === '/step3/yearly';

  const isStep4 = pathname === '/step4';

  const handleBackButton = () => {
    if (pathname === '/step2') {
      router.push('/');
    } else if (isStep3) {
      router.push('/step2');
    } else if (isStep4) {
      router.push('/step3/monthly');
    }
  };

  const handleConfirm = async () => {
    const submitted = await submitForm();

    if (submitted) {
      setShowSuccessDialog(true);
    }
  };

  return (
    <Container>
      {isStep1 && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <button type="submit" form={formID}>
            Next Step
          </button>
        </div>
      )}

      {(isStep2 || isStep3) && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            color: '#92929c',
          }}
        >
          <div onClick={handleBackButton}>Go Back</div>

          <button type="submit" form={formID}>
            Next Step
          </button>
        </div>
      )}

      {isStep4 && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          }}
        >
          {error && (
            <p role="alert" style={{ color: '#dc2626', margin: 0 }}>
              {error}
            </p>
          )}

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              color: '#92929c',
            }}
          >
            <button
              style={{ backgroundColor: '#fff', color: '#92929c' }}
              type="button"
              onClick={handleBackButton}
              disabled={isSubmitting}
            >
              Go Back
            </button>

            <button
              type="button"
              onClick={() => void handleConfirm()}
              disabled={isSubmitting || success}
              style={{
                backgroundColor: '#483FFE',
                color: '#fff',
                opacity: isSubmitting ? 0.7 : 1,
                cursor: isSubmitting ? 'wait' : 'pointer',
              }}
            >
              {isSubmitting ? 'Submitting...' : success ? 'Confirmed' : 'Confirm'}
            </button>
          </div>
        </div>
      )}

      <SuccessDialog open={showSuccessDialog} onClose={() => setShowSuccessDialog(false)} />
    </Container>
  );
};

export default Submit;
