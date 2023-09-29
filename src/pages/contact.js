import * as React from "react";
import { Layout } from "../components/layout";
import { Seo } from "../components/seo";
import { childContact } from "../components/childContact";

const Contact = () => {
  return (
    <Layout pageTitle="Contact">
      <childContact />
    </Layout>
  );
};

export const Head = () => <Seo title="Contact" />;
export default Contact;
