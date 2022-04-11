import { style } from "@vanilla-extract/css";
import { globalMediaQueryStyles } from "../helpers/mediaQueries";
import { paddings } from "../helpers/spacing";
import { layoutVars } from "./layoutVars.css";

const layoutStyles = {
  frame: style({
    minHeight: "100vh",
  }),

  main: style({
    position: "relative",
  }),

  content: style({
    maxWidth: layoutVars.contentWidth,
    margin: "auto",
    ...paddings({
      horizontal: layoutVars.contentPadding,
    }),
    ...globalMediaQueryStyles({
      compact: {
        ...paddings({
          horizontal: layoutVars.compact.contentPadding,
        }),
      },
      compressed: {
        ...paddings({
          horizontal: layoutVars.compressed.contentPadding,
        }),
      },
    }),
  }),

  fullWidth: style({
    margin: "auto",
    ...paddings({
      horizontal: layoutVars.contentPadding,
    }),
    ...globalMediaQueryStyles({
      compact: {
        ...paddings({
          horizontal: layoutVars.compact.contentPadding,
        }),
      },
      compressed: {
        ...paddings({
          horizontal: layoutVars.compressed.contentPadding,
        }),
      },
    }),
  }),

  bodyWrap: style({
    overflow: "hidden",
    position: "relative",
    padding: "0 0 20px",
  }),
};

export default layoutStyles;
