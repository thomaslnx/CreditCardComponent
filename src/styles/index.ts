import { extendTheme } from "@chakra-ui/react";

const Container = {
  baseStyle: {
    backgroundColor: "#222831",
    color: "#ffffff"
  },
  sizes: {
    xl: {
      h: "100vh",
      maxWidth: "100vw",
      margin: 0,
      padding: 0,
    } 
  }
}

const Box = {
  baseStyle: {
    backgroundColor: "#ffffff",
    color: "#234529",
    fontSize: 34,
    width: 350,
    height: 222,
    minWidth: 350,
    margin: "auto auto",
    borderRadius: 10,
    boxShadow: `0px 0px 0.25em rgba(255,255,255, 0.6)`,
  },
  sizes: {
  },
  variants: {},
  defaultProps: {}
}
 
const creditCardTheme = extendTheme({
  components: {
    Container,
    Box,
  }
})

export default creditCardTheme;