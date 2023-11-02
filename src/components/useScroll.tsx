// import * as React from "react";

// export const useScroll = () => {
//   const [scrolling, setScrolling] = React.useState(false);
//   const [scrollTop, setScrollTop] = React.useState(0);

//   let handle: NodeJS.Timeout | null = null;

//   const listener = (e: any) => {
//     if (handle) {
//       clearTimeout(handle);
//     }
//     setScrolling(true);
//     setScrollTop(e.target.documentElement.scrollTop);
//     handle = setTimeout(() => {
//       setScrolling(false);
//     }, 500);
//   };

//   React.useEffect(() => {
//     window.addEventListener("scroll", listener);
//     return () => {
//       window.removeEventListener("scroll", listener);
//     };
//   }, []);

//   return { scrolling, scrollTop };
// }
