import * as React from "react";
// MUI
import Box from "@mui/material/Box";
// LocalComponents
import { HeaderBar } from "../components/header/sample";
import { Footer } from "../components/footer";
import * as styles from "../styles/layout.module.scss";

import Container from "@mui/material/Container";

export const Layout = ({ pageTitle, children }) => {
  return (
    // <div className={styles.container}>
    <Container>
      <HeaderBar />
      <Box sx={{ mt: 6 }}>
        <main>
          <h1 className={styles.mainHeading}>{pageTitle}</h1>
          {children}
        </main>
        <Footer />
      </Box>
    </Container>
    // </div>
  );
};
