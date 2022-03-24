import { IMeasurement } from "../../utils/styleUtils";
import { colors } from "../colors.css";
import globalVars from "../globals.css";
import { absolutePosition, flexPosition } from "../helpers/positioning";

export const roundButton = (buttonSize: IMeasurement) => {
  return {
    ...flexPosition.center(),
    position: "relative",
    textDecoration: "none",
    borderRadius: "50%",
    fontWeight: globalVars.fonts.body.semiBold,
    transition: "background, color 0.3s, 0.2s ease-in",
    width: buttonSize.toString(),
    height: buttonSize.toString(),
    selectors: {
      ["&&"]: {
        color: colors.brand.css(),
        outlineColor: colors.white.css(),
      },
      ["&:after"]: {
        content: "",
        ...absolutePosition.fullSize(),
        border: `solid ${colors.brand.alpha(0.7).css()} 3px`,
        borderRadius: "50%",
        transform: "scale(1)",
        transition: "opacity, transform, filter 0.3s, 0.2s ease-out",
      },
      ["&:hover:after, &:focus:after"]: {
        opacity: 0,
        transform: "scale(2)",
      },
      ["&:hover, &:focus"]: {
        backgroundColor: colors.brand.css(),
        color: colors.white.css(),
      },
      ["&:focus-visible, &.focus-visible"]: {
        outline: `solid ${colors.white.css()} 1px`,
        outlineStyle: "dotted",
        outlineOffset: "-5px",
      },
    },
  };
};
