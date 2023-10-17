import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Layout } from "../components/layout";
import { Seo } from "../components/seo";
import About from "../content/about.mdx";
import * as styles from "../styles/content.module.scss";

const AboutPage = () => {
  return (
    <Layout pageTitle="AboutPage">
      <StaticImage
        alt="samplea"
        src="https://source.unsplash.com/featured/?food,yellow"
        // width="600"
        // height="400"
      />
      <article className={styles.markdownBody}>
        <About />
      </article>
    </Layout>
  );
};

export const Head = () => <Seo title="About Me" />;
export default AboutPage;
