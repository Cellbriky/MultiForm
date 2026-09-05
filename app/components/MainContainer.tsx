import React from 'react'
import { Box } from '@mui/material';
import "../globals.css"
const MainContainer = ({ children, }: {
    children: React.ReactNode;
}) => {

    
  return (
    <div className="main-container">
      {children}
    </div>
  )
}

export default MainContainer
