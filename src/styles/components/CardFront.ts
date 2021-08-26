export const CardFront = {
  baseStyle: {
    backgroundColor: "#993399",
    fontSize: 34,
    width: 350,
    height: 222,
    minWidth: 350,
    zIndex: 1,
    margin: "auto auto",
    borderRadius: 10,
    boxShadow: `0px 0px 0.25em rgba(238, 238, 238, 0.1)`,
    transformStyle: "preserve-3d",
    fontFamily: "Spartan, sans-serif",
    letterSpacing: 1.5,

    transition: "all 500ms ease-out",
    _hover: {
      // transform: "scale(1.025)",
      transform: "rotateY(180deg)",
      backgroundColor: "transparent",
      _after: {
        content: '""',
        zIndex: -4,
      }
    },
  },
  sizes: {},
  variants: {},
  defaultProps: {},
}