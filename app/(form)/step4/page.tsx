import React from 'react'
import Step4Form from '@/app/feature/step4/Step4Form'
import SuccessDialog from '@/app/feature/step4/suceessfullModal'
const page = () => {
  return (
    <div className="pageContainer">
      <h1>Finishing U</h1>
      <div className="caption">Double-check everything looks OK before confirming.</div>
      <Step4Form />
    </div>
  );
}

export default page
