import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

export const Contact = () => {
  return (
    <div>
      <StaticImage alt="My face" src="../images/icon.png" />
      <h2>Yuuki Takagi</h2>
      <a href="https://notion-blog-8kd.pages.dev" rel="external" alt="My Blog">
        <StaticImage
          alt="instagram"
          src="https://source.unsplash.com/featured/?cat"
        ></StaticImage>
      </a>
    </div>
  );
};
