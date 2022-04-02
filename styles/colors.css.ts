import chroma from "chroma-js";

export const colors = {
  heroHeading: chroma("rgb(26,32,44)"),
  heroText: chroma("#44474c"),
  navBg: chroma("#000").alpha(0.8),
  navFg: chroma("#FFF"),
  bodyBg: chroma("#fff"),
  bodyFg: chroma("#1d1d1f"),
  headingFg: chroma("#484a4d"),
  brand: chroma("#3d3380"),
  contrast: chroma("#8e233f"),
  black: chroma("#000"),
  charcoal: chroma("rgb(26,27,27)"),
  white: chroma("#FFF"),
  transparent: chroma("#ffffff").alpha(0),
  shadow: chroma("rgb(3, 3, 3)").alpha(0.34),
  border: chroma("#1d1d1f"),
};
