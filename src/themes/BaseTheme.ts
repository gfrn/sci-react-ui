import { createTheme } from "@mui/material/styles";

const BaseThemeOptions = {
  typography: {
    fontSize: 14,
  },
  colorSchemes: {
    light: {
      palette: {
        background: { default: "#f5f5f5" },
      },
    },
    dark: {
      palette: {
        background: { default: "#222" },
      },
    },
  },
};

const BaseTheme = createTheme(BaseThemeOptions);

export { BaseThemeOptions, BaseTheme };
