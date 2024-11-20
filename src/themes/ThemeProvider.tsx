import * as React from "react";

import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";

import { BaseTheme } from "./BaseTheme";

export interface ThemeProviderProps {
  children: React.ReactNode;
  theme?: any;
}

const ThemeProvider = function ({
  children,
  theme,
  ...props
}: ThemeProviderProps) {
  return (
    <MuiThemeProvider theme={theme || BaseTheme} {...props}>
      {children}
    </MuiThemeProvider>
  );
};

export { ThemeProvider };
