const next = require("eslint-config-next");

module.exports = [
  {
    ignores: [
      ".next/**",
      "out/**",
      "node_modules/**",
      "_iconsToOptimize/**",
      "_imagesToOptimize/**",
      "_originalRawImage/**",
      "data/**",
      "public/**",
      "*.css",
      "affinity/**",
      ".firebase/**",
    ],
  },
  ...next,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    rules: {
      "react/no-unescaped-entities": "off",
      "@next/next/no-img-element": "off",
    },
  },
];
