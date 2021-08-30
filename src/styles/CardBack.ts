export const CardBack = {
  baseStyle: {
    position: "absolute",
    backgroundColor: "#993399",
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
    transition: "all 1000ms ease-out",
  },
  sizes: {},
  variants: {
    "flipped": {
      transition: "all 1000ms ease-out",
      transform: "translate(-50%, -50%)",
      zIndex: 1,
    },
    "notFlipped": {
      transition: "all 1000ms ease-out",
      zIndex: 0,
    }
  },
  defaultProps: {},
}