import {
  createGlobalTheme,
  globalStyle,
  keyframes,
} from "@vanilla-extract/css";
import chroma from "chroma-js";
import { ClassType } from "react";
import content from "./components/content.css";
import layout from "./components/layout.css";
import { backgroundHelper } from "./helpers/background";
import { absolutePosition } from "./helpers/positioning";
import utilityClasses from "./utilityClasses.css";
import * as csstype from "csstype";
import { colors } from "./colors.css";
import { globalShadow } from "./helpers/shadows";

const globalVars = createGlobalTheme(":root", {
  colors: {
    heroHeading: colors.heroHeading.css(),
    heroText: colors.heroHeading.css(),
    navBg: colors.navBg.css(),
    navFg: colors.navFg.css(),
  },
  fonts: {
    heading: {
      // family: "Poppins, " + ,
      family: "Comfortaa, Poppins, Helvetica, Arial, sans-serif",
      size: "45px",
      weight: "500",
      color: colors.headingFg.css(),
    },
    body: {
      family: "Poppins, Helvetica, Arial, sans-serif",
      size: "22px",
      weight: "300",
      semiBold: "400",
      boldWeight: "600",
      color: colors.bodyFg.css(),
    },
  },
});

globalStyle("body", {
  minHeight: "100vh",
  ...backgroundHelper({
    repeat: "repeat",
    image:
      "data:image/svg+xml;base64,PCEtLSBHZW5lcmF0ZWQgd2l0aCBodHRwczovL3d3dy5zdmdiYWNrZ3JvdW5kcy5jb20vIC0tPgo8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPScxMDAlJyBvcGFjaXR5PSIwLjE1Ij4KICAgPGRlZnM+CiAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0nYScgZ3JhZGllbnRVbml0cz0ndXNlclNwYWNlT25Vc2UnIHgxPScwJyB4Mj0nMCcgeTE9JzAnIHkyPScxMDAlJyBncmFkaWVudFRyYW5zZm9ybT0ncm90YXRlKDMyNCw0NTAsNDUwKSc+CiAgICAgICAgIDxzdG9wIG9mZnNldD0nMCcgIHN0b3AtY29sb3I9JyNmZmZmZmYnLz4KICAgICAgICAgPHN0b3Agb2Zmc2V0PScxJyAgc3RvcC1jb2xvcj0nIzg1N0E5QycvPgogICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICA8cGF0dGVybiBwYXR0ZXJuVW5pdHM9J3VzZXJTcGFjZU9uVXNlJyBpZD0nYicgIHdpZHRoPSc1NDAnIGhlaWdodD0nNDUwJyB4PScwJyB5PScwJyB2aWV3Qm94PScwIDAgMTA4MCA5MDAnPgogICAgICAgICA8ZyBmaWxsLW9wYWNpdHk9JzAuMSc+CiAgICAgICAgICAgIDxwb2x5Z29uIGZpbGw9JyM0NDQnIHBvaW50cz0nOTAgMTUwIDAgMzAwIDE4MCAzMDAnLz4KICAgICAgICAgICAgPHBvbHlnb24gcG9pbnRzPSc5MCAxNTAgMTgwIDAgMCAwJy8+CiAgICAgICAgICAgIDxwb2x5Z29uIGZpbGw9JyNBQUEnIHBvaW50cz0nMjcwIDE1MCAzNjAgMCAxODAgMCcvPgogICAgICAgICAgICA8cG9seWdvbiBmaWxsPScjREREJyBwb2ludHM9JzQ1MCAxNTAgMzYwIDMwMCA1NDAgMzAwJy8+CiAgICAgICAgICAgIDxwb2x5Z29uIGZpbGw9JyM5OTknIHBvaW50cz0nNDUwIDE1MCA1NDAgMCAzNjAgMCcvPgogICAgICAgICAgICA8cG9seWdvbiBwb2ludHM9JzYzMCAxNTAgNTQwIDMwMCA3MjAgMzAwJy8+CiAgICAgICAgICAgIDxwb2x5Z29uIGZpbGw9JyNEREQnIHBvaW50cz0nNjMwIDE1MCA3MjAgMCA1NDAgMCcvPgogICAgICAgICAgICA8cG9seWdvbiBmaWxsPScjNDQ0JyBwb2ludHM9JzgxMCAxNTAgNzIwIDMwMCA5MDAgMzAwJy8+CiAgICAgICAgICAgIDxwb2x5Z29uIGZpbGw9JyNGRkYnIHBvaW50cz0nODEwIDE1MCA5MDAgMCA3MjAgMCcvPgogICAgICAgICAgICA8cG9seWdvbiBmaWxsPScjREREJyBwb2ludHM9Jzk5MCAxNTAgOTAwIDMwMCAxMDgwIDMwMCcvPgogICAgICAgICAgICA8cG9seWdvbiBmaWxsPScjNDQ0JyBwb2ludHM9Jzk5MCAxNTAgMTA4MCAwIDkwMCAwJy8+CiAgICAgICAgICAgIDxwb2x5Z29uIGZpbGw9JyNEREQnIHBvaW50cz0nOTAgNDUwIDAgNjAwIDE4MCA2MDAnLz4KICAgICAgICAgICAgPHBvbHlnb24gcG9pbnRzPSc5MCA0NTAgMTgwIDMwMCAwIDMwMCcvPgogICAgICAgICAgICA8cG9seWdvbiBmaWxsPScjNjY2JyBwb2ludHM9JzI3MCA0NTAgMTgwIDYwMCAzNjAgNjAwJy8+CiAgICAgICAgICAgIDxwb2x5Z29uIGZpbGw9JyNBQUEnIHBvaW50cz0nMjcwIDQ1MCAzNjAgMzAwIDE4MCAzMDAnLz4KICAgICAgICAgICAgPHBvbHlnb24gZmlsbD0nI0RERCcgcG9pbnRzPSc0NTAgNDUwIDM2MCA2MDAgNTQwIDYwMCcvPgogICAgICAgICAgICA8cG9seWdvbiBmaWxsPScjOTk5JyBwb2ludHM9JzQ1MCA0NTAgNTQwIDMwMCAzNjAgMzAwJy8+CiAgICAgICAgICAgIDxwb2x5Z29uIGZpbGw9JyM5OTknIHBvaW50cz0nNjMwIDQ1MCA1NDAgNjAwIDcyMCA2MDAnLz4KICAgICAgICAgICAgPHBvbHlnb24gZmlsbD0nI0ZGRicgcG9pbnRzPSc2MzAgNDUwIDcyMCAzMDAgNTQwIDMwMCcvPgogICAgICAgICAgICA8cG9seWdvbiBwb2ludHM9JzgxMCA0NTAgNzIwIDYwMCA5MDAgNjAwJy8+CiAgICAgICAgICAgIDxwb2x5Z29uIGZpbGw9JyNEREQnIHBvaW50cz0nODEwIDQ1MCA5MDAgMzAwIDcyMCAzMDAnLz4KICAgICAgICAgICAgPHBvbHlnb24gZmlsbD0nI0FBQScgcG9pbnRzPSc5OTAgNDUwIDkwMCA2MDAgMTA4MCA2MDAnLz4KICAgICAgICAgICAgPHBvbHlnb24gZmlsbD0nIzQ0NCcgcG9pbnRzPSc5OTAgNDUwIDEwODAgMzAwIDkwMCAzMDAnLz4KICAgICAgICAgICAgPHBvbHlnb24gZmlsbD0nIzIyMicgcG9pbnRzPSc5MCA3NTAgMCA5MDAgMTgwIDkwMCcvPgogICAgICAgICAgICA8cG9seWdvbiBwb2ludHM9JzI3MCA3NTAgMTgwIDkwMCAzNjAgOTAwJy8+CiAgICAgICAgICAgIDxwb2x5Z29uIGZpbGw9JyNEREQnIHBvaW50cz0nMjcwIDc1MCAzNjAgNjAwIDE4MCA2MDAnLz4KICAgICAgICAgICAgPHBvbHlnb24gcG9pbnRzPSc0NTAgNzUwIDU0MCA2MDAgMzYwIDYwMCcvPgogICAgICAgICAgICA8cG9seWdvbiBwb2ludHM9JzYzMCA3NTAgNTQwIDkwMCA3MjAgOTAwJy8+CiAgICAgICAgICAgIDxwb2x5Z29uIGZpbGw9JyM0NDQnIHBvaW50cz0nNjMwIDc1MCA3MjAgNjAwIDU0MCA2MDAnLz4KICAgICAgICAgICAgPHBvbHlnb24gZmlsbD0nI0FBQScgcG9pbnRzPSc4MTAgNzUwIDcyMCA5MDAgOTAwIDkwMCcvPgogICAgICAgICAgICA8cG9seWdvbiBmaWxsPScjNjY2JyBwb2ludHM9JzgxMCA3NTAgOTAwIDYwMCA3MjAgNjAwJy8+CiAgICAgICAgICAgIDxwb2x5Z29uIGZpbGw9JyM5OTknIHBvaW50cz0nOTkwIDc1MCA5MDAgOTAwIDEwODAgOTAwJy8+CiAgICAgICAgICAgIDxwb2x5Z29uIGZpbGw9JyM5OTknIHBvaW50cz0nMTgwIDAgOTAgMTUwIDI3MCAxNTAnLz4KICAgICAgICAgICAgPHBvbHlnb24gZmlsbD0nIzQ0NCcgcG9pbnRzPSczNjAgMCAyNzAgMTUwIDQ1MCAxNTAnLz4KICAgICAgICAgICAgPHBvbHlnb24gZmlsbD0nI0ZGRicgcG9pbnRzPSc1NDAgMCA0NTAgMTUwIDYzMCAxNTAnLz4KICAgICAgICAgICAgPHBvbHlnb24gcG9pbnRzPSc5MDAgMCA4MTAgMTUwIDk5MCAxNTAnLz4KICAgICAgICAgICAgPHBvbHlnb24gZmlsbD0nIzIyMicgcG9pbnRzPScwIDMwMCAtOTAgNDUwIDkwIDQ1MCcvPgogICAgICAgICAgICA8cG9seWdvbiBmaWxsPScjRkZGJyBwb2ludHM9JzAgMzAwIDkwIDE1MCAtOTAgMTUwJy8+CiAgICAgICAgICAgIDxwb2x5Z29uIGZpbGw9JyNGRkYnIHBvaW50cz0nMTgwIDMwMCA5MCA0NTAgMjcwIDQ1MCcvPgogICAgICAgICAgICA8cG9seWdvbiBmaWxsPScjNjY2JyBwb2ludHM9JzE4MCAzMDAgMjcwIDE1MCA5MCAxNTAnLz4KICAgICAgICAgICAgPHBvbHlnb24gZmlsbD0nIzIyMicgcG9pbnRzPSczNjAgMzAwIDI3MCA0NTAgNDUwIDQ1MCcvPgogICAgICAgICAgICA8cG9seWdvbiBmaWxsPScjRkZGJyBwb2ludHM9JzM2MCAzMDAgNDUwIDE1MCAyNzAgMTUwJy8+CiAgICAgICAgICAgIDxwb2x5Z29uIGZpbGw9JyM0NDQnIHBvaW50cz0nNTQwIDMwMCA0NTAgNDUwIDYzMCA0NTAnLz4KICAgICAgICAgICAgPHBvbHlnb24gZmlsbD0nIzIyMicgcG9pbnRzPSc1NDAgMzAwIDYzMCAxNTAgNDUwIDE1MCcvPgogICAgICAgICAgICA8cG9seWdvbiBmaWxsPScjQUFBJyBwb2ludHM9JzcyMCAzMDAgNjMwIDQ1MCA4MTAgNDUwJy8+CiAgICAgICAgICAgIDxwb2x5Z29uIGZpbGw9JyM2NjYnIHBvaW50cz0nNzIwIDMwMCA4MTAgMTUwIDYzMCAxNTAnLz4KICAgICAgICAgICAgPHBvbHlnb24gZmlsbD0nI0ZGRicgcG9pbnRzPSc5MDAgMzAwIDgxMCA0NTAgOTkwIDQ1MCcvPgogICAgICAgICAgICA8cG9seWdvbiBmaWxsPScjOTk5JyBwb2ludHM9JzkwMCAzMDAgOTkwIDE1MCA4MTAgMTUwJy8+CiAgICAgICAgICAgIDxwb2x5Z29uIHBvaW50cz0nMCA2MDAgLTkwIDc1MCA5MCA3NTAnLz4KICAgICAgICAgICAgPHBvbHlnb24gZmlsbD0nIzY2NicgcG9pbnRzPScwIDYwMCA5MCA0NTAgLTkwIDQ1MCcvPgogICAgICAgICAgICA8cG9seWdvbiBmaWxsPScjQUFBJyBwb2ludHM9JzE4MCA2MDAgOTAgNzUwIDI3MCA3NTAnLz4KICAgICAgICAgICAgPHBvbHlnb24gZmlsbD0nIzQ0NCcgcG9pbnRzPScxODAgNjAwIDI3MCA0NTAgOTAgNDUwJy8+CiAgICAgICAgICAgIDxwb2x5Z29uIGZpbGw9JyM0NDQnIHBvaW50cz0nMzYwIDYwMCAyNzAgNzUwIDQ1MCA3NTAnLz4KICAgICAgICAgICAgPHBvbHlnb24gZmlsbD0nIzk5OScgcG9pbnRzPSczNjAgNjAwIDQ1MCA0NTAgMjcwIDQ1MCcvPgogICAgICAgICAgICA8cG9seWdvbiBmaWxsPScjNjY2JyBwb2ludHM9JzU0MCA2MDAgNjMwIDQ1MCA0NTAgNDUwJy8+CiAgICAgICAgICAgIDxwb2x5Z29uIGZpbGw9JyMyMjInIHBvaW50cz0nNzIwIDYwMCA2MzAgNzUwIDgxMCA3NTAnLz4KICAgICAgICAgICAgPHBvbHlnb24gZmlsbD0nI0ZGRicgcG9pbnRzPSc5MDAgNjAwIDgxMCA3NTAgOTkwIDc1MCcvPgogICAgICAgICAgICA8cG9seWdvbiBmaWxsPScjMjIyJyBwb2ludHM9JzkwMCA2MDAgOTkwIDQ1MCA4MTAgNDUwJy8+CiAgICAgICAgICAgIDxwb2x5Z29uIGZpbGw9JyNEREQnIHBvaW50cz0nMCA5MDAgOTAgNzUwIC05MCA3NTAnLz4KICAgICAgICAgICAgPHBvbHlnb24gZmlsbD0nIzQ0NCcgcG9pbnRzPScxODAgOTAwIDI3MCA3NTAgOTAgNzUwJy8+CiAgICAgICAgICAgIDxwb2x5Z29uIGZpbGw9JyNGRkYnIHBvaW50cz0nMzYwIDkwMCA0NTAgNzUwIDI3MCA3NTAnLz4KICAgICAgICAgICAgPHBvbHlnb24gZmlsbD0nI0FBQScgcG9pbnRzPSc1NDAgOTAwIDYzMCA3NTAgNDUwIDc1MCcvPgogICAgICAgICAgICA8cG9seWdvbiBmaWxsPScjRkZGJyBwb2ludHM9JzcyMCA5MDAgODEwIDc1MCA2MzAgNzUwJy8+CiAgICAgICAgICAgIDxwb2x5Z29uIGZpbGw9JyMyMjInIHBvaW50cz0nOTAwIDkwMCA5OTAgNzUwIDgxMCA3NTAnLz4KICAgICAgICAgICAgPHBvbHlnb24gZmlsbD0nIzIyMicgcG9pbnRzPScxMDgwIDMwMCA5OTAgNDUwIDExNzAgNDUwJy8+CiAgICAgICAgICAgIDxwb2x5Z29uIGZpbGw9JyNGRkYnIHBvaW50cz0nMTA4MCAzMDAgMTE3MCAxNTAgOTkwIDE1MCcvPgogICAgICAgICAgICA8cG9seWdvbiBwb2ludHM9JzEwODAgNjAwIDk5MCA3NTAgMTE3MCA3NTAnLz4KICAgICAgICAgICAgPHBvbHlnb24gZmlsbD0nIzY2NicgcG9pbnRzPScxMDgwIDYwMCAxMTcwIDQ1MCA5OTAgNDUwJy8+CiAgICAgICAgICAgIDxwb2x5Z29uIGZpbGw9JyNEREQnIHBvaW50cz0nMTA4MCA5MDAgMTE3MCA3NTAgOTkwIDc1MCcvPgogICAgICAgICA8L2c+CiAgICAgIDwvcGF0dGVybj4KICAgPC9kZWZzPgogICA8cmVjdCB4PScwJyB5PScwJyBmaWxsPSd1cmwoI2EpJyB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJy8+CiAgIDxyZWN0IHg9JzAnIHk9JzAnIGZpbGw9J3VybCgjYiknIHdpZHRoPScxMDAlJyBoZWlnaHQ9JzEwMCUnLz4KPC9zdmc+Cg==",
  }),
});

