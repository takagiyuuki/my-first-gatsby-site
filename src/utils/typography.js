import Typography from "typography";

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  googleFonts: [
    {
      name: "Jost",
      styles: ["400", "500", "700", "900"],
    },
    {
      name: "Noto Sans JP",
      styles: ["400", "500", "700", "900"],
    },
    {
      name: "Lato",
      styles: ["400", "500", "700", "900"],
    },
    {
      name: "Neuton",
      styles: ["400", "500", "700", "900"],
    },
    {
      name: "Montserrat",
      styles: ["400", "500", "700", "900"],
    },
    {
      name: "Arvo",
      styles: ["400", "500", "700", "900"],
    },
  ],
  headerFontFamily: [
    "Montserrat",
    "Neuton",
    "Helvetica Neue",
    "Jost",
    "Avenir Next",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
    "Noto Sans JP",
  ],
  bodyFontFamily: ["Arvo", "Lato", "Georgia", "Jost", "Noto Sans JP"],
});

export default typography;
