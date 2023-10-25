import * as React from "react";
// MUI
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
// Icons
import GitHubIcon from "@mui/icons-material/GitHub";
import EggAltIcon from "@mui/icons-material/EggAlt";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { SiLinktree } from "react-icons/si";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {"Copyright © "}
      <Link
        color="inherit"
        href="https://github.com/takagiyuuki/portfolio"
        underline="hover"
      >
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
  const SiteIcon = ({ children }) => {
    return (
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 1 }}
        href="/"
      >
        {children}
      </IconButton>
    );
  };
  const FooterIcon = ({ link, children }) => {
    return (
      <IconButton
        size="small"
        edge="end"
        color="inherit"
        aria-label="menu"
        // sx={{ mr: 1 }}
        href={link}
        target="_blank"
      >
        {children}
      </IconButton>
    );
  };
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
        <Container maxWidth="md">
          <Toolbar>
            <SiteIcon>
              <EggAltIcon />
            </SiteIcon>
            <Box sx={{ px: 2, mx: 2 }}>
              <Typography variant="body1">Contact me:)</Typography>
              <Copyright />
            </Box>
            <Box sx={{ px: 2, mx: 2 }}>
              <FooterIcon link={"https://github.com/takagiyuuki"}>
                <GitHubIcon />
              </FooterIcon>
              <FooterIcon link={"https://www.linkedin.com/in/takagiyuuki"}>
                <LinkedInIcon />
              </FooterIcon>
              <FooterIcon link={"https://linktr.ee/yuukitakagi"}>
                <SiLinktree />
              </FooterIcon>
            </Box>
          </Toolbar>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