globalStyle("html, body", {
  // color: globalVars.fonts.heading.color,
  color: globalVars.fonts.body.color,
  fontFamily: globalVars.fonts.body.family,
  fontSize: globalVars.fonts.body.size,
  fontWeight: globalVars.fonts.body.weight,
  // letterSpacing: globalVars.fonts.body.letterSpacing,
  lineHeight: 1.8,
});

globalStyle("h1, h2, h3, h4, h5, h6", {
  position: "relative",
  color: globalVars.fonts.heading.color,
  fontFamily: globalVars.fonts.heading.family,
  fontSize: globalVars.fonts.heading.size,
  fontWeight: globalVars.fonts.heading.weight,
  lineHeight: "1.4",
  // letterSpacing: globalVars.fonts.heading.letterSpacing,
});

globalStyle("*, *:after, *:before", {
  boxSizing: "border-box",
});

// globalStyle(`
//   ${content.root} h1,
//   ${content.root} h2, ${content.root} h3, ${content.root} h4, ${content.root} h5, ${content.root} h6, `,
//   {

//   }
// );
globalStyle(`${content.root} h1`, {});

globalStyle("h1", {
  textAlign: "center",
  fontSize: "80px",
});

// const gradientColor = chroma("#921d42");

globalStyle("h2", {
  backgroundColor: "#211d3f",
  backgroundImage: `linear-gradient(87deg, ${colors.brand
    .mix(colors.contrast, 0.2)
    .css()} 0%, ${colors.brand.mix(colors.contrast, 0.8).css()} 100%)`,
  backgroundSize: "100%",
  MozBackgroundClip: "text",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
});

