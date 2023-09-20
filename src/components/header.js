import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import * as styles from "../styles/header.module.scss";
import {
  Link,
  Trans,
  useTranslation,
} from "@herob/gatsby-plugin-react-i18next";

const Header = ( ) => {
  const { t } = useTranslation();
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
      <header className={styles.header}>
      <Link to="/" className={styles.siteTitle}>
        {data.site.siteMetadata.title}
      </Link>
      <nav className={styles.navBar}>
        <ul className={styles.navLink}>
          <li className={styles.navLinkItem}>
            <Link to="/about" className={styles.navLinkItemText}>
              <Trans>About</Trans>
            </Link>
          </li>
          <li className={styles.navLinkItem}>
            <Link to="/contact" className={styles.navLinkItemText}>
              <Trans>Contact</Trans>
            </Link>
          </li>
          <li className={styles.navLinkItem}>
            <a
              href="https://notion-blog-8kd.pages.dev"
              rel="external"
              alt="My Blog"
              className={styles.navLinkItemText}
            >
              <Trans>Blog</Trans>
            </a>
          </li>
          <li className={styles.navLinkItem}>
            <Link to="/services" className={styles.navLinkItemText}>
              <Trans>Services</Trans>
            </Link>
          </li>
          <li className={styles.navLinkItem}>
            <Link to="/artwork" className={styles.navLinkItemText}>
              <Trans>Artwork</Trans>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
