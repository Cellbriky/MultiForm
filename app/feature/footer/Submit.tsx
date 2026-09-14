'use client';
import React from 'react';
import { Container } from './submit';
type props = {
  formID: string;
};
const Submit = ({ formID }: props) => {
  return (
    <Container>
      <button type="submit" form={formID}>
        submit
      </button>
    </Container>
  );
};

export default Submit;
