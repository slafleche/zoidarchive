import { createGlobalTheme } from "@vanilla-extract/css";

const vars = createGlobalTheme("#app", {
  space: {
    small: "4px",
    medium: "8px",
    large: "16px",
  },
  fonts: {
    heading: "Georgia, Times, Times New Roman, serif",
    body: "system-ui",
  },
  colors: {
    primary: "#1E40AF",
    secondary: "#DB2777",
    text: {
      normal: "#1F2937",
      dimmed: "#6B7280",
    },
  },
});

export default vars;

// html,
// body {
//   padding: 0;
//   margin: 0;
//   font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
//     Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
// }

// a {
//   color: inherit;
//   text-decoration: none;
// }

// * {
//   box-sizing: border-box;
// }
