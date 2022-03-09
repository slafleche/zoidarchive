import { createTheme, style } from "@vanilla-extract/css";
import * as csstype from "csstype";
import { utilVars, math, measurement } from "../../utils/styleUtils";
import { spin } from "../globals.css";
import { backgroundHelper, centeredBackground } from "../helpers/background";
import { absolutePosition, flexPosition } from "../helpers/positioning";

const logoSize = measurement("50px");
const logoWrapSize = math.multiply(logoSize, 1.5);

const vars = {
  logo: {
    size: logoSize.toString(),
  },
  size: {
    font: "16vw",
  },
};

const logoSpacer = style({
  ...flexPosition.middle(),
  position: "relative",
  width: logoWrapSize,
  height: logoWrapSize,
  minWidth: vars.logo.size,
  minHeight: vars.logo.size,
  zIndex: 1,
  transform: "translate(0, 15%)",

  selectors: {
    "&:before": {
      ...absolutePosition.fullSize(),
      content: "",
      backgroundColor: "black",
      borderRadius: "50%",
      display: "block",
      boxShadow: "0 0 10px black",
      opacity: "0.3",
      transform: "translate(0%, 5%) scale(65%)",
    },
  },
});

const logo = style({
  width: vars.logo.size,
  height: "auto",
  animation: `14s infinite linear ${spin}`,
});

