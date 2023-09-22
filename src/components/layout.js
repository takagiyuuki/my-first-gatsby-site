import * as React from "react";
import { Header } from "./header";
import { Footer } from "./footer";
import * as styles from "../styles/layout.module.scss";

export const Layout = ({ pageTitle, children }) => {
  return (
    <div className={styles.container}>
      <Header />
      <main>
        <h1 className={styles.mainHeading}>{pageTitle}</h1>
        {children}
      </main>
      <Footer />
    </div>
  );
};
