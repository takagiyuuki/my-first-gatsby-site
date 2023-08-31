import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import {
  container,
  heading,
  navBar,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
  footerTitle,
  footerBar,
  onoffswitch,
  onoffswitchCheckbox,
  onoffswitchLabel,
} from "./layout.module.scss";
import { exportFunction } from "./darkmode.js";

exportFunction.Switchdarkmode;

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
      <header>
        <Link to="/" className={siteTitle}>
          {data.site.siteMetadata.title}
        </Link>
        <div className={onoffswitch}>
          <input
            type="checkbox"
            name="onoffswitch"
            className={onoffswitchCheckbox}
            id="myonoffswitch"
            tabIndex={0}
          />
          <label className={onoffswitchLabel} htmlFor="myonoffswitch" />
        </div>
      </header>
      <nav className={navBar}>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              About
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/blog" className={navLinkText}>
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
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
      <footer className={footerBar}>
        <p className={footerTitle}>Takagi Yuki © 2023 -</p>
      </footer>
    </div>
  );
};

export default Layout;
