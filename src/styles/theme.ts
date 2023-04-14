import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  // for custom breakPoints
  breakpoints: {
    sidebar: "30em",
  },
  // fonts
  fonts: {
    heading: "Tilt Neon",
    body: "Tilt Neon",
  },
  // styles
  styles: {
    global: {
      // styles for the `*`
      "*": {
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
        transition: "0.4s all ease-out",
      },

      // styles for the `body`
      body: {
        bg: "#FEFEFF",
        maxW: "100vw",
      },
      // styles for the `a`
      a: {
        color: "inherit",
        textDecoration: "none",
      },
    },
  },
  colors: {},
});

export default theme;
