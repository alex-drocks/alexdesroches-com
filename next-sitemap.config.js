const siteUrl = "https://alexdesroches.com";

function alternateRefs(frPath, enPath) {
  return [
    {href: `${siteUrl}${frPath}`, hreflang: "fr-CA", hrefIsAbsolute: true},
    {href: `${siteUrl}${enPath}`, hreflang: "en-CA", hrefIsAbsolute: true},
    {href: `${siteUrl}${frPath}`, hreflang: "x-default", hrefIsAbsolute: true},
  ];
}

const alternateRefsByPath = {
  "/": alternateRefs("/", "/en/"),
  "/en/": alternateRefs("/", "/en/"),
  "/programmation/": alternateRefs("/programmation/", "/en/programming/"),
  "/en/programming/": alternateRefs("/programmation/", "/en/programming/"),
  "/a-propos/": alternateRefs("/a-propos/", "/en/about/"),
  "/en/about/": alternateRefs("/a-propos/", "/en/about/"),
  "/contact/": alternateRefs("/contact/", "/en/contact/"),
  "/en/contact/": alternateRefs("/contact/", "/en/contact/"),
};

const prioritiesByPath = {
  "/": 1.0,
  "/en/": 1.0,
  "/programmation/": 0.9,
  "/en/programming/": 0.9,
  "/a-propos/": 0.7,
  "/en/about/": 0.7,
  "/contact/": 0.6,
  "/en/contact/": 0.6,
};

function normalizeSitemapPath(path) {
  if (!path || path === "/") {
    return "/";
  }

  return path.endsWith("/") ? path : `${path}/`;
}

module.exports = {
  siteUrl,
  output: "export",
  outDir: "out",
  exclude: ["/404", "/404/"],
  trailingSlash: true,
  transform: async (config, path) => {
    const normalizedPath = normalizeSitemapPath(path);

    return {
      loc: path,
      changefreq: normalizedPath === "/" || normalizedPath === "/en/" ? "weekly" : "monthly",
      priority: prioritiesByPath[normalizedPath] || 0.6,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: alternateRefsByPath[normalizedPath] || [],
    };
  },
}
