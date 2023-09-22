import * as React from "react";
import { Layout } from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import { Seo } from "../components/seo";
import * as styles from "../styles/content.module.scss";
import { useTranslation } from "react-i18next";

const IndexPage = () => {
  const { t } = useTranslation();

  return (
    <Layout pageTitle={t("topPage.greeting")}>
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <div className={styles.bodyFlex}>
        <StaticImage
          alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
          src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
          className={styles.bodyImage}
        />
        <div className={styles.bodyText}>
          <p>{t("topPage.introText")}</p>
        </div>
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="Home Page" />;

export default IndexPage;
