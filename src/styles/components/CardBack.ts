export const CardBack = {
  baseStyle: {
    // backfaceVisibility: "hidden",
    position: "absolute",
    bgGradient: "linear(to-tl, #714FA5 1%, #271743, #120621)",
    color: "#261342",
    fontSize: 34,
    width: "350px",
    height: "222px",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%) rotateY(180deg)",
    zIndex: 0,

    borderRadius: 10,
    boxShadow: `0px 0px 0.25em rgba(238, 238, 238, 0.1)`,
    transformStyle: "preserve-3d",
    fontFamily: "Spartan, sans-serif",
    letterSpacing: 1.5,

    transition: "all 250ms ease-out",
    _hover: {
      // transform: "scale(1.025)",
      transform: "translate(-50%, -50%) rotateY(360deg)",
      zIndex: 1
    },
  },
  sizes: {},
  variants: {},
  defaultProps: {},
}