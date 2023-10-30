import * as React from "react";
// MUI
import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
// import useScrollTrigger from "@mui/material/useScrollTrigger";
// import Slide from "@mui/material/Slide";
// Icons
import { MdEggAlt } from "react-icons/md";
// import { LuEggFried } from "react-icons/lu";
// LocalComponents
import { HeaderMenuIcon } from "./HeaderMenuIcon";
import { HeaderMenuLang } from "./HeaderMenuLang";

// import Box from '@mui/material/Box';
// import Fab from '@mui/material/Fab';
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// import Fade from '@mui/material/Fade';


// interface Props {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   // window?: () => Window;
//   children: React.ReactElement;
// }

// function HideOnScroll(props: Props) {
//   const { children } = props;
//   // const { children, window } = props;
//   // Note that you normally won't need to set the window ref as useScrollTrigger
//   // will default to window.
//   // This is only being set here because the demo is in an iframe.
//   const trigger = useScrollTrigger({
//     // target: window ? window() : undefined,
//   });
//   return (
//     <Slide appear={false} direction="down" in={!trigger}>
//       {children}
//     </Slide>
//   );
// }

// function ElevationScroll(props: Props) {
//   const { children } = props;
//   // const { children, window } = props;
//   // Note that you normally won't need to set the window ref as useScrollTrigger
//   // will default to window.
//   // This is only being set here because the demo is in an iframe.
//   const trigger = useScrollTrigger({
//     disableHysteresis: true,
//     threshold: 0,
//     // target: window ? window() : undefined,
//   });
//   return React.cloneElement(children, {
//     elevation: trigger ? 4 : 0,
//   });
// }

// function ScrollTop(props: Props) {
//   const { children } = props;
//   // const { children, window } = props;
//   // Note that you normally won't need to set the window ref as useScrollTrigger
//   // will default to window.
//   // This is only being set here because the demo is in an iframe.
//   const trigger = useScrollTrigger({
//     // target: window ? window() : undefined,
//     disableHysteresis: true,
//     threshold: 100,
//   });
//   const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
//     const anchor = (
//       (event.target as HTMLDivElement).ownerDocument || document
//     ).querySelector('#back-to-top-anchor');
//     if (anchor) {
//       anchor.scrollIntoView({
//         block: 'center',
//       });
//     }
//   };
//   return (
//     <Fade in={trigger}>
//       <Box
//         onClick={handleClick}
//         role="presentation"
//         sx={{ position: 'fixed', bottom: 16, right: 16 }}
//       >
//         {children}
//       </Box>
//     </Fade>
//   );
// }

export const HeaderBar = () => {
// export const HeaderBar = (props: Props) => {
  const SiteIcon = ({ children }) => {
    return (
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ justifyContent: "flex-start" }}
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
        sx={{ justifyContent: "flex-end" }}
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
      {/* <HideOnScroll {...props}> */}
        {/* <ElevationScroll {...props}> */}
          {/* <Box sx={{ flexGrow: 1 }}> */}
          <AppBar enableColorOnDark={true}>
            <Toolbar sx={{ display: "flex" }}>
              <SiteIcon>
                <MdEggAlt />
                {/* <LuEggFried /> */}
              </SiteIcon>
              <Typography
                variant="h6"
                component="div"
                sx={{ justifyContent: "center" }}
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
        {/* </ElevationScroll>
      <Toolbar /> */}
      {/* </HideOnScroll> */}
    </>
  );
};
