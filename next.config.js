// next.config.js

const { i18n } = require("./next-i18next.config");

module.exports = {
  i18n: {
    ...i18n,
    localeDetection: false, // This disables automatic locale detection
  },
  rewrites: async () => [
    {
      source: "/sitemap.xml",
      destination: "/api/sitemap.xml",
    },
  ],
};
