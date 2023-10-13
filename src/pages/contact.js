import * as React from "react";
import { Layout } from "../components/layout";
import { Seo } from "../components/seo";
import { ContactContents } from "../components/ContactContents";

const Contact = () => {
  return (
    <Layout pageTitle="Contact">
      <ContactContents />
    </Layout>
  );
};

export const Head = () => <Seo title="Contact" />;
export default Contact;
