"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var i18next_1 = require("i18next");
i18next_1.default.init({
    fallbackLng: "en",
    resources: {
        ja: {
            translations: require("./locales/ja.json"),
        },
        en: {
            translations: require("./locales/en.json"),
        },
    },
    ns: ["translations"],
    defaultNS: "translations",
    returnObjects: true,
    debug: process.env.NODE_ENV === "development",
    interpolation: {
        escapeValue: false, // not needed for react!!
    },
    react: {
        wait: true,
    },
});
i18next_1.default.languages = ["ja", "en"];
exports.default = i18next_1.default;
