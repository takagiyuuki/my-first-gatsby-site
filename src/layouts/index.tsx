import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

// import { HideOnScroll } from "../components/AppBar/HideAppBar";
// import { ScrollTop } from "../components/AppBar/BackToTop";

// import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
// import Fab from "@mui/material/Fab";

// import { HeaderBar } from "../components/header/sample";
import { Footer } from "../components/footer";

// import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";

import { DefaultTheme } from "./DefaultTheme";

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#FF5733",
//     },
//     secondary: {
//       main: "#E0C2FF",
//       light: "#F5EBFF",
//       // dark: will be calculated from palette.secondary.main,
//       contrastText: "#47008F",
//     },
//   },
// });

// interface Props {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window?: () => Window;
//   children: React.ReactElement;
// }

// export function Layout(pageTitle, children, props: Props) {
export function Layout(pageTitle, children) {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <CssBaseline />
      {/* <HideOnScroll {...props}> */}
      {/* <HeaderBar /> */}
      {/* </HideOnScroll> */}
      <Toolbar id="back-to-top-anchor" />
      <Container>
        <Box sx={{ my: 2 }}>
          <Typography variant="h6" component="div">
            {pageTitle}
          </Typography>
          {children}
        </Box>
      </Container>
      {/* <ScrollTop>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop> */}
      <Footer />
    </ThemeProvider>
  );
}
