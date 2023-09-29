import * as React from "react";
import { Layout } from "../components/layout";
import { Seo } from "../components/seo";

export const Contact = () => {
  return (
    <>
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <p>Hello World</p>
    </>
  );
};

const ContactTop = () => {
  return (
    <Layout pageTitle="Contact">
      <Contact />
    </Layout>
  );
};

export const Head = () => <Seo title="Contact" />;
export default ContactTop;
