// Colours from https://github.com/DiamondLightSource/web-ui-components
import { DiamondTheme } from "../themes/DiamondTheme";


const colours = {
  diamond: {
    50: { default: "#FBFBFB", _dark: "#525151" }, // white
    75: { default: "#F7F7F7", _dark: "#080808" }, // off white
    100: { default: "#E7ECEF", _dark: "#383838" }, // light grey
    200: { default: "#CBD5E0", _dark: "#030303" }, //  mid grey
    300: { default: "#39435E", _dark: "#5f709e" }, // dark blue-grey
    400: { default: "#9BBBFA", _dark: "#030405" }, // light blue
    500: { default: "#fcd021", _dark: "#050401" }, // yellow
    600: { default: "#385BBD", _dark: "#101a36" }, // mid blue
    700: { default: "#1040A1", _dark: "#071d4a" }, // royal blue
    800: { default: "#001d55", _dark: "#023496" }, // dark blue
  },
  colours: {
    primaryMain: DiamondTheme.palette.primary.main,
    primaryLight: DiamondTheme.palette.primary.light,
    primaryDark: DiamondTheme.palette.primary.dark,
    primaryContrastText: DiamondTheme.palette.primary.contrastText,
    secondaryMain: DiamondTheme.palette.secondary.main,
    secondaryLight: DiamondTheme.palette.secondary.light,
    secondaryDark: DiamondTheme.palette.secondary.dark,
    secondaryContrastText: DiamondTheme.palette.secondary.contrastText,
  }
};

const fillColours = ["#ff5733", "#19D3FF", "#FF9B40", "#FF2677", "#FF9B40"];

const getFillColour = (j: number) => fillColours[j % fillColours.length];

export { colours, getFillColour };
