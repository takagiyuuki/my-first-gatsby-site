import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
export const Contact = () => {
  return (
    <div>
      <StaticImage
        alt="My face"
        src="https://source.unsplash.com/featured/?fox"
      />
      <p>Yuuki Takagi</p>
      <a href="https://notion-blog-8kd.pages.dev" rel="external" alt="My Blog">
        <StaticImage
          alt="instagram"
          src="https://source.unsplash.com/featured/?cat"
        ></StaticImage>
      </a>
    </div>
  );
};
