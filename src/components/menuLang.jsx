import * as React from "react";
import * as styles from "../styles/menuLang.module.scss";

export const menuLang = () => {
  return (
    <div>
      <input type="checkbox" className={styles.menuBtn} id="menu-btn" />
      <label htmlfor={menuBtn} className={styles.menuIcon}>
        <span className={styles.navicon}></span>
      </label>
      <ul className={styles.menu}>
        <li className={styles.top}>
          <p>English</p>
        </li>
        <li>
          <p>Español</p>
        </li>
        <li>
          <p>日本語</p>
        </li>
      </ul>
    </div>
  );
};
