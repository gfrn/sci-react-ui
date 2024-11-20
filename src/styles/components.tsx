import MuiButton from "@mui/material/Button";

const Button = ({ customVariant = "default", ...props }) => {
  return <MuiButton {...props} className={customVariant} />;
};

export { Button };
