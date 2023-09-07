import React from "react";
import { useTranslation } from "react-i18next";

const Index = () => {
  const { t, i18n } = useTranslation();

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div>
      <h1>{t("topPage.greeting")}</h1>
      <ul>
        <li>
          <button onClick={() => changeLang("en")}>EN</button>
        </li>
        <li>
          <button onClick={() => changeLang("de")}>DE</button>
        </li>
        <li>
          <button onClick={() => changeLang("ja")}>JA</button>
        </li>
      </ul>
    </div>
  );
};

export default Index;
