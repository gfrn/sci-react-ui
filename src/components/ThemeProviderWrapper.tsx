import { ReactNode } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../styles/theme';

interface ThemeProviderWrapperProps {
  children: ReactNode;
}

const ThemeProviderWrapper = ({ children }: ThemeProviderWrapperProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeProviderWrapper;
