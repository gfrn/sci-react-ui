import React from "react";
import MuiButton from '@mui/material/Button';

interface WrapperProps {
  children: React.ReactNode;
}

const BasicButton = ({children, ...props}: WrapperProps) => {
  return <MuiButton {...props}>
    {children}
  </MuiButton>;
};

export {BasicButton};
