import * as React from "react";
import Header from "./header";
import Footer from "./footer";
import * as styles from "../styles/layout.module.scss";
import { graphql } from "gatsby"; // delete Link compornent
import { Link, Trans, useTranslation } from "gatsby-plugin-react-i18next";

const Layout = ({ pageTitle, children }) => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.mainHeading}>{pageTitle}</h1>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
