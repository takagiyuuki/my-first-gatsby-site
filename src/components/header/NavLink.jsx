import * as React from "react";
import { Link } from "gatsby";
import * as styles from "../../styles/header.module.scss";

export const NavLink = () => {
  return (
    <ul>
      <li>
        <Link to="/about">"About"</Link>
      </li>
      <li>
        <Link to="/contact">"Contact"</Link>
      </li>
      <li>
        <a
          href="https://notion-blog-8kd.pages.dev"
          rel="external"
          alt="My Blog"
        >
          "Blog"
        </a>
      </li>
      <li>
        <Link to="/services">"Services"</Link>
      </li>
      <li>
        <Link to="/artwork">"Artwork"</Link>
      </li>
    </ul>
  );
};
