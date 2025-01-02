import React from "react";
import MuiButton from "@mui/material/Button";

interface ButtonProps {
  customVariant?: string;
  [key: string]: unknown;
}

const Button: React.FC<ButtonProps> = ({
  customVariant = "default",
  ...props
}) => {
  return <MuiButton {...props} className={customVariant} />;
};

export { Button };
