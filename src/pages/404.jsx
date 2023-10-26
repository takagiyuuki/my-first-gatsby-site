import * as React from "react";
import { Layout } from "../layouts";
import { Seo } from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";

const NotFoundPage = () => {
  return (
    <Layout pageTitle="404: Page not found">
      <p>Sorry, we couldn’t find what you were looking for.</p>
      <StaticImage
        alt="Static"
        src="https://source.unsplash.com/featured/?desert"
      />
    </Layout>
  );
};

export const Head = () => <Seo title="404: Page not found" />;
export default NotFoundPage;
