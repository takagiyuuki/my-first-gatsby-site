import * as React from "react";
import { Layout } from "../components/layout";
import { Seo } from "../components/seo";
import { childAbout } from "../components/childAbout";

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <childAbout />
    </Layout>
  );
};

export const Head = () => <Seo title="About Me" />;
export default AboutPage;
