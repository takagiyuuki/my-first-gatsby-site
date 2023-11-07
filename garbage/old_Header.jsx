import * as React from "react";
import { Link } from "gatsby";
import * as styles from "../../styles/header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.siteTitle}>
        {data.site.siteMetadata.title}
      </Link>
      <nav className={styles.navBar}>
        <ul className={styles.navLink}>
          <li className={styles.navLinkItem}>
            <Link to="/about" className={styles.navLinkItemText}>
              About
            </Link>
          </li>
          <li className={styles.navLinkItem}>
            <Link to="/contact" className={styles.navLinkItemText}>
              Contact
            </Link>
          </li>
          <li className={styles.navLinkItem}>
            <a
              href="https://notion-blog-8kd.pages.dev"
              rel="external"
              alt="My Blog"
              className={styles.navLinkItemText}
            >
              Blog
            </a>
          </li>
          <li className={styles.navLinkItem}>
            <Link to="/services" className={styles.navLinkItemText}>
              Services
            </Link>
          </li>
          <li className={styles.navLinkItem}>
            <Link to="/artwork" className={styles.navLinkItemText}>
              Artwork
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
