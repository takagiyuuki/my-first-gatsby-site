import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from "../styles/footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.footerTitle}>© 2023 Takagi Yuki</p>
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
  );
};