// globalStyle("h2:after", {
//   content: "",
//   ...absolutePosition.topLeft(0, "-15px"),
//   transform: "translateX(-1em)",
//   display: "block",
//   width: "1em",
//   height: "1em",
//   opacity: "0.8",
//   ...backgroundHelper({
//     image:
//       "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2aWV3Qm94PSI0NDIuNDEgMTA5LjE5NyAxNi4wNDIgMTYuMDQ1IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxwYXRoIGQ9Ik0gNDUxLjc0NSAxMjUuMjQxIEwgNDUyLjg4MSAxMjQuMjM4IEMgNDUzLjQzNCAxMjMuNzQ5IDQ1My42MzcgMTIyLjc2OCA0NTMuNjcgMTIxLjYxIEMgNDUxLjk3IDEyMS40OTcgNDUwLjI2OSAxMjEuMDE3IDQ0OS42OTkgMTIwLjUwMSBDIDQ0OS4xODMgMTE5LjkyNSA0NDguOTQ4IDExOS4xNDEgNDQ5LjA0MyAxMTguNTEyIEMgNDQ5LjEzOCAxMTcuODkxIDQ0OS41MjEgMTE3LjIxNiA0NDkuOTczIDExNi43NjMgQyA0NTAuNDI2IDExNi4zMSA0NTEuMTAyIDExNS45MjcgNDUxLjcyMyAxMTUuODMyIEMgNDUyLjM1MiAxMTUuNzM3IDQ1My4xNjYgMTE1Ljk0MiA0NTMuNzEyIDExNi40ODggQyA0NTQuMjU5IDExNy4wMzUgNDU0LjcxNyAxMTguNzU0IDQ1NC44MjUgMTIwLjQ1NiBDIDQ1NS45ODIgMTIwLjQyMyA0NTYuOTYxIDEyMC4yMjEgNDU3LjQ0OSAxMTkuNjcgTCA0NTguNDUyIDExOC41MzQgTCA0NTguNDUyIDEyNS4yNDEgTCA0NTEuNzQ1IDEyNS4yNDEgWiBNIDQ1Ny4yNzYgMTIxLjE3OCBDIDQ1Ni42MDcgMTIxLjQ5MSA0NTYuMzQ5IDEyMS42MzEgNDU0Ljg1NyAxMjEuNjIxIEwgNDU0Ljg1OCAxMjEuNjQzIEwgNDU0Ljg0MiAxMjEuNjQzIEMgNDU0LjgwOCAxMjIuNzM2IDQ1NC42OTEgMTIzLjE5NyA0NTQuMzI3IDEyNC4wNjYgTCA0NTcuMjc2IDEyNC4wNjYgTCA0NTcuMjc2IDEyMS4xNzggWiBNIDQ1Mi44ODEgMTE3LjMxOSBDIDQ1Mi41NSAxMTYuOTg4IDQ1Mi4zMDcgMTE2LjkzMyA0NTEuOTAxIDExNi45OTUgQyA0NTEuNDg3IDExNy4wNTggNDUxLjE0NyAxMTcuMjUxIDQ1MC44MDQgMTE3LjU5NCBDIDQ1MC40NjIgMTE3LjkzNyA0NTAuMjY4IDExOC4yNzYgNDUwLjIwNSAxMTguNjkgQyA0NTAuMTQzIDExOS4wOTYgNDUwLjE2OCAxMTkuMzY4IDQ1MC41MyAxMTkuNjcgQyA0NTAuODg4IDEyMC4wODggNDUyLjE1MiAxMjAuMzYyIDQ1My42NTQgMTIwLjQ0IEMgNDUzLjU3IDExOC45NDggNDUzLjI3NCAxMTcuNzEyIDQ1Mi44ODEgMTE3LjMxOSBaIiBzdHlsZT0iZmlsbDogcmdiKDMzLCAyOSwgNjMpOyIvPgo8L3N2Zz4=",
//   }),
// });

