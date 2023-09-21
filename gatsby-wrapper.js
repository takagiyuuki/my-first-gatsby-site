import React from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "./src/utils/i18n/config";

export const rootWrapper = ({ element }) => (
  <>
    <I18nextProvider i18n={i18n}>{element}</I18nextProvider>
  </>
);
