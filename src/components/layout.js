import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link, useStaticQuery, graphql } from "gatsby";
import {
  container,
  headContainer,
  bodyContainer,
  heading,
  navBar,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
  footerBar,
  footerTitle,
  logoLink,
  logoImgBlack,
  logoImgWhite,
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
      <div className={headContainer}>
        <header>
          <Link to="/" className={siteTitle}>
            {data.site.siteMetadata.title}
          </Link>
        </header>
        <nav className={navBar}>
          <ul className={navLinks}>
            <li className={navLinkItem}>
              <Link to="/about" className={navLinkText}>
                About
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/contact" className={navLinkText}>
                Contact
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link
                to="https://notion-blog-8kd.pages.dev"
                className={navLinkText}
              >
                Blog
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/services" className={navLinkText}>
                Services
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/artwork" className={navLinkText}>
                Artwork
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className={bodyContainer}>
        <main>
          <h1 className={heading}>{pageTitle}</h1>
          {children}
        </main>
        <footer className={footerBar}>
          <p className={footerTitle}>© Takagi Yuki</p>
          <a
            href="https://github.com/takagiyuuki"
            target="_blank"
            className={logoLink}
          >
            <StaticImage
              alt="Github Link"
              src="../images/github-mark.svg"
              class={logoImgBlack}
            />
            <StaticImage
              alt="Github Link"
              src="../images/github-mark-white.svg"
              class={logoImgWhite}
            />
          </a>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
