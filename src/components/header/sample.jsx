import * as React from "react";
// MUI
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
// Icons
import { MdEggAlt } from "react-icons/md";
import { LuEggFried } from "react-icons/lu";
// LocalComponents
import { HeaderMenuIcon } from "./HeaderMenuIcon";
import { HeaderMenuLang } from "./HeaderMenuLang";

export const HeaderBar = () => {
  const HeaderIcon = ({ children }) => {
    return (
      <IconButton
        size="medium"
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
  const HeaderLink = ({ link, children }) => {
    return (
      <Link
        color="inherit"
        underline="hover"
        href={link}
        sx={{ px: 2, mt: "auto" }}
      >
        {children}
      </Link>
    );
  };
  return (
    <>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" size="medium">
          <Toolbar>
            <HeaderIcon>
              <MdEggAlt />
              <LuEggFried />
            </HeaderIcon>
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
              }}
            >
              <HeaderLink link={"/about"}>About</HeaderLink>
              <HeaderLink link={"/contact"}>Contact</HeaderLink>
              <HeaderLink link={"/services"}>Services</HeaderLink>
              <HeaderLink link={"/artwork"}>Artwork</HeaderLink>
              <HeaderLink link={"https://notion-blog-8kd.pages.dev"}>
                Blog
              </HeaderLink>
            </Typography>
            <HeaderIcon>
              <HeaderMenuLang />
              <HeaderMenuIcon />
            </HeaderIcon>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};
