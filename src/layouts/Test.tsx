import * as React from "react";
// MUI
import Box from "@mui/material/Box";
// LocalComponents
import { HeaderBar } from "../components/header/sample";
import { Footer } from "../components/footer";
import * as styles from "../styles/layout.module.scss";

import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF5733",
    },
    secondary: {
      main: "#E0C2FF",
      light: "#F5EBFF",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#47008F",
    },
  },
});  

export const Layout = ({ pageTitle, children }) => {
  return (
    // <div className={styles.container}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <HeaderBar />
        <Box
          sx={{
            my: 8,
            py: 8,
          }}
        >
          {/* <main> */}
          <h1 className={styles.mainHeading}>{pageTitle}</h1>
          {children}
          {/* </main> */}
        </Box>
      </Container>
      <Footer />
    </ThemeProvider>
    // </div>
  );
};