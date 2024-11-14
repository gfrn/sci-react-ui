import Button, {ButtonProps} from '@mui/material/Button';

const BasicButton = ({children, ...props} : ButtonProps ) => {
  return <Button {...props}>
    {children}
  </Button>;
};

export {BasicButton};