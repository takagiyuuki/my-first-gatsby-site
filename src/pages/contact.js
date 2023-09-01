import * as React from "react";
import Layout from "../components/layout";
import { Seo } from "../components/seo";

const Contact = () => {
  return (
    <Layout pageTitle="Contact">
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </Layout>
  );
};

export const Head = () => <Seo title="Contact" />;

export default Contact;