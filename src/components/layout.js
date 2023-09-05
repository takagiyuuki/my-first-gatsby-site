import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link, useStaticQuery, graphql } from "gatsby";
import {
  container,
  header,
  siteTitle,
  navBar,
  navLink,
  navLinkItem,
  navLinkItemText,
  main,
  mainHeading,
  footer,
  footerTitle,
  footerLogoGithub,
  footerLogoGithubBlack,
  footerLogoGithubWhite,
} from "./layout.module.scss";

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
    <div className={container}>
      <header className={header}>
        <Link to="/" className={siteTitle}>
          {data.site.siteMetadata.title}
        </Link>
        <nav className={navBar}>
          <ul className={navLink}>
            <li className={navLinkItem}>
              <Link to="/about" className={navLinkItemText}>
                About
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/contact" className={navLinkItemText}>
                Contact
              </Link>
            </li>
            <li className={navLinkItem}>
              <a
                href="https://notion-blog-8kd.pages.dev"
                rel="external"
                alt="My Blog"
                className={navLinkItemText}
              >
                Blog
              </a>
            </li>
            <li className={navLinkItem}>
              <Link to="/services" className={navLinkItemText}>
                Services
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/artwork" className={navLinkItemText}>
                Artwork
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className={main}>
        <h1 className={mainHeading}>{pageTitle}</h1>
        {children}
      </main>
      <footer className={footer}>
        <p className={footerTitle}>© Takagi Yuki</p>
        <a
          href="https://github.com/takagiyuuki"
          target="_blank"
          rel="noreferrer"
          className={footerLogoGithub}
        >
          <StaticImage
            alt="Github Link"
            src="../images/github-mark.svg"
            class={footerLogoGithubBlack}
          />
          <StaticImage
            alt="Github Link"
            src="../images/github-mark-white.svg"
            class={footerLogoGithubWhite}
          />
        </a>
      </footer>
    </div>
  );
};

export default Layout;
