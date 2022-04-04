import { createTheme, style } from "@vanilla-extract/css";
import { colors } from "../colors.css";
import { paddings } from "../helpers/spacing";
import { flexPosition } from "../helpers/positioning";
import { globalShadow } from "../helpers/shadows";
import { calc } from "@vanilla-extract/css-utils";
import globalVars from "../vars.css";

export const navBarVars = {
  height: "60px",
  spacing: "10px",
};

const navBarStyles = {
  root: style({
    position: "relative",
    height: navBarVars.height,
    zIndex: 10,
  }),
  detachable: style({
    height: navBarVars.height,
    backgroundColor: colors.brand.mix(colors.contrast, 0.12).alpha(0.95).css(),
    boxShadow: globalShadow({
      spread: 0,
      x: 0,
      y: "2px",
      blur: "1px",
      color: colors.shadow.alpha(0.6),
    }),
    backdropFilter: "blur(3px)",
  }),
  nav: style({
    height: navBarVars.height,
  }),
  items: style({
    ...flexPosition.middleLeft(true),
    width: `calc(100% + ${calc.multiply(navBarVars.spacing, 2)})`,
    margin: `0 0 0 -${navBarVars.spacing}`,
    padding: 0,
    height: navBarVars.height,
  }),
  item: style({
    listStyle: "none",
    height: "100%",
    ...flexPosition.center(),
    selectors: {
      ["&.isLast"]: {
        marginLeft: "auto",
      },
    },
  }),
  homeIcon: style({
    width: "30px",
  }),
  compactSearch: style({}),
  compactSearchInput: style({}),
  link: style({
    position: "relative",
    ...flexPosition.center(),
    fontSize: ".8em",
    lineHeight: navBarVars.height,
    ...paddings({
      all: `${navBarVars.spacing}`,
      top: `calc(${navBarVars.spacing} + 2px)`,
    }),
    height: "100%",
    transition: "background-color ease-in 0.2s, transform ease-out 0.1s",
    selectors: {
      [`&&`]: {
        textDecoration: "none",
        color: colors.white.css(),
      },
      ["&.isArchive"]: {
        // backgroundImage: `linear-gradient(87deg, ${colors.contrast
        //   .alpha(0.5)
        //   .css()} 30%, ${colors.contrast.css()} 100%)`,
        // backgroundSize: "100%",
        // // MozBackgroundClip: "text",
        // // WebkitBackgroundClip: "text",
        // // WebkitTextFillColor: colors.white.css(),
      },
      [`&.focus-visible, &:focus-visible`]: {
        outline: `solid ${colors.white.css()} 2px`,
        outlineOffset: "-2px",
      },
      [`&:visited`]: {},
      [`&.isActive`]: {
        fontWeight: globalVars.fonts.body.semiBold,
      },
      [`&:after`]: {
        content: "",
        position: `absolute`,
        width: `100%`,
        transform: `scaleX(0)`,
        height: `2px`,
        bottom: 0,
        left: 0,
        backgroundColor: colors.white.css(),
        transformOrigin: `bottom right`,
        transition: `transform 0.25s ease-out`,
      },
      [`&:hover:after`]: {
        transform: `scaleX(1)`,
        transformOrigin: `bottom left`,
      },
    },
  }),
  search: {
    input: style({}),
  },
};

export default navBarStyles;
