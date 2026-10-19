'use client';

import { useState } from 'react';
import { useFormStore } from '@/app/store/formstore';

type SubmitResult = {
  message?: string;
};

export function useSubmit() {
  const { formData } = useFormStore();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const submitForm = async (): Promise<boolean> => {
    if (isSubmitting || success) {
      return false;
    }

    setError(null);
    setSuccess(false);

    const { name, email, phoneNo, plan, planAmount, option, addOn } = formData;

    // Validate required form data before submitting.
    if (!name?.trim() || !email?.trim() || !phoneNo?.trim() || !plan || !option || !addOn) {
      setError('Please complete all required form steps.');
      return false;
    }

    const totalAmount = (planAmount ?? 0) + (addOn.serviceAmount ?? 0) + (addOn.storageAmount ?? 0);

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/form-submissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          phoneNo,
          plan,
          option,
          addOn: {
            onlineService: Boolean(addOn.onlineService),
            largeStorage: Boolean(addOn.largeStorage),
            customizable: Boolean(addOn.customizable),
          },
          totalAmount,
        }),
      });

      // Read the response as text first so an empty response
      // does not cause "Unexpected end of JSON input".
      const responseText = await response.text();

      let result: SubmitResult = {};

      if (responseText.trim()) {
        try {
          result = JSON.parse(responseText) as SubmitResult;
        } catch {
          console.error('Invalid API response:', response.status, responseText);

          throw new Error(
            `The server returned an invalid response (HTTP ${response.status}). Check your API route.`,
          );
        }
      }

      if (!response.ok) {
        throw new Error(result.message ?? `Submission failed (HTTP ${response.status}).`);
      }

      // A successful HTTP status with an empty body is also
      // accepted. Prefer returning JSON from your API route.
      setSuccess(true);

      return true;
    } catch (err: unknown) {
      console.error('Form submission error:', err);

      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');

      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    submitForm,
    isSubmitting,
    error,
    success,
  };
}
