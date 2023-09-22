import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import * as styles from "../styles/header.module.scss";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const { t, i18n } = useTranslation();
  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
  };

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
      <div className={styles.langButtons}>
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
      <nav className={styles.navBar}>
        <ul className={styles.navLink}>
          <li className={styles.navLinkItem}>
            <Link to="/about" className={styles.navLinkItemText}>
              {t("navbar.About")}
            </Link>
          </li>
          <li className={styles.navLinkItem}>
            <Link to="/contact" className={styles.navLinkItemText}>
              {t("navbar.Contact")}
            </Link>
          </li>
          <li className={styles.navLinkItem}>
            <a
              href="https://notion-blog-8kd.pages.dev"
              rel="external"
              alt="My Blog"
              className={styles.navLinkItemText}
            >
              {t("navbar.Blog")}
            </a>
          </li>
          <li className={styles.navLinkItem}>
            <Link to="/services" className={styles.navLinkItemText}>
              {t("navbar.Services")}
            </Link>
          </li>
          <li className={styles.navLinkItem}>
            <Link to="/artwork" className={styles.navLinkItemText}>
              {t("navbar.Artwork")}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
