import * as React from "react";
import { Layout } from "../layouts";
import { StaticImage } from "gatsby-plugin-image";

import { Seo } from "../components/seo";
// import * as styles from "../styles/content.module.scss";
import { useTranslation } from "react-i18next";

import { Contact } from "../components/contact";
import About from "../content/about.mdx";

const IndexPage = () => {
  const { t } = useTranslation();

  return (
    <Layout pageTitle={t("topPage.greeting")}>
      <StaticImage
        alt="Static"
        src="https://source.unsplash.com/featured/?rain"
      />
      <p>{t("topPage.introText")}</p>
      <About />
      <Contact />
    </Layout>
  );
};

export const Head = () => <Seo title="Home Page" />;

export default IndexPage;
