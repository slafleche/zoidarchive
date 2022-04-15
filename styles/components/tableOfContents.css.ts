import { style } from "@vanilla-extract/css";
import { colors } from "styles/colors.css";
import { paddings } from "styles/helpers/spacing";

const tableOfContentsStyles = {
  root: style({
    ...paddings({
      vertical: "75px",
    }),
  }),
  title: style({
    fontSize: "26px",
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
