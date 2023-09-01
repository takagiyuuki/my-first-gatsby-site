import Typography from "typography";
const typography = new Typography(
  {
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  googleFonts: [
    {
      name: "Jost",
      styles: ["400"],
    },
    {
      name: "Noto Sans JP",
      styles: ["400"],
    },
  ],
  headerFontFamily: [
    "Helvetica Neue",
    "Jost",
    "Avenir Next",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
    "Noto Sans JP",
  ],
  bodyFontFamily: [
    "Georgia", 
    "Jost",
    "Noto Sans JP",
  ],
}, 
);

export default typography;
