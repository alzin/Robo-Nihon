// next-i18next.config.js

module.exports = {
  i18n: {
    defaultLocale: "ja",
    locales: ["ja", "en", "ar"],
  },
  defaultNS: "common",
  localePath:
    typeof window === "undefined"
      ? require("path").resolve("./public/locales")
      : "/locales",
};
