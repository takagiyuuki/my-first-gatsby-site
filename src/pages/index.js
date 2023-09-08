import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import { Seo } from "../components/seo";
import styles from "../styles/content.module.scss";
// import { useTranslation } from "react-i18next";
import { Link, Trans, useTranslation } from "gatsby-plugin-react-i18next";

const IndexPage = () => {
  // const { t, i18n } = useTranslation();
  // const changeLang = (lang) => {
  //   i18n.changeLanguage(lang);
  // };
  const { t } = useTranslation();

  return (
    <Layout pageTitle={t("greeting")}>
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <div className={styles.bodyFlex}>
        <StaticImage
          alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
          src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
          className={styles.bodyImage}
        />
        <div className={styles.bodyText}>
          <h2>Hi! I'm Yuki</h2>
          <p>Welcome My branding site.</p>
          <p>This website is my branding pages.</p>
          <ul>
            <li>
              <button onClick={() => changeLang("en")}>EN</button>
            </li>
            <li>
              <button onClick={() => changeLang("de")}>DE</button>
            </li>
            <li>
              <button onClick={() => changeLang("ja")}>JA</button>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="Home Page" />;

export default IndexPage;
