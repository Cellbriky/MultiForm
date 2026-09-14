'use client';
import React from 'react';
import { Container } from './submit';
import { usePathname } from 'next/navigation';
type props = {
  formID: string;
};
const Submit = ({ formID }: props) => {
  const pathname=usePathname()
  return (
    <Container>
      {pathname === '/st' && <p>hello herer</p>}
      <button type="submit" form={formID}>
        submit
      </button>
    </Container>
  );
};

export default Submit;
