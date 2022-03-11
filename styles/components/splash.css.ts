import { createTheme, globalStyle, style } from "@vanilla-extract/css";
import chroma from "chroma-js";
import { utilVars, math, measurement } from "../../utils/styleUtils";
import { fullRotation } from "../globals.css";
import { absolutePosition, flexPosition } from "../helpers/positioning";
import { backgroundHelper } from "../helpers/background";

const logoSize = measurement("50px");
const logoWrapSize = math.multiply(logoSize, 1.5);

const vars = {
  logo: {
    size: logoSize.toString(),
  },
  size: {
    font: "10vw",
  },
  gradient: {
    start: chroma("rgb(54, 1, 106)"),
    middle: chroma("rgb(126, 126, 149)"),
    end: chroma("rgba(210, 210, 210, .8)"),
  },
  counterGradient: {
    start: chroma("#6d00a3"),
    middle: chroma("#917e95"),
    end: chroma("rgba(255, 255, 255, 0)"),
  },
};

const logoSpacer = style({
  // ...flexPosition.middle(),
  position: "relative",
  width: logoWrapSize,
  height: logoWrapSize,
  minWidth: vars.logo.size,
  minHeight: vars.logo.size,
  zIndex: 1,
  transform: "translate(0, 15%)",
});

const logo = style({
  width: vars.logo.size,
  height: "auto",
  animation: `14s infinite linear ${fullRotation}`,
});

