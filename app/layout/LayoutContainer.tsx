import React from 'react';
import "../globals.css"
export const LayoutContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className="layoutContainer">{children}</div>;
};

export default LayoutContainer;
