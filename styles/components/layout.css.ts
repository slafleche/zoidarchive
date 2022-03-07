import { style } from "@vanilla-extract/css";
import * as csstype from "csstype";
import { backgroundHelper } from "../helpers/background";

const layout = {
  frame: style({
    minHeight: "100vh",
  }),

  main: style({
    position: "relative",
  }),

  content: style({
    maxWidth: "1200px",
    margin: "auto",
    padding: "0 20px",
  }),

  bodyWrap: style({
    // ...backgroundHelper({
    //   repeat: "repeat",
    //   image: "/images/pattern.svg",
    //   // size: "49px",
    // }),

    ...backgroundHelper({
      repeat: "repeat",
      image: "/images/pattern.svg",
      size: "500px",
    }),
  }),
};

export default layout;
