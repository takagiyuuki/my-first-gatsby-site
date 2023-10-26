import * as React from "react";
// MUI
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
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
        sx={{ m: "auto" }}
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
        sx={{ m: "auto" }}
        href={link}
        target="_blank"
      >
        {children}
      </IconButton>
    );
  };
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        component="footer"
        sx={{
          mt: "auto",
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="md">
          <SiteIcon>
            <EggAltIcon />
          </SiteIcon>
          <Typography variant="body1" sx={{ px: 1, m: "auto" }}>
            Contact me
          </Typography>
          <Box sx={{ px: 1, m: "auto" }}>
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
          <Copyright />
        </Container>
      </Box>
    </ThemeProvider>
  );
}
