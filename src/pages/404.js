import * as React from "react";
import Layout from "../components/layout";
import { Seo } from "../components/seo";

const NotFoundPage = () => {
  return (
    <Layout pageTitle="Page not found">
      <p>Sorry, we couldn’t find what you were looking for.</p>
    </Layout>
  );
};

export const Head = () => <Seo title="Page not found" />;

export default NotFoundPage;
