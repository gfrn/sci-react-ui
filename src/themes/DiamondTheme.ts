import { createTheme, ThemeOptions } from '@mui/material/styles';
import { lighten } from '@material-ui/core/styles';

import {BaseThemeOptions} from "./BaseTheme";

const dlsLogoBlue = "#202740"
const dlsLogoYellow = "#facf07"

const DiamondTheme: ThemeOptions = createTheme({
  ...BaseThemeOptions,
  colorSchemes: {
    // https://zenoo.github.io/mui-theme-creator/
    light: {
      palette: {
        primary: {
          main: dlsLogoBlue,
          // contrastText: '#ffffff',
          // dark: '#161B2C',
          // light: '#4C5266',
        },
        secondary: {
            main: dlsLogoYellow,
            // light: '#FBD838',
            // dark: '#AF9004',
            // contrastText: '#000000',
        }
      },
    },
    dark: {
      palette: {
        primary: {
          main: '#6175bd',  //lightened version of {dlsLogoBlue}
          // light: '#8090CA',
          // dark: '#435184',
          // contrastText: '#ffffff',
        },
        secondary: {
          main: dlsLogoYellow,
          // light: '#FBD838',
          // dark: '#AF9004',
          // contrastText: '#000000',
        }
      },
    },
  },
});

export {DiamondTheme}