import * as React from "react";
import { Layout } from "../layouts";
import { StaticImage } from "gatsby-plugin-image";

import { Seo } from "../components/seo";
// import * as styles from "../styles/content.module.scss";

import { Contact } from "../components/contact";
import About from "../content/about.mdx";

const IndexPage = () => {
  return (
    <Layout pageTitle="Hi">
      <StaticImage
        alt="Static"
        src="https://source.unsplash.com/featured/?rain"
      />
      <p>
        Welcome My branding site.I'm Yuki.This website is my branding pages.
      </p>
      <About />
      <Contact />
    </Layout>
  );
};

export const Head = () => <Seo title="Home Page" />;

export default IndexPage;
