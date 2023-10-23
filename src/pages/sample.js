import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";

import { MdEggAlt } from "react-icons/md";
import { LuEggFried } from "react-icons/lu";

import { Seo } from "../components/seo";
import { CustomizedMenus } from "../components/menuIcon";
import { Footer } from "../components/footer";
import { LanguageMenu } from "../components/MenuLang";

import { Contact } from "../components/contact";
import About from "../content/about.mdx";

const ButtonAppBar = () => {
  return (
    <>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              href="/"
            >
              <MdEggAlt />
              <LuEggFried />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
              }}
            >
              <Link
                color="inherit"
                underline="hover"
                href="/about"
                sx={{ px: 2, mt: "auto" }}
              >
                About
              </Link>
              <Link
                color="inherit"
                underline="hover"
                href="/contact"
                sx={{ px: 2, mt: "auto" }}
              >
                Contact
              </Link>
              <Link
                color="inherit"
                underline="hover"
                href="/services"
                sx={{ px: 2, mt: "auto" }}
              >
                Services
              </Link>
              <Link
                color="inherit"
                underline="hover"
                href="/artwork"
                sx={{ px: 2, mt: "auto" }}
              >
                Artwork
              </Link>
              <Link
                color="inherit"
                underline="hover"
                href="https://notion-blog-8kd.pages.dev"
                target="_blank"
                rel="noopener"
                sx={{ px: 2, mt: "auto" }}
              >
                Blog
              </Link>
            </Typography>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <LanguageMenu />
              <CustomizedMenus />
            </IconButton>
          </Toolbar>
        </AppBar>
          <About />
        <Contact />
        <Footer />
      </Box>
    </>
  );
};

export const Head = () => <Seo title="Services" />;

export default ButtonAppBar;
