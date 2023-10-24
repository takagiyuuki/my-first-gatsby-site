import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Paper from "@mui/material/Paper";

export const Contact = () => {
  return (
    <div>
      <Paper elevation={4} square={false}>
        <StaticImage alt="My face" src="../images/icon.png" />
        <p>Yuuki Takagi</p>
        <a
          href="https://notion-blog-8kd.pages.dev"
          rel="external"
          alt="My Blog"
        >
          <StaticImage
            alt="instagram"
            src="https://source.unsplash.com/featured/?cat"
          ></StaticImage>
        </a>
      </Paper>
    </div>
  );
};
