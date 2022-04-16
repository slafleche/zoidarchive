import { style } from "@vanilla-extract/css";
import { globalMediaQueryStyles } from "../helpers/mediaQueries";
import { flexPosition } from "styles/helpers/positioning";
import { paddings } from "styles/helpers/spacing";
import { layoutVars } from "./layoutVars.css";

const layoutStyles = {
  frame: style({
    minHeight: "100vh",
  }),

  main: style({
    position: "relative",
  }),

  content: style({
    width: "100%",
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
  }),

  stickyFooter: style({
    display: "flex",
    flexDirection: "column",
  }),

  mainSection: style({
    flexGrow: 1,
  }),
};

export default layoutStyles;
