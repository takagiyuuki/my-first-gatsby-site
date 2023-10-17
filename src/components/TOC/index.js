import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";

const TOC = ({ body }) => {
  return (
<MDXRenderer itemProp="articleBody">{body}</MDXRenderer>
  );
};

export default TOC;
