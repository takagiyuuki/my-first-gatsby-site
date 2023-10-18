import * as React from "react";
import { Layout } from "../layouts";
import { Seo } from "../components/seo";

const Artwork = () => {
  return (
    <Layout pageTitle="Contact">
      <h1>this is test</h1>
    </Layout>
  );
};

export const Head = () => <Seo title="Artwork" />;
export default Artwork;
