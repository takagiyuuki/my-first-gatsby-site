import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Layout } from "../layouts";
import { Seo } from "../components/seo";
import { Contact } from "../components/contact";
import About from "../content/about.mdx";

function IndexPage() {
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
}

export function Head() {
  return <Seo title="Home Page" />;
}

export default IndexPage;
