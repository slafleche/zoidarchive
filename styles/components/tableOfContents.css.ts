import { style } from "@vanilla-extract/css";
import { paddings } from "../helpers/spacing";

const tableOfContentsStyles = {
  root: style({
    ...paddings({
      top: "70px",
      bottom: "70px",
    }),
  }),
  title: style({
    marginTop: 0,
  }),
  items: style({}),
  item: style({}),
  link: style({}),
};

export default tableOfContentsStyles;
