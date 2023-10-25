import Typography from "typography";

const typography = new Typography({
  baseFontSize: "20px",
  baseLineHeight: 1.666,
  googleFonts: [
        {
      name: "Robot",
      styles: ["400", "500", "700", "900"],
    },
    // {
    //   name: "Jost",
    //   styles: ["400", "500", "700", "900"],
    // },
    {
      name: "Noto Sans JP",
      styles: ["400", "500", "700", "900"],
    },
    // {
    //   name: "Didact Gothic",
    //   styles: ["400", "500", "700", "900"],
    // },
  ],
  headerFontFamily: [
    // "Jost",
    // "Noto Sans JP",
    // "Didact Gothic",
    "Roboto", "Noto Sans JP",
  ],
  bodyFontFamily: ["Roboto", "Noto Sans JP"],
});

export default typography;
