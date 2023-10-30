import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Layout } from "../layouts";
import { Seo } from "../components/seo";
import About from "../content/about.mdx";
// import * as styles from "../styles/content.module.scss";

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <StaticImage
        alt="sample"
        src="https://source.unsplash.com/featured/?food,yellow"
      />
      <About />
    </Layout>
  );
};

export const Head = () => <Seo title="About Me" />;
export default AboutPage;
