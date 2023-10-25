import * as React from "react";
// MUI
import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
// Icons
import { MdEggAlt } from "react-icons/md";
import { LuEggFried } from "react-icons/lu";
// LocalComponents
import { HeaderMenuIcon } from "./HeaderMenuIcon";
import { HeaderMenuLang } from "./HeaderMenuLang";


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

export const HeaderBar = (props: Props) => {
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
  const HeaderIcon = ({ children }) => {
    return (
      <IconButton
        size="medium"
        edge="end"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 1 }}
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
      <HideOnScroll {...props}>
        {/* <Box sx={{ flexGrow: 1 }}> */}
        <AppBar>
          <Toolbar>
            <SiteIcon>
              <MdEggAlt />
              <LuEggFried />
            </SiteIcon>
            <Typography
              variant="h6"
              component="div"
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
            </HeaderIcon>
            <HeaderIcon>
              <HeaderMenuIcon />
            </HeaderIcon>
          </Toolbar>
        </AppBar>
        {/* </Box> */}
      </HideOnScroll>
    </>
  );
};
