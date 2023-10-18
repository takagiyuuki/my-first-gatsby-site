import * as React from "react";
import { Layout } from "../layouts";
import { Seo } from "../components/seo";
import { Contact } from "../components/contact";

const ContactPage = () => {
  return (
    <Layout pageTitle="Contact">
      <Contact />
    </Layout>
  );
};

export const Head = () => <Seo title="Contact" />;
export default ContactPage;
