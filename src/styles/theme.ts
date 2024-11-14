import { createTheme } from "@mui/material/styles";
import { colours } from "./colours";

const theme = createTheme({
  palette: {
    mode: "light",
    ...colours,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderBottom: '2px solid rgba(0,0,0,0.2)',
          textTransform: 'none',
          '&.default': {
            color: colours.diamondII.p_contrastText.light, 
            backgroundColor: colours.diamondII.p_dark.light,
            '&:hover': {
              backgroundImage: 'linear-gradient(rgb(0 0 0/30%) 0 0)',
              '&:disabled': {
                backgroundColor: colours.diamondII.p_light.light,
              },
            },
          },
          '&.onBlue': {
            color: colours.diamondII.s_main.light,
            borderColor: colours.diamondII.s_main.light,
            border: '1px solid',
            fontSize: '0.875rem',
            '&:hover': {
              color:  colours.diamondII.p_dark.light,
              backgroundColor: colours.diamondII.s_main.light,
            },
        },
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 768,
      lg: 992,
      xl: 1280,
    },
  },
});

export default theme;
