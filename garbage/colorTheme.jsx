import * as React from "react";
// MUI
import {createTheme, ThemeProvider, styled } from "@mui/material/styles";

export const muiTheme = { children } => {
const theme = createTheme({
  palette: {
    primary: {
      main: '#FF5733',
    },
    secondary: {
      main: '#E0C2FF',
      light: '#F5EBFF',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#47008F',
    },
  },
});
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
};
