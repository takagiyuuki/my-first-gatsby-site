import * as React from "react";
import { Layout } from "../components/layout";
import { Seo } from "../components/seo";

export const AboutPage = () => {
  return (
    <>
      <p>
        Hi there! I'm the proud creator of this site, which I built with Gatsby.
      </p>
    </>
  );
};

const AboutPageTop = () => {
  return (
    <Layout pageTitle="About Me">
      <AboutPage />
    </Layout>
  );
};

export const Head = () => <Seo title="About Me" />;
export default AboutPageTop;
