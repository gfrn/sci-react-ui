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
            color: colours.diamond[50].default,
            backgroundColor: colours.diamond[600].default,
            '&:hover': {
              backgroundImage: 'linear-gradient(rgb(0 0 0/30%) 0 0)',
              '&:disabled': {
                backgroundColor: colours.diamond[600].default,
              },
            },
          },
          '&.pgSelected': {
            backgroundColor: colours.diamond[600].default,
            color: colours.diamond[50].default,
            cursor: 'default',
          },
          '&.pgNotSelected': {
            backgroundColor: 'grey',
            color: 'charcoal',
            fontSize: '0.875rem',
            '&:hover': {
              backgroundColor: colours.diamond[200].default,
            },
          },
          '&.onBlue': {
            color: colours.diamond[500].default,
            borderColor: colours.diamond[500].default,
            border: '1px solid',
            fontSize: '0.875rem',
            '&:hover': {
              color: colours.diamond[300].default,
              backgroundColor: colours.diamond[500].default,
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
