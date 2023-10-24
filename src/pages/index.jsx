import * as React from "react";
import { Layout } from "../layouts";
import { StaticImage } from "gatsby-plugin-image";

import { Seo } from "../components/seo";
import * as styles from "../styles/content.module.scss";
import { useTranslation } from "react-i18next";

import { Contact } from "../components/contact";
import About from "../content/about.mdx";

const IndexPage = () => {
  const { t } = useTranslation();

  return (
    <Layout pageTitle={t("topPage.greeting")}>
      {/* <MenuLang /> */}
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <div className={styles.bodyFlex}>
        <StaticImage
          alt="Static"
          src="https://source.unsplash.com/featured/?rain"
          className={styles.bodyImage}
        />
        <div className={styles.bodyText}>
          <p>{t("topPage.introText")}</p>
          <article className={styles.markdownBody}>
            <About />
          </article>
          <Contact />
        </div>
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="Home Page" />;

export default IndexPage;