export default {
  root: style({
    /* background by SVGBackgrounds.com */
    ...backgroundHelper({
      repeat: "repeat",
      color: "#fff",
      image:
        "data:image/svg+xml;base64,PCEtLSBHZW5lcmF0ZWQgd2l0aCBodHRwczovL3d3dy5zdmdiYWNrZ3JvdW5kcy5jb20vIC0tPgo8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPScxMDAlJyBvcGFjaXR5PSIwLjIiPgogICA8ZGVmcz4KICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSdhJyBncmFkaWVudFVuaXRzPSd1c2VyU3BhY2VPblVzZScgeDE9JzAnIHgyPScwJyB5MT0nMCcgeTI9JzEwMCUnIGdyYWRpZW50VHJhbnNmb3JtPSdyb3RhdGUoMzI0LDQ1MCw0NTApJz4KICAgICAgICAgPHN0b3Agb2Zmc2V0PScwJyAgc3RvcC1jb2xvcj0nI2ZmZmZmZicvPgogICAgICAgICA8c3RvcCBvZmZzZXQ9JzEnICBzdG9wLWNvbG9yPScjODU3QTlDJy8+CiAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgIDxwYXR0ZXJuIHBhdHRlcm5Vbml0cz0ndXNlclNwYWNlT25Vc2UnIGlkPSdiJyAgd2lkdGg9JzU0MCcgaGVpZ2h0PSc0NTAnIHg9JzAnIHk9JzAnIHZpZXdCb3g9JzAgMCAxMDgwIDkwMCc+CiAgICAgICAgIDxnIGZpbGwtb3BhY2l0eT0nMC4xJz4KICAgICAgICAgICAgPHBvbHlnb24gZmlsbD0nIzQ0NCcgcG9pbnRzPSc5MCAxNTAgMCAzMDAgMTgwIDMwMCcvPgogICAgICAgICAgICA8cG9seWdvbiBwb2ludHM9JzkwIDE1MCAxODAgMCAwIDAnLz4KICAgICAgICAgICAgPHBvbHlnb24gZmlsbD0nI0FBQScgcG9pbnRzPScyNzAgMTUwIDM2MCAwIDE4MCAwJy8+CiAgICAgICAgICAgIDxwb2x5Z29uIGZpbGw9JyNEREQnIHBvaW50cz0nNDUwIDE1MCAzNjAgMzAwIDU0MCAzMDAnLz4KICAgICAgICAgICAgPHBvbHlnb24gZmlsbD0nIzk5OScgcG9pbnRzPSc0NTAgMTUwIDU0MCAwIDM2MCAwJy8+CiAgICAgICAgICAgIDxwb2x5Z29uIHBvaW50cz0nNjMwIDE1MCA1NDAgMzAwIDcyMCAzMDAnLz4KICAgICAgICAgICAgPHBvbHlnb24gZmlsbD0nI0RERCcgcG9pbnRzPSc2MzAgMTUwIDcyMCAwIDU0MCAwJy8+CiAgICAgICAgICAgIDxwb2x5Z29uIGZpbGw9JyM0NDQnIHBvaW50cz0nODEwIDE1MCA3MjAgMzAwIDkwMCAzMDAnLz4KICAgICAgICAgICAgPHBvbHlnb24gZmlsbD0nI0ZGRicgcG9pbnRzPSc4MTAgMTUwIDkwMCAwIDcyMCAwJy8+CiAgICAgICAgICAgIDxwb2x5Z29uIGZpbGw9JyNEREQnIHBvaW50cz0nOTkwIDE1MCA5MDAgMzAwIDEwODAgMzAwJy8+CiAgICAgICAgICAgIDxwb2x5Z29uIGZpbGw9JyM0NDQnIHBvaW50cz0nOTkwIDE1MCAxMDgwIDAgOTAwIDAnLz4KICAgICAgICAgICAgPHBvbHlnb24gZmlsbD0nI0RERCcgcG9pbnRzPSc5MCA0NTAgMCA2MDAgMTgwIDYwMCcvPgogICAgICAgICAgICA8cG9seWdvbiBwb2ludHM9JzkwIDQ1MCAxODAgMzAwIDAgMzAwJy8+CiAgICAgICAgICAgIDxwb2x5Z29uIGZpbGw9JyM2NjYnIHBvaW50cz0nMjcwIDQ1MCAxODAgNjAwIDM2MCA2MDAnLz4KICAgICAgICAgICAgPHBvbHlnb24gZmlsbD0nI0FBQScgcG9pbnRzPScyNzAgNDUwIDM2MCAzMDAgMTgwIDMwMCcvPgogICAgICAgICAgICA8cG9seWdvbiBmaWxsPScjREREJyBwb2ludHM9JzQ1MCA0NTAgMzYwIDYwMCA1NDAgNjAwJy8+CiAgICAgICAgICAgIDxwb2x5Z29uIGZpbGw9JyM5OTknIHBvaW50cz0nNDUwIDQ1MCA1NDAgMzAwIDM2MCAzMDAnLz4KICAgICAgICAgICAgPHBvbHlnb24gZmlsbD0nIzk5OScgcG9pbnRzPSc2MzAgNDUwIDU0MCA2MDAgNzIwIDYwMCcvPgogICAgICAgICAgICA8cG9seWdvbiBmaWxsPScjRkZGJyBwb2ludHM9JzYzMCA0NTAgNzIwIDMwMCA1NDAgMzAwJy8+CiAgICAgICAgICAgIDxwb2x5Z29uIHBvaW50cz0nODEwIDQ1MCA3MjAgNjAwIDkwMCA2MDAnLz4KICAgICAgICAgICAgPHBvbHlnb24gZmlsbD0nI0RERCcgcG9pbnRzPSc4MTAgNDUwIDkwMCAzMDAgNzIwIDMwMCcvPgogICAgICAgICAgICA8cG9seWdvbiBmaWxsPScjQUFBJyBwb2ludHM9Jzk5MCA0NTAgOTAwIDYwMCAxMDgwIDYwMCcvPgogICAgICAgICAgICA8cG9seWdvbiBmaWxsPScjNDQ0JyBwb2ludHM9Jzk5MCA0NTAgMTA4MCAzMDAgOTAwIDMwMCcvPgogICAgICAgICAgICA8cG9seWdvbiBmaWxsPScjMjIyJyBwb2ludHM9JzkwIDc1MCAwIDkwMCAxODAgOTAwJy8+CiAgICAgICAgICAgIDxwb2x5Z29uIHBvaW50cz0nMjcwIDc1MCAxODAgOTAwIDM2MCA5MDAnLz4KICAgICAgICAgICAgPHBvbHlnb24gZmlsbD0nI0RERCcgcG9pbnRzPScyNzAgNzUwIDM2MCA2MDAgMTgwIDYwMCcvPgogICAgICAgICAgICA8cG9seWdvbiBwb2ludHM9JzQ1MCA3NTAgNTQwIDYwMCAzNjAgNjAwJy8+CiAgICAgICAgICAgIDxwb2x5Z29uIHBvaW50cz0nNjMwIDc1MCA1NDAgOTAwIDcyMCA5MDAnLz4KICAgICAgICAgICAgPHBvbHlnb24gZmlsbD0nIzQ0NCcgcG9pbnRzPSc2MzAgNzUwIDcyMCA2MDAgNTQwIDYwMCcvPgogICAgICAgICAgICA8cG9seWdvbiBmaWxsPScjQUFBJyBwb2ludHM9JzgxMCA3NTAgNzIwIDkwMCA5MDAgOTAwJy8+CiAgICAgICAgICAgIDxwb2x5Z29uIGZpbGw9JyM2NjYnIHBvaW50cz0nODEwIDc1MCA5MDAgNjAwIDcyMCA2MDAnLz4KICAgICAgICAgICAgPHBvbHlnb24gZmlsbD0nIzk5OScgcG9pbnRzPSc5OTAgNzUwIDkwMCA5MDAgMTA4MCA5MDAnLz4KICAgICAgICAgICAgPHBvbHlnb24gZmlsbD0nIzk5OScgcG9pbnRzPScxODAgMCA5MCAxNTAgMjcwIDE1MCcvPgogICAgICAgICAgICA8cG9seWdvbiBmaWxsPScjNDQ0JyBwb2ludHM9JzM2MCAwIDI3MCAxNTAgNDUwIDE1MCcvPgogICAgICAgICAgICA8cG9seWdvbiBmaWxsPScjRkZGJyBwb2ludHM9JzU0MCAwIDQ1MCAxNTAgNjMwIDE1MCcvPgogICAgICAgICAgICA8cG9seWdvbiBwb2ludHM9JzkwMCAwIDgxMCAxNTAgOTkwIDE1MCcvPgogICAgICAgICAgICA8cG9seWdvbiBmaWxsPScjMjIyJyBwb2ludHM9JzAgMzAwIC05MCA0NTAgOTAgNDUwJy8+CiAgICAgICAgICAgIDxwb2x5Z29uIGZpbGw9JyNGRkYnIHBvaW50cz0nMCAzMDAgOTAgMTUwIC05MCAxNTAnLz4KICAgICAgICAgICAgPHBvbHlnb24gZmlsbD0nI0ZGRicgcG9pbnRzPScxODAgMzAwIDkwIDQ1MCAyNzAgNDUwJy8+CiAgICAgICAgICAgIDxwb2x5Z29uIGZpbGw9JyM2NjYnIHBvaW50cz0nMTgwIDMwMCAyNzAgMTUwIDkwIDE1MCcvPgogICAgICAgICAgICA8cG9seWdvbiBmaWxsPScjMjIyJyBwb2ludHM9JzM2MCAzMDAgMjcwIDQ1MCA0NTAgNDUwJy8+CiAgICAgICAgICAgIDxwb2x5Z29uIGZpbGw9JyNGRkYnIHBvaW50cz0nMzYwIDMwMCA0NTAgMTUwIDI3MCAxNTAnLz4KICAgICAgICAgICAgPHBvbHlnb24gZmlsbD0nIzQ0NCcgcG9pbnRzPSc1NDAgMzAwIDQ1MCA0NTAgNjMwIDQ1MCcvPgogICAgICAgICAgICA8cG9seWdvbiBmaWxsPScjMjIyJyBwb2ludHM9JzU0MCAzMDAgNjMwIDE1MCA0NTAgMTUwJy8+CiAgICAgICAgICAgIDxwb2x5Z29uIGZpbGw9JyNBQUEnIHBvaW50cz0nNzIwIDMwMCA2MzAgNDUwIDgxMCA0NTAnLz4KICAgICAgICAgICAgPHBvbHlnb24gZmlsbD0nIzY2NicgcG9pbnRzPSc3MjAgMzAwIDgxMCAxNTAgNjMwIDE1MCcvPgogICAgICAgICAgICA8cG9seWdvbiBmaWxsPScjRkZGJyBwb2ludHM9JzkwMCAzMDAgODEwIDQ1MCA5OTAgNDUwJy8+CiAgICAgICAgICAgIDxwb2x5Z29uIGZpbGw9JyM5OTknIHBvaW50cz0nOTAwIDMwMCA5OTAgMTUwIDgxMCAxNTAnLz4KICAgICAgICAgICAgPHBvbHlnb24gcG9pbnRzPScwIDYwMCAtOTAgNzUwIDkwIDc1MCcvPgogICAgICAgICAgICA8cG9seWdvbiBmaWxsPScjNjY2JyBwb2ludHM9JzAgNjAwIDkwIDQ1MCAtOTAgNDUwJy8+CiAgICAgICAgICAgIDxwb2x5Z29uIGZpbGw9JyNBQUEnIHBvaW50cz0nMTgwIDYwMCA5MCA3NTAgMjcwIDc1MCcvPgogICAgICAgICAgICA8cG9seWdvbiBmaWxsPScjNDQ0JyBwb2ludHM9JzE4MCA2MDAgMjcwIDQ1MCA5MCA0NTAnLz4KICAgICAgICAgICAgPHBvbHlnb24gZmlsbD0nIzQ0NCcgcG9pbnRzPSczNjAgNjAwIDI3MCA3NTAgNDUwIDc1MCcvPgogICAgICAgICAgICA8cG9seWdvbiBmaWxsPScjOTk5JyBwb2ludHM9JzM2MCA2MDAgNDUwIDQ1MCAyNzAgNDUwJy8+CiAgICAgICAgICAgIDxwb2x5Z29uIGZpbGw9JyM2NjYnIHBvaW50cz0nNTQwIDYwMCA2MzAgNDUwIDQ1MCA0NTAnLz4KICAgICAgICAgICAgPHBvbHlnb24gZmlsbD0nIzIyMicgcG9pbnRzPSc3MjAgNjAwIDYzMCA3NTAgODEwIDc1MCcvPgogICAgICAgICAgICA8cG9seWdvbiBmaWxsPScjRkZGJyBwb2ludHM9JzkwMCA2MDAgODEwIDc1MCA5OTAgNzUwJy8+CiAgICAgICAgICAgIDxwb2x5Z29uIGZpbGw9JyMyMjInIHBvaW50cz0nOTAwIDYwMCA5OTAgNDUwIDgxMCA0NTAnLz4KICAgICAgICAgICAgPHBvbHlnb24gZmlsbD0nI0RERCcgcG9pbnRzPScwIDkwMCA5MCA3NTAgLTkwIDc1MCcvPgogICAgICAgICAgICA8cG9seWdvbiBmaWxsPScjNDQ0JyBwb2ludHM9JzE4MCA5MDAgMjcwIDc1MCA5MCA3NTAnLz4KICAgICAgICAgICAgPHBvbHlnb24gZmlsbD0nI0ZGRicgcG9pbnRzPSczNjAgOTAwIDQ1MCA3NTAgMjcwIDc1MCcvPgogICAgICAgICAgICA8cG9seWdvbiBmaWxsPScjQUFBJyBwb2ludHM9JzU0MCA5MDAgNjMwIDc1MCA0NTAgNzUwJy8+CiAgICAgICAgICAgIDxwb2x5Z29uIGZpbGw9JyNGRkYnIHBvaW50cz0nNzIwIDkwMCA4MTAgNzUwIDYzMCA3NTAnLz4KICAgICAgICAgICAgPHBvbHlnb24gZmlsbD0nIzIyMicgcG9pbnRzPSc5MDAgOTAwIDk5MCA3NTAgODEwIDc1MCcvPgogICAgICAgICAgICA8cG9seWdvbiBmaWxsPScjMjIyJyBwb2ludHM9JzEwODAgMzAwIDk5MCA0NTAgMTE3MCA0NTAnLz4KICAgICAgICAgICAgPHBvbHlnb24gZmlsbD0nI0ZGRicgcG9pbnRzPScxMDgwIDMwMCAxMTcwIDE1MCA5OTAgMTUwJy8+CiAgICAgICAgICAgIDxwb2x5Z29uIHBvaW50cz0nMTA4MCA2MDAgOTkwIDc1MCAxMTcwIDc1MCcvPgogICAgICAgICAgICA8cG9seWdvbiBmaWxsPScjNjY2JyBwb2ludHM9JzEwODAgNjAwIDExNzAgNDUwIDk5MCA0NTAnLz4KICAgICAgICAgICAgPHBvbHlnb24gZmlsbD0nI0RERCcgcG9pbnRzPScxMDgwIDkwMCAxMTcwIDc1MCA5OTAgNzUwJy8+CiAgICAgICAgIDwvZz4KICAgICAgPC9wYXR0ZXJuPgogICA8L2RlZnM+CiAgIDxyZWN0IHg9JzAnIHk9JzAnIGZpbGw9J3VybCgjYSknIHdpZHRoPScxMDAlJyBoZWlnaHQ9JzEwMCUnLz4KICAgPHJlY3QgeD0nMCcgeT0nMCcgZmlsbD0ndXJsKCNiKScgd2lkdGg9JzEwMCUnIGhlaWdodD0nMTAwJScvPgo8L3N2Zz4K",
    }),

    minHeight: "100vh",
    color: utilVars.white.hex(),
    ...flexPosition.middle(),
    position: "relative",
  }),
  title: style({
    ...flexPosition.middle(),
    padding: "0",
    margin: "0",
    fontSize: vars.size.font,
    textShadow: "rgb(0 0 0 / 100%) 4px 7px 15px",
    color: utilVars.white.hex(),
  }),
  titleWrap: style({
    ...flexPosition.middle(),
  }),
  description: style({
    display: "block",
    padding: "0",
    margin: "0",
    textShadow: "rgb(0 0 0 / 100%) 4px 7px 15px",
    backgroundColor: utilVars.black.alpha(0.5).hex(),
    width: "100%",
    textAlign: "center",
  }),

  overlay: style({
    ...absolutePosition.fullSize(),
  }),
  content: style({
    ...flexPosition.middleLeft(true),
    width: "100%",
    flexDirection: "column",
  }),

  titleZoid: style({
    marginRight: "0.59ex",
  }),
  titleArchive: style({
    marginLeft: "-0.12ex",
  }),
  titleWord: style({
    letterSpacing: "-0.2ex",
  }),
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
  logoSpacer,
  logo,
};
