import React from 'react'
import { Box } from '@mui/material'
import { PageContainer } from '../styles/Step1'
import '../globals.css';
import Step1Form from '../feature/step1/Step1Form';
const page = () => {
  return (
    <div className="pageContainer">
      <h1>Personal Info</h1>
      <div className='caption'>Please Provide Your name, email address, and phone number.</div>
      <Step1Form/>
    </div>
  )
}

export default page
