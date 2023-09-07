import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link, useStaticQuery, graphql } from "gatsby";
import * as styles from "./layout.module.scss";

const Layout = ({ pageTitle, children }) => {
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
    <div className={styles.container}>
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
      <main className={styles.main}>
        <h1 className={styles.mainHeading}>{pageTitle}</h1>
        {children}
      </main>
      <footer className={styles.footer}>
        <p className={styles.footerTitle}>© Takagi Yuki</p>
        <a
          href="https://github.com/takagiyuuki"
          target="_blank"
          rel="noreferrer"
          className={styles.footerLogoGithub}
        >
          <StaticImage
            alt="Github Link"
            src="../images/github-mark.svg"
            className={styles.footerLogoGithubBlack}
          />
          <StaticImage
            alt="Github Link"
            src="../images/github-mark-white.svg"
            className={styles.footerLogoGithubWhite}
          />
        </a>
      </footer>
    </div>
  );
};

export default Layout;
