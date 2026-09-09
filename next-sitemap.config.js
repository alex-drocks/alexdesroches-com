const siteUrl = "https://alexdesroches.com";
const pagePaths = require("./lib/page-paths.json");

function alternateRefs(frPath, enPath) {
  return [
    {href: `${siteUrl}${frPath}`, hreflang: "fr-CA", hrefIsAbsolute: true},
    {href: `${siteUrl}${enPath}`, hreflang: "en-CA", hrefIsAbsolute: true},
    {href: `${siteUrl}${frPath}`, hreflang: "x-default", hrefIsAbsolute: true},
  ];
}

const metadataByPath = Object.fromEntries(
  Object.values(pagePaths).flatMap(({fr, en, priority}) => {
    const metadata = {priority, alternateRefs: alternateRefs(fr, en)};
    return [[fr, metadata], [en, metadata]];
  })
);

function normalizeSitemapPath(path) {
  if (!path || path === "/") {
    return "/";
  }

  return path.endsWith("/") ? path : `${path}/`;
}

module.exports = {
  siteUrl,
  // Not a next-sitemap option; shared with scripts/check-export.mjs so both agree on paths.
  normalizeSitemapPath,
  // Use manifests because next-sitemap's export glob misses files on Windows.
  sourceDir: ".next",
  outDir: "out",
  exclude: ["/404", "/404/"],
  trailingSlash: true,
  transform: async (config, path) => {
    const normalizedPath = normalizeSitemapPath(path);
    const metadata = metadataByPath[normalizedPath];

    return {
      loc: path,
      changefreq: "monthly",
      priority: metadata?.priority ?? 0.6,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: metadata?.alternateRefs || [],
    };
  },
}
