"use client"
import React from 'react'
import { useFormStore } from '@/app/store/formstore'
const Step4Form = () => {
    const { formData, updateForm } = useFormStore();
    const data = JSON.stringify(formData, null, 2);
  return (
    <div>
      <p>{formData.email}</p>
      <p>{formData.name}</p>
      <p>{formData.phoneNo}</p>
      <p>{formData.plan}</p>
      <p>{formData.option}</p>
      <p>{formData.amount}</p>

      <p>{formData.addOn.onlineService ? 'Online Service' : ''}</p>
      <p>{formData.addOn.largeStorage ? 'Large Storage' : ''}</p>
    </div>
  );
}

export default Step4Form
