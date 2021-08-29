export const CardFront = {
  baseStyle: {
    backgroundColor: "#993399",
    fontSize: 34,
    width: 350,
    height: 222,
    minHeight: 222,
    minWidth: 350,
    zIndex: 1,
    transformStyle: "preserve-3d",
    margin: "auto auto",
    borderRadius: 10,
    boxShadow: `0px 0px 0.25em rgba(238, 238, 238, 0.1)`,
    fontFamily: "Spartan, sans-serif",
    letterSpacing: 1.5,

    transition: "all 1000ms ease-out",
  },
  sizes: {},
  variants: {
    "flipped": {
      transition: "all 1000ms ease-out",
      transform: "rotateY(-180deg)",
      zIndex: 0,
    },
    "notFlipped": {
      transition: "all 1000ms ease-out",
      zIndex: 1,
    }
  },
}