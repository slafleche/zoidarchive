import { createTheme, style } from "@vanilla-extract/css";
import { multiply } from "../../utils/styleUtils";
import { colors } from "../colors.css";
import globalVars from "../globals.css";
import { flexPosition } from "../helpers/positioning";

const vars = {
  height: "50px",
  spacing: "10px",
};

const navBarStyles = {
  root: style({
    position: "relative",
    height: vars.height,
    zIndex: 10,
  }),
  detachable: style({
    height: vars.height,
    backgroundColor: colors.brand.mix(colors.contrast, 0.12).alpha(0.9).css(),
    boxShadow: "0 4px 4px 0px rgba(3, 3, 3, 0.34)",
    backdropFilter: "blur(3px)",
  }),
  nav: style({
    height: vars.height,
  }),
  items: style({
    ...flexPosition.middleLeft(),
    width: `calc(100% + ${multiply(vars.spacing, 2)})`,
    margin: `0 0 0 -${vars.spacing}`,
    padding: 0,
    height: vars.height,
  }),
  item: style({
    listStyle: "none",
  }),
  homeIcon: style({
    width: "30px",
  }),
  link: style({
    position: "relative",
    ...flexPosition.center(),
    fontSize: ".8em",
    padding: `${vars.spacing}`,
    transition: "background-color ease-in 0.2s, transform ease-out 0.1s",
    selectors: {
      [`&&`]: {
        textDecoration: "none",
        color: colors.white.css(),
      },
      [`&:hover, &:focus`]: {
        // backgroundColor: colors.white.alpha(0.05).css(),
        // transform: "scale(1.02)",
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
};

export default navBarStyles;
