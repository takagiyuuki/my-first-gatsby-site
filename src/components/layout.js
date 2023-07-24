import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
  footerTitle,
  footerBar,
  modalButton,
} from "./layout.module.css";

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
      </header>
      <nav>
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
          <li lassName={navLinkItem}>
            <button className={modalButton}>modarl</button>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
      <footer className={footerBar}>
        <p className={footerTitle}>this is me.</p>
      </footer>
    </div>
  );
};

export default Layout;
