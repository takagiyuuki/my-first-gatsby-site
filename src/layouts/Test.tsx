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
import Toolbar from "@mui/material/Toolbar";

import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";


import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fade from '@mui/material/Fade';


interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  // window?: () => Window;
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children } = props;
  // const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    // target: window ? window() : undefined,
  });
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function ElevationScroll(props: Props) {
   const { children } = props;
   // const { children, window } = props;
   // Note that you normally won't need to set the window ref as useScrollTrigger
//   // will default to window.
//   // This is only being set here because the demo is in an iframe.
   const trigger = useScrollTrigger({
     disableHysteresis: true,
     threshold: 0,
//     // target: window ? window() : undefined,
//   });
//   return React.cloneElement(children, {
//     elevation: trigger ? 4 : 0,
//   });
// }

function ScrollTop(props: Props) {
  const { children } = props;
  // const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    // target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector('#back-to-top-anchor');
    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
      });
    }
  };
  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}
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

export const Layout = ({ pageTitle, children, props: Props }) => {
  return (
    // <div className={styles.container}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
<HideOnScroll{props: Props}>
<ElevationScroll{props: Props}>
        <HeaderBar />
</ElevationScroll>
</HideOnScroll>
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