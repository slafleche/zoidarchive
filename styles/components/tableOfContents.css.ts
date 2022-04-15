import { style } from "@vanilla-extract/css";
import { colors } from "styles/colors.css";
import { paddings } from "styles/helpers/spacing";
import { threeColumnContentVars } from "./threeColumnLayout.css";

const tableOfContentsStyles = {
  root: style({
    ...paddings({
      vertical: threeColumnContentVars.column.padding,
    }),
  }),
  title: style({
    fontSize: threeColumnContentVars.column.fontSize,
    // textAlign: "center",
    marginTop: 0,
  }),
  items: style({}),
  item: style({}),
  link: style({
    fontSize: "20px",
    textDecoration: "none",
    color: colors.bodyFg.css(),
  }),
};

export default tableOfContentsStyles;
