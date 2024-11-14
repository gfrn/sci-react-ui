import { createTheme, ThemeOptions } from "@mui/material/styles";

import { BaseThemeOptions } from "./BaseTheme";

const dlsLogoBlue = "#202740";
const dlsLogoYellow = "#facf07";

const DiamondTheme: ThemeOptions = createTheme({
  ...BaseThemeOptions,
  colorSchemes: {
    // https://zenoo.github.io/mui-theme-creator/
    light: {
      palette: {
        primary: {
          main: dlsLogoBlue,
          light: "#4C5266", // dark grey
          dark: "#161B2C", // dark blue
          contrastText: "#ffffff", // white
        },
        secondary: {
          main: dlsLogoYellow,
          light: "#FBD838", // light yellow
          dark: "#AF9004", // dark yellow
          contrastText: "#000000", // black
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: "#6175bd", //lightened version of {dlsLogoBlue}
          light: "#8090CA", // lighter blue
          dark: "#435184", // mid blue
          contrastText: "#ffffff", // white
        },
        secondary: {
          main: dlsLogoYellow,
          light: "#FBD838", // light yellow
          dark: "#AF9004", // dark yellow
          contrastText: "#000000", // black
        },
      },
    },
  },
});

export { DiamondTheme };
