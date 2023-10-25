import * as React from "react";
// MUI
import Box from "@mui/material/Box";
// LocalComponents
import { HeaderBar } from "../components/header/sample";
import { Footer } from "../components/footer";
import * as styles from "../styles/layout.module.scss";

import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";

export const Layout = ({ pageTitle, children }) => {
  return (
    // <div className={styles.container}>
    <Box>
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
    </Box>
    // </div>
  );
};
