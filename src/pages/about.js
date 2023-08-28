import * as React from "react";
import Layout from "../components/layout";
import { SEO } from "../components/seo";

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>
        Hi there! I'm the proud creator of this site, which I built with Gatsby.
      </p>
    </Layout>
  );
};

// export const Head = () => <title>About Me</title>;
// Rest of the component...

export const Head = () => <SEO title="About Me" />;

export default AboutPage;