const splashStyles = {
  root: style({
    height: "100vh",
    color: utilVars.white.hex(),
    ...flexPosition.middle(),
    position: "relative",
    overflow: "hidden",
  }),

  overlay: style({
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "300%",
    height: "300%",
    transform: "translateX(-50%) translateY(-50%)",
    selectors: {
      // Faster Gradient
      "&:before": {
        content: "",
        ...absolutePosition.fullSize(),
        background: `linear-gradient(45deg, ${vars.gradient.start.css(
          "hsl"
        )} 45%, ${vars.gradient.middle.css("hsl")} 60%, ${vars.gradient.end.css(
          "hsl"
        )} 70%)`,
        animation: `${fullRotation} 3.5s infinite linear`,
      },
      // SVG Overlay
      "&:after": {
        content: "",
        opacity: "0.65",
        ...absolutePosition.fullSize(),
        /* background by SVGBackgrounds.com */
        ...backgroundHelper({
          repeat: "repeat",
          color: "#777186",
          image:
            "data:image/svg+xml;base64,PCEtLSBHZW5lcmF0ZWQgd2l0aCBodHRwczovL3d3dy5zdmdiYWNrZ3JvdW5kcy5jb20vIC0tPgo8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPScxMDAlJyBvcGFjaXR5PSIwLjM1Ij4KICAgPGRlZnM+CiAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0nYScgZ3JhZGllbnRVbml0cz0ndXNlclNwYWNlT25Vc2UnIHgxPScwJyB4Mj0nMCcgeTE9JzAnIHkyPScxMDAlJyBncmFkaWVudFRyYW5zZm9ybT0ncm90YXRlKDMyNCw0NTAsNDUwKSc+CiAgICAgICAgIDxzdG9wIG9mZnNldD0nMCcgIHN0b3AtY29sb3I9JyNmZmZmZmYnLz4KICAgICAgICAgPHN0b3Agb2Zmc2V0PScxJyAgc3RvcC1jb2xvcj0nIzg1N0E5QycvPgogICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICA8cGF0dGVybiBwYXR0ZXJuVW5pdHM9J3VzZXJTcGFjZU9uVXNlJyBpZD0nYicgIHdpZHRoPSc1NDAnIGhlaWdodD0nNDUwJyB4PScwJyB5PScwJyB2aWV3Qm94PScwIDAgMTA4MCA5MDAnPgogICAgICAgICA8ZyBmaWxsLW9wYWNpdHk9JzAuMSc+CiAgICAgICAgICAgIDxwb2x5Z29uIGZpbGw9JyM0NDQnIHBvaW50cz0nOTAgMTUwIDAgMzAwIDE4MCAzMDAnLz4KICAgICAgICAgICAgPHBvbHlnb24gcG9pbnRzPSc5MCAxNTAgMTgwIDAgMCAwJy8+CiAgICAgICAgICAgIDxwb2x5Z29uIGZpbGw9JyNBQUEnIHBvaW50cz0nMjcwIDE1MCAzNjAgMCAxODAgMCcvPgogICAgICAgICAgICA8cG9seWdvbiBmaWxsPScjREREJyBwb2ludHM9JzQ1MCAxNTAgMzYwIDMwMCA1NDAgMzAwJy8+CiAgICAgICAgICAgIDxwb2x5Z29uIGZpbGw9JyM5OTknIHBvaW50cz0nNDUwIDE1MCA1NDAgMCAzNjAgMCcvPgogICAgICAgICAgICA8cG9seWdvbiBwb2ludHM9JzYzMCAxNTAgNTQwIDMwMCA3MjAgMzAwJy8+CiAgICAgICAgICAgIDxwb2x5Z29uIGZpbGw9JyNEREQnIHBvaW50cz0nNjMwIDE1MCA3MjAgMCA1NDAgMCcvPgogICAgICAgICAgICA8cG9seWdvbiBmaWxsPScjNDQ0JyBwb2ludHM9JzgxMCAxNTAgNzIwIDMwMCA5MDAgMzAwJy8+CiAgICAgICAgICAgIDxwb2x5Z29uIGZpbGw9JyNGRkYnIHBvaW50cz0nODEwIDE1MCA5MDAgMCA3MjAgMCcvPgogICAgICAgICAgICA8cG9seWdvbiBmaWxsPScjREREJyBwb2ludHM9Jzk5MCAxNTAgOTAwIDMwMCAxMDgwIDMwMCcvPgogICAgICAgICAgICA8cG9seWdvbiBmaWxsPScjNDQ0JyBwb2ludHM9Jzk5MCAxNTAgMTA4MCAwIDkwMCAwJy8+CiAgICAgICAgICAgIDxwb2x5Z29uIGZpbGw9JyNEREQnIHBvaW50cz0nOTAgNDUwIDAgNjAwIDE4MCA2MDAnLz4KICAgICAgICAgICAgPHBvbHlnb24gcG9pbnRzPSc5MCA0NTAgMTgwIDMwMCAwIDMwMCcvPgogICAgICAgICAgICA8cG9seWdvbiBmaWxsPScjNjY2JyBwb2ludHM9JzI3MCA0NTAgMTgwIDYwMCAzNjAgNjAwJy8+CiAgICAgICAgICAgIDxwb2x5Z29uIGZpbGw9JyNBQUEnIHBvaW50cz0nMjcwIDQ1MCAzNjAgMzAwIDE4MCAzMDAnLz4KICAgICAgICAgICAgPHBvbHlnb24gZmlsbD0nI0RERCcgcG9pbnRzPSc0NTAgNDUwIDM2MCA2MDAgNTQwIDYwMCcvPgogICAgICAgICAgICA8cG9seWdvbiBmaWxsPScjOTk5JyBwb2ludHM9JzQ1MCA0NTAgNTQwIDMwMCAzNjAgMzAwJy8+CiAgICAgICAgICAgIDxwb2x5Z29uIGZpbGw9JyM5OTknIHBvaW50cz0nNjMwIDQ1MCA1NDAgNjAwIDcyMCA2MDAnLz4KICAgICAgICAgICAgPHBvbHlnb24gZmlsbD0nI0ZGRicgcG9pbnRzPSc2MzAgNDUwIDcyMCAzMDAgNTQwIDMwMCcvPgogICAgICAgICAgICA8cG9seWdvbiBwb2ludHM9JzgxMCA0NTAgNzIwIDYwMCA5MDAgNjAwJy8+CiAgICAgICAgICAgIDxwb2x5Z29uIGZpbGw9JyNEREQnIHBvaW50cz0nODEwIDQ1MCA5MDAgMzAwIDcyMCAzMDAnLz4KICAgICAgICAgICAgPHBvbHlnb24gZmlsbD0nI0FBQScgcG9pbnRzPSc5OTAgNDUwIDkwMCA2MDAgMTA4MCA2MDAnLz4KICAgICAgICAgICAgPHBvbHlnb24gZmlsbD0nIzQ0NCcgcG9pbnRzPSc5OTAgNDUwIDEwODAgMzAwIDkwMCAzMDAnLz4KICAgICAgICAgICAgPHBvbHlnb24gZmlsbD0nIzIyMicgcG9pbnRzPSc5MCA3NTAgMCA5MDAgMTgwIDkwMCcvPgogICAgICAgICAgICA8cG9seWdvbiBwb2ludHM9JzI3MCA3NTAgMTgwIDkwMCAzNjAgOTAwJy8+CiAgICAgICAgICAgIDxwb2x5Z29uIGZpbGw9JyNEREQnIHBvaW50cz0nMjcwIDc1MCAzNjAgNjAwIDE4MCA2MDAnLz4KICAgICAgICAgICAgPHBvbHlnb24gcG9pbnRzPSc0NTAgNzUwIDU0MCA2MDAgMzYwIDYwMCcvPgogICAgICAgICAgICA8cG9seWdvbiBwb2ludHM9JzYzMCA3NTAgNTQwIDkwMCA3MjAgOTAwJy8+CiAgICAgICAgICAgIDxwb2x5Z29uIGZpbGw9JyM0NDQnIHBvaW50cz0nNjMwIDc1MCA3MjAgNjAwIDU0MCA2MDAnLz4KICAgICAgICAgICAgPHBvbHlnb24gZmlsbD0nI0FBQScgcG9pbnRzPSc4MTAgNzUwIDcyMCA5MDAgOTAwIDkwMCcvPgogICAgICAgICAgICA8cG9seWdvbiBmaWxsPScjNjY2JyBwb2ludHM9JzgxMCA3NTAgOTAwIDYwMCA3MjAgNjAwJy8+CiAgICAgICAgICAgIDxwb2x5Z29uIGZpbGw9JyM5OTknIHBvaW50cz0nOTkwIDc1MCA5MDAgOTAwIDEwODAgOTAwJy8+CiAgICAgICAgICAgIDxwb2x5Z29uIGZpbGw9JyM5OTknIHBvaW50cz0nMTgwIDAgOTAgMTUwIDI3MCAxNTAnLz4KICAgICAgICAgICAgPHBvbHlnb24gZmlsbD0nIzQ0NCcgcG9pbnRzPSczNjAgMCAyNzAgMTUwIDQ1MCAxNTAnLz4KICAgICAgICAgICAgPHBvbHlnb24gZmlsbD0nI0ZGRicgcG9pbnRzPSc1NDAgMCA0NTAgMTUwIDYzMCAxNTAnLz4KICAgICAgICAgICAgPHBvbHlnb24gcG9pbnRzPSc5MDAgMCA4MTAgMTUwIDk5MCAxNTAnLz4KICAgICAgICAgICAgPHBvbHlnb24gZmlsbD0nIzIyMicgcG9pbnRzPScwIDMwMCAtOTAgNDUwIDkwIDQ1MCcvPgogICAgICAgICAgICA8cG9seWdvbiBmaWxsPScjRkZGJyBwb2ludHM9JzAgMzAwIDkwIDE1MCAtOTAgMTUwJy8+CiAgICAgICAgICAgIDxwb2x5Z29uIGZpbGw9JyNGRkYnIHBvaW50cz0nMTgwIDMwMCA5MCA0NTAgMjcwIDQ1MCcvPgogICAgICAgICAgICA8cG9seWdvbiBmaWxsPScjNjY2JyBwb2ludHM9JzE4MCAzMDAgMjcwIDE1MCA5MCAxNTAnLz4KICAgICAgICAgICAgPHBvbHlnb24gZmlsbD0nIzIyMicgcG9pbnRzPSczNjAgMzAwIDI3MCA0NTAgNDUwIDQ1MCcvPgogICAgICAgICAgICA8cG9seWdvbiBmaWxsPScjRkZGJyBwb2ludHM9JzM2MCAzMDAgNDUwIDE1MCAyNzAgMTUwJy8+CiAgICAgICAgICAgIDxwb2x5Z29uIGZpbGw9JyM0NDQnIHBvaW50cz0nNTQwIDMwMCA0NTAgNDUwIDYzMCA0NTAnLz4KICAgICAgICAgICAgPHBvbHlnb24gZmlsbD0nIzIyMicgcG9pbnRzPSc1NDAgMzAwIDYzMCAxNTAgNDUwIDE1MCcvPgogICAgICAgICAgICA8cG9seWdvbiBmaWxsPScjQUFBJyBwb2ludHM9JzcyMCAzMDAgNjMwIDQ1MCA4MTAgNDUwJy8+CiAgICAgICAgICAgIDxwb2x5Z29uIGZpbGw9JyM2NjYnIHBvaW50cz0nNzIwIDMwMCA4MTAgMTUwIDYzMCAxNTAnLz4KICAgICAgICAgICAgPHBvbHlnb24gZmlsbD0nI0ZGRicgcG9pbnRzPSc5MDAgMzAwIDgxMCA0NTAgOTkwIDQ1MCcvPgogICAgICAgICAgICA8cG9seWdvbiBmaWxsPScjOTk5JyBwb2ludHM9JzkwMCAzMDAgOTkwIDE1MCA4MTAgMTUwJy8+CiAgICAgICAgICAgIDxwb2x5Z29uIHBvaW50cz0nMCA2MDAgLTkwIDc1MCA5MCA3NTAnLz4KICAgICAgICAgICAgPHBvbHlnb24gZmlsbD0nIzY2NicgcG9pbnRzPScwIDYwMCA5MCA0NTAgLTkwIDQ1MCcvPgogICAgICAgICAgICA8cG9seWdvbiBmaWxsPScjQUFBJyBwb2ludHM9JzE4MCA2MDAgOTAgNzUwIDI3MCA3NTAnLz4KICAgICAgICAgICAgPHBvbHlnb24gZmlsbD0nIzQ0NCcgcG9pbnRzPScxODAgNjAwIDI3MCA0NTAgOTAgNDUwJy8+CiAgICAgICAgICAgIDxwb2x5Z29uIGZpbGw9JyM0NDQnIHBvaW50cz0nMzYwIDYwMCAyNzAgNzUwIDQ1MCA3NTAnLz4KICAgICAgICAgICAgPHBvbHlnb24gZmlsbD0nIzk5OScgcG9pbnRzPSczNjAgNjAwIDQ1MCA0NTAgMjcwIDQ1MCcvPgogICAgICAgICAgICA8cG9seWdvbiBmaWxsPScjNjY2JyBwb2ludHM9JzU0MCA2MDAgNjMwIDQ1MCA0NTAgNDUwJy8+CiAgICAgICAgICAgIDxwb2x5Z29uIGZpbGw9JyMyMjInIHBvaW50cz0nNzIwIDYwMCA2MzAgNzUwIDgxMCA3NTAnLz4KICAgICAgICAgICAgPHBvbHlnb24gZmlsbD0nI0ZGRicgcG9pbnRzPSc5MDAgNjAwIDgxMCA3NTAgOTkwIDc1MCcvPgogICAgICAgICAgICA8cG9seWdvbiBmaWxsPScjMjIyJyBwb2ludHM9JzkwMCA2MDAgOTkwIDQ1MCA4MTAgNDUwJy8+CiAgICAgICAgICAgIDxwb2x5Z29uIGZpbGw9JyNEREQnIHBvaW50cz0nMCA5MDAgOTAgNzUwIC05MCA3NTAnLz4KICAgICAgICAgICAgPHBvbHlnb24gZmlsbD0nIzQ0NCcgcG9pbnRzPScxODAgOTAwIDI3MCA3NTAgOTAgNzUwJy8+CiAgICAgICAgICAgIDxwb2x5Z29uIGZpbGw9JyNGRkYnIHBvaW50cz0nMzYwIDkwMCA0NTAgNzUwIDI3MCA3NTAnLz4KICAgICAgICAgICAgPHBvbHlnb24gZmlsbD0nI0FBQScgcG9pbnRzPSc1NDAgOTAwIDYzMCA3NTAgNDUwIDc1MCcvPgogICAgICAgICAgICA8cG9seWdvbiBmaWxsPScjRkZGJyBwb2ludHM9JzcyMCA5MDAgODEwIDc1MCA2MzAgNzUwJy8+CiAgICAgICAgICAgIDxwb2x5Z29uIGZpbGw9JyMyMjInIHBvaW50cz0nOTAwIDkwMCA5OTAgNzUwIDgxMCA3NTAnLz4KICAgICAgICAgICAgPHBvbHlnb24gZmlsbD0nIzIyMicgcG9pbnRzPScxMDgwIDMwMCA5OTAgNDUwIDExNzAgNDUwJy8+CiAgICAgICAgICAgIDxwb2x5Z29uIGZpbGw9JyNGRkYnIHBvaW50cz0nMTA4MCAzMDAgMTE3MCAxNTAgOTkwIDE1MCcvPgogICAgICAgICAgICA8cG9seWdvbiBwb2ludHM9JzEwODAgNjAwIDk5MCA3NTAgMTE3MCA3NTAnLz4KICAgICAgICAgICAgPHBvbHlnb24gZmlsbD0nIzY2NicgcG9pbnRzPScxMDgwIDYwMCAxMTcwIDQ1MCA5OTAgNDUwJy8+CiAgICAgICAgICAgIDxwb2x5Z29uIGZpbGw9JyNEREQnIHBvaW50cz0nMTA4MCA5MDAgMTE3MCA3NTAgOTkwIDc1MCcvPgogICAgICAgICA8L2c+CiAgICAgIDwvcGF0dGVybj4KICAgPC9kZWZzPgogICA8cmVjdCB4PScwJyB5PScwJyBmaWxsPSd1cmwoI2EpJyB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJy8+CiAgIDxyZWN0IHg9JzAnIHk9JzAnIGZpbGw9J3VybCgjYiknIHdpZHRoPScxMDAlJyBoZWlnaHQ9JzEwMCUnLz4KPC9zdmc+Cg==",
        }),
      },
    },
  }),

  // Slower, background Gradient
  counterGradient: style({
    ...absolutePosition.fullSize(),
    opacity: "0.6",
    selectors: {
      "&:before": {
        content: "",
        ...absolutePosition.fullSize(),
        background: `linear-gradient(95deg, ${vars.counterGradient.start.css(
          "hsl"
        )} 42%, ${vars.counterGradient.middle.css(
          "hsl"
        )} 47%, ${vars.counterGradient.end.css("hsl")} 68%)`,
        animation: `${fullRotation} 11.7s infinite reverse linear`,
      },
    },
  }),

  titleWrap: style({
    ...flexPosition.middle(),
  }),

  // // Title
  // title: style({
  //   padding: "0",
  //   margin: "0",
  //   fontSize: vars.size.font,
  //   fontWeight: "100",
  //   textTransform: "none",
  //   textShadow: "rgb(0 0 0 / 80%) 4px 4px 15px",
  //   letterSpacing: "0.3em",
  //   color: utilVars.white.hex(),
  // }),
  // titleWord: style({
  //   // letterSpacing: "-0.2ex",
  //   ...flexPosition.middle(),
  //   lineHeight: 1,
  // }),

  // titleZoid: style({
  //   // marginRight: "0.59ex",
  //   letterSpacing: "1em",
  // }),
  // titleArchive: style({
  //   letterSpacing: "0.1em",
  //   // marginLeft: "-0.12ex",
  //   // fontWeight: "400",
  // }),

  // // Zoid
  // letter_1_1: style({
  //   fontWeight: "900",

  //   // display: "inline-block",
  // }),
  // letter_1_2: style({
  //   fontWeight: "600",
  //   // display: "inline-block",
  // }),
  // letter_1_3: style({
  //   fontWeight: "300",
  //   // transform: "translateY(0em)",
  //   // display: "inline-block",
  // }),
  // letter_1_4: style({
  //   fontWeight: "100",
  //   textShadow: "rgb(0 0 0 / 100%) 4px 4px 15px",
  //   // transform: "translateY(0.1em)",
  //   // display: "inline-block",
  // }),

  // // Archive
  // letter_2_1: style({
  //   fontWeight: "900",
  // }),
  // letter_2_2: style({
  //   fontWeight: "700",
  // }),
  // letter_2_3: style({
  //   fontWeight: "500",
  // }),
  // letter_2_4: style({
  //   fontWeight: "400",
  // }),
  // letter_2_5: style({
  //   fontWeight: "300",
  // }),
  // letter_2_6: style({
  //   fontWeight: "200",
  // }),
  // letter_2_7: style({
  //   fontWeight: "100",
  //   textShadow: "rgb(0 0 0 / 100%) 4px 4px 15px",
  // }),

  content: style({
    ...flexPosition.middleLeft(true),
    width: "100%",
    flexDirection: "column",
    position: "relative",
  }),

  hero: style({
    display: "block",
    width: "35vw",
    height: "auto",
  }),

  // Scroll button
  scrollToContent: style({
    ...absolutePosition.middleBottom(),
    width: "100%",
    height: "100px",
    ...flexPosition.middle(),
    opacity: 0.5,
    transition: "opacity 0.2s ease-out",
    selectors: {
      [`&:hover, &:active, &:focus`]: {
        opacity: 0.8,
      },
    },
  }),
  scrollToContentIcon: style({
    fill: utilVars.white.hex(),
    width: "60px",
  }),

  // Logo
  logoSpacer,
  logo,
};

// splashStyles[`.${splashStyles.titleWord} > span}`] = style({
//   textAlign: "center",
// });

export default splashStyles;
