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
    // ESLint 10 compatibility shim. eslint-config-next 16.3.0 still targets
    // ESLint 9 (its peer range says >=9.0.0, but it is not tested against 10)
    // and two of its defaults crash outright. Drop this block once Vercel
    // ships a release that supports ESLint 10 natively.
    files: ["**/*.{js,mjs,cjs,jsx,ts,tsx}"],
    languageOptions: {
      // Its parser is @babel/eslint-parser vendored into next/dist/compiled,
      // whose ScopeManager predates the addGlobals() API ESLint 10 requires.
      // This project is plain JS/JSX with no Babel config, so espree covers it.
      parser: require("espree"),
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    settings: {
      // Pin the React version so eslint-plugin-react skips its auto-detection,
      // which calls the context.getFilename() method ESLint 10 removed.
      react: { version: "19.2" },
    },
  },
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    rules: {
      "react/no-unescaped-entities": "off",
      "@next/next/no-img-element": "off",
    },
  },
];
