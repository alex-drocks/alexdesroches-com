import assert from "node:assert/strict";
import {readFile} from "node:fs/promises";
import path from "node:path";
import {fileURLToPath} from "node:url";
import sitemapConfig from "../next-sitemap.config.js";
import pagePaths from "../lib/page-paths.json" with {type: "json"};

const {normalizeSitemapPath} = sitemapConfig;
const getLocations = xml => [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]);

export async function checkExport({
  buildDir = ".next",
  outDir = "out",
  siteUrl = sitemapConfig.siteUrl,
  routePairs = Object.values(pagePaths),
} = {}) {
  const [build, prerender] = (await Promise.all([
    readFile(path.join(buildDir, "build-manifest.json"), "utf8"),
    readFile(path.join(buildDir, "prerender-manifest.json"), "utf8"),
  ])).map(text => JSON.parse(text));
  const discoveredRoutes = [
    ...Object.keys(build.pages),
    ...Object.keys(prerender.routes),
  ];
  const publicRoutes = discoveredRoutes.filter(route =>
    !route.startsWith("/_") && !["/404", "/500"].includes(route) && !route.includes("[")
  );
  const routes = [...new Set(publicRoutes.map(normalizeSitemapPath))].sort();

  assert.ok(routes.length, "The build contains no public pages");
  const registeredRoutes = routePairs.flatMap(({fr, en}) => [fr, en]).map(normalizeSitemapPath).sort();
  assert.deepEqual(routes, registeredRoutes, "Build routes must match the registered language pairs");
  const htmlFiles = routes.map(route => path.join(outDir, route.slice(1), "index.html"));
  htmlFiles.push(path.join(outDir, "404.html"));
  await Promise.all(htmlFiles.map(async (file) => {
    assert.ok((await readFile(file, "utf8")).trim(), `Empty exported HTML: ${file}`);
  }));

  const index = await readFile(path.join(outDir, "sitemap.xml"), "utf8");
  const sitemapUrls = getLocations(index);
  assert.ok(sitemapUrls.length, "The sitemap index is empty");

  const expectedUrls = routes.map(route => `${siteUrl}${route}`).sort();
  const actualUrls = [];
  const root = path.resolve(outDir);
  const origin = new URL(siteUrl).origin;

  for (const sitemapUrl of sitemapUrls) {
    const url = new URL(sitemapUrl);
    assert.equal(url.origin, origin, "Unexpected sitemap host");
    const sitemapPath = path.resolve(root, decodeURIComponent(url.pathname).slice(1));
    assert.ok(sitemapPath.startsWith(`${root}${path.sep}`), "Sitemap file must be inside the export");
    const xml = await readFile(sitemapPath, "utf8");
    const entries = [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)].map(match => match[1]);
    for (const entry of entries) {
      const locations = getLocations(entry);
      assert.equal(locations.length, 1, "Each sitemap entry must identify one page");
      const pageUrl = locations[0];
      actualUrls.push(pageUrl);

      const pair = routePairs.find(({fr, en}) => pageUrl === `${siteUrl}${fr}` || pageUrl === `${siteUrl}${en}`);
      assert.ok(pair, `Missing registered language pair for ${pageUrl}`);
      const expectedAlternates = {"fr-CA": pair.fr, "en-CA": pair.en, "x-default": pair.fr};
      const alternates = [...entry.matchAll(/<xhtml:link\b[^>]*>/g)].map(match => match[0]);

      for (const [language, route] of Object.entries(expectedAlternates)) {
        const matches = alternates.filter(link => link.includes(`hreflang="${language}"`));
        assert.equal(matches.length, 1, `Expected exactly one ${language} alternate for ${pageUrl}`);
        const href = matches[0].match(/\bhref="([^"]+)"/)?.[1];
        assert.ok(expectedUrls.includes(href), `Alternate points to an unexported page: ${href}`);
        assert.equal(href, `${siteUrl}${route}`, `Incorrect ${language} alternate for ${pageUrl}`);
      }
    }
  }
  assert.deepEqual(actualUrls.sort(), expectedUrls, "Sitemap must contain every exported page exactly once");
  return routes.length;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const count = await checkExport();
  console.log(`Static export verified: ${count} pages, sitemap language links, and 404 page.`);
}
