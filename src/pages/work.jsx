import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Layout } from "../layouts";
import { Seo } from "../components/seo";

const Work = () => {
  return (
    <Layout pageTitle="Artwork">
      <h2>Illustration</h2>
      <StaticImage
        alt="sample"
        src="https://source.unsplash.com/featured/?oilpaint"
      />
      <h2>Design</h2>
      <StaticImage
        alt="sample"
        src="https://source.unsplash.com/featured/?design"
      />
      <h2>3DCG</h2>
      <StaticImage
        alt="sample"
        src="https://source.unsplash.com/featured/?camera"
      />
      <h2>Animation</h2>
    </Layout>
  );
};

export const Head = () => <Seo title="Artwork" />;
export default Work;
