import * as React from "react";
import { Layout } from "../components/layout";
import { Seo } from "../components/seo";
import { AboutContents } from "../components/AboutContents";

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <AboutContents />
    </Layout>
  );
};

export const Head = () => <Seo title="About Me" />;
export default AboutPage;
