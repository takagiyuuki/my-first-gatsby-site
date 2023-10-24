// import * as React from "react";
// import { StaticImage } from "gatsby-plugin-image";
// import * as styles from "../../styles/footer.module.scss";

// export const Footer = () => {
//   return (
//     <footer className={styles.footer}>
//       <p className={styles.footerTitle}>© 2023 Takagi Yuki</p>
//       <a
//         href="https://github.com/takagiyuuki"
//         target="_blank"
//         rel="noreferrer"
//         className={styles.footerLogoGithub}
//       >
//         <StaticImage
//           alt="Github Link"
//           src="../../images/github-mark.svg"
//           className={styles.footerLogoGithubBlack}
//         />
//         <StaticImage
//           alt="Github Link"
//           src="../../images/github-mark-white.svg"
//           className={styles.footerLogoGithubWhite}
//         />
//       </a>
//     </footer>
//   );
// };

import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {"Copyright © "}
      <Link color="inherit" href="https://github.com/takagiyuuki/portfolio">
        Yuki Takagi
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

// export default function Footer() {
export function Footer() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1">
            My sticky footer can be found here.
          </Typography>
          <Copyright />
        </Container>
      </Box>
    </ThemeProvider>
  );
};
