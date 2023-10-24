import * as React from "react";
import { HeaderBar } from "../components/header/sample";
import { Footer } from "../components/footer";
import * as styles from "../styles/layout.module.scss";

export const Layout = ({ pageTitle, children }) => {
  return (
    <div className={styles.container}>
      <HeaderBar />
      <main>
        <h1 className={styles.mainHeading}>{pageTitle}</h1>
        {children}
      </main>
      <Footer />
    </div>
  );
};
