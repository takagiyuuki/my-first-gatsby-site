import React from "react";
import Layout from "../components/layout";
import { Seo } from "../components/seo";
import { useTranslation } from "react-i18next";

export const Index = () => {
  const { t, i18n } = useTranslation();
  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <Layout pageTitle={t("topPage.pageTitle")}>
      <div>
        <h1>t('topPage.greeting')</h1>
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
    </Layout>
  );
};

export const Head = () => <Seo title={t("topPage.pageTitle")} />;
