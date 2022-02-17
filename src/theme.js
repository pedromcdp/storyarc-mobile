import { extendTheme } from "native-base";

export const theme = extendTheme({
  colors: {
    verde: {
      50: "#37B777",
    },
    cinza: {
      50: "#767577",
    },
    lightGrey: {
      50: "#E2E2E2",
    },
  },
  config: {
    useSystemColorMode: false,
    initialColorMode: "light",
    dependencies: {
      "linear-gradient": require("expo-linear-gradient").LinearGradient,
    },
  },
});

// const config = {
//   useSystemColorMode: false,
//   initialColorMode: "light",
//   dependencies: {
//     "linear-gradient": require("expo-linear-gradient").LinearGradient,
//   },
// };

// const colors = {
//   primary: {
//     50: "#EEF2F6",
//     100: "#CFD9E7",
//     200: "#B1C1D8",
//     300: "#92A9C9",
//     400: "#7491B9",
//     500: "#5578AA",
//     600: "#446088",
//     700: "#334866",
//     800: "#223044",
//     900: "#111822",
//   },
// };

// export const theme = extendTheme({ config, colors });
