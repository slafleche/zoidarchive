import { style } from "@vanilla-extract/css";
import { backgroundHelper } from "../helpers/background";
import { absolutePosition } from "../helpers/positioning";

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
    overflow: "hidden",
    position: "relative",
    padding: "0 0 150px",

    selectors: {
      ["&:before"]: {
        content: "",
        display: "block",
        ...absolutePosition.topLeft(),
        width: "100%",
        height: "100%",
        opacity: 0.2,
        transform: "rotate(12deg) scale(1.5)",
        ...backgroundHelper({
          repeat: "repeat",
          image:
            "data:image/svg+xml;base64,PHN2ZyAKICAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIgogICAgb3BhY2l0eT0iMSIgCiAgICB3aWR0aD0iMTAwIiAKICAgIGhlaWdodD0iMTAwIgogICAgZmlsbD0iIzhiNjc3NCIKPgogICAgCiAgICA8Y2lyY2xlCiAgICAgICAgaWQ9InBhdHRlcm4tY2lyY2xlIgogICAgICAgIGN4PSIyNSIKICAgICAgICBjeT0iMjUiCiAgICAgICAgcj0iMS41IgogICAgLz4KPGNpcmNsZQogICAgICAgIGlkPSJwYXR0ZXJuLWNpcmNsZSIKICAgICAgICBjeD0iMjUiCiAgICAgICAgY3k9Ijc1IgogICAgICAgIHI9IjEuNSIKICAgICAgICAKICAgIC8+CiAgICA8Y2lyY2xlCiAgICAgICAgaWQ9InBhdHRlcm4tY2lyY2xlIgogICAgICAgIGN4PSI3NSIKICAgICAgICBjeT0iMjUiCiAgICAgICAgcj0iMS41IgogICAgLz4KICAgIDxjaXJjbGUKICAgICAgICBpZD0icGF0dGVybi1jaXJjbGUiCiAgICAgICAgY3g9Ijc1IgogICAgICAgIGN5PSI3NSIKICAgICAgICByPSIxLjUiCiAgICAvPgo8L3N2Zz4K",
        }),
      },
    },
  }),
};

export default layout;