globalStyle("a:focus:not(.focus-visible):not(:focus-visible)", {
  outline: "none",
});

export const fullRotation = keyframes({
  "0%": { transform: "rotate(-360deg)" },
});

globalStyle("abbr", {
  textDecoration: "none",
  fontWeight: globalVars.fonts.body.weight,
  ...backgroundHelper({
    image: `linear-gradient(to left, ${colors.contrast
      .alpha(0.3)
      .hex()}, #f9dd94 100%)`,
    position: "0 100%" as csstype.Property.Position,
    size: "100% 2px",
    repeat: "repeat-x",
  }),
});

globalStyle("abbr[title]", {
  borderBottom: "none",
});

globalStyle("blockquote", {
  marginLeft: 0,
  paddingLeft: "40px",
  borderLeft: `solid ${colors.brand.alpha(0.5).css()} 5px`,
});

globalStyle("a", {
  color: colors.brand.css(),
});

globalStyle("a:visited", {
  color: colors.contrast.css(),
});

// Current Link in menu
globalStyle("a[aria-current='true']", {
  cursor: "default",
  pointerEvents: "none",
  fontWeight: globalVars.fonts.body.weight,
  // color: colors.contrast.css(),
});

// Skip to content link
globalStyle("a[data-reach-skip-link]", {
  background: "#3f3f3f",
  color: "#4b4b4b",
  fontWeight: globalVars.fonts.body.weight,
  border: "solid 1px #ccc",
  boxShadow: globalShadow(),
});

export default globalVars;
