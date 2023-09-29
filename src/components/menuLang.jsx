import * as React from "react";
import * as styles from "../styles/menuLang.module.scss";

export const menuLang = () => {
  return (
    <div>
      <input type="checkbox" className={menuBtn} id="menu-btn" />
      <label htmlfor={menuBtn} className={menuIcon}>
        <span className={navicon}></span>
      </label>
      <ul className={menu}>
        <li className={top}>
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
