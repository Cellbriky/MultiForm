import React from 'react'
import Step2Form  from '../../feature/step2/Step2Form';
const step2 = () => {
  return (
    <div>
      <div className="pageContainer">
        <h1>Select your plans</h1>
        <div className="caption">You hva the options of monthly or yearly billing</div>
        <Step2Form/>
      </div>
    </div>
  );
}

export default step2
