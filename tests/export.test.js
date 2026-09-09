import {afterEach, beforeEach, describe, expect, test} from "bun:test";
import {mkdtemp, mkdir, writeFile, rm} from "node:fs/promises";
import {tmpdir} from "node:os";
import path from "node:path";
import {checkExport} from "../scripts/check-export.mjs";

const siteUrl = "https://example.com";
let directory;
let options;

function sitemapEntry(route, {fr = "/", en = "/en/"} = {}) {
  const alternates = [["fr-CA", fr], ["en-CA", en], ["x-default", fr]]
    .map(([language, target]) => `<xhtml:link rel="alternate" hreflang="${language}" href="${siteUrl}${target}"/>`)
    .join("");
  return `<url><loc>${siteUrl}${route}</loc>${alternates}</url>`;
}

async function writeSitemap(...entries) {
  const xml = `<urlset>${entries.join("")}</urlset>`;
  await writeFile(path.join(options.outDir, "sitemap-0.xml"), xml);
}

beforeEach(async () => {
  directory = await mkdtemp(path.join(tmpdir(), "website-export-test-"));
  options = {
    buildDir: path.join(directory, ".next"),
    outDir: path.join(directory, "out"),
    siteUrl,
    routePairs: [{fr: "/", en: "/en/"}],
  };
  await mkdir(options.buildDir);
  await mkdir(path.join(options.outDir, "en"), {recursive: true});
  await Promise.all([
    writeFile(path.join(options.buildDir, "build-manifest.json"), JSON.stringify({pages: {"/": [], "/en": [], "/_app": [], "/404": []}})),
    writeFile(path.join(options.buildDir, "prerender-manifest.json"), JSON.stringify({routes: {}})),
    writeFile(path.join(options.outDir, "index.html"), "<h1>Accueil</h1>"),
    writeFile(path.join(options.outDir, "en/index.html"), "<h1>Home</h1>"),
    writeFile(path.join(options.outDir, "404.html"), "<h1>Not found</h1>"),
    writeFile(path.join(options.outDir, "sitemap.xml"), `<sitemapindex><sitemap><loc>${siteUrl}/sitemap-0.xml</loc></sitemap></sitemapindex>`),
    writeSitemap(sitemapEntry("/"), sitemapEntry("/en/")),
  ]);
});

afterEach(async () => {
  const root = path.resolve(tmpdir());
  if (directory && path.dirname(directory) === root && path.basename(directory).startsWith("website-export-test-")) {
    await rm(directory, {recursive: true, force: true});
  }
});

describe("static export verification", () => {
  test("accepts a complete bilingual export", async () => {
    expect(await checkExport(options)).toBe(2);
  });

  test("rejects an empty sitemap index", async () => {
    await writeFile(path.join(options.outDir, "sitemap.xml"), "<sitemapindex/>");
    await expect(checkExport(options)).rejects.toThrow("sitemap index is empty");
  });

  test("rejects duplicate URLs and missing pages", async () => {
    await writeSitemap(sitemapEntry("/"), sitemapEntry("/"));
    await expect(checkExport(options)).rejects.toThrow("exactly once");
  });

  test("rejects missing exported HTML", async () => {
    await rm(path.join(options.outDir, "en/index.html"));
    await expect(checkExport(options)).rejects.toThrow();
  });

  test("rejects a registered page pair missing from both the build and sitemap", async () => {
    options.routePairs.push({fr: "/contact/", en: "/en/contact/"});
    await expect(checkExport(options)).rejects.toThrow("Build routes must match the registered language pairs");
  });

  test("rejects a built page without a registered language pair", async () => {
    await writeFile(path.join(options.buildDir, "prerender-manifest.json"), JSON.stringify({routes: {"/unregistered": {}}}));
    await expect(checkExport(options)).rejects.toThrow("Build routes must match the registered language pairs");
  });

  test("rejects a broken language alternate", async () => {
    await writeSitemap(sitemapEntry("/", {en: "/missing/"}), sitemapEntry("/en/"));
    await expect(checkExport(options)).rejects.toThrow("unexported page");
  });

  test("rejects a language alternate that points to another page's translation", async () => {
    const contactPair = {fr: "/contact/", en: "/en/contact/"};
    options.routePairs.push(contactPair);
    const contactEntries = [
      sitemapEntry("/contact/", contactPair),
      sitemapEntry("/en/contact/", contactPair),
    ];
    await mkdir(path.join(options.outDir, "contact"));
    await mkdir(path.join(options.outDir, "en/contact"));
    await Promise.all([
      writeFile(path.join(options.buildDir, "prerender-manifest.json"), JSON.stringify({routes: {"/contact": {}, "/en/contact": {}}})),
      writeFile(path.join(options.outDir, "contact/index.html"), "<h1>Contact</h1>"),
      writeFile(path.join(options.outDir, "en/contact/index.html"), "<h1>Contact</h1>"),
      writeSitemap(sitemapEntry("/"), sitemapEntry("/en/"), ...contactEntries),
    ]);
    expect(await checkExport(options)).toBe(4);
    await writeSitemap(sitemapEntry("/", {en: "/en/contact/"}), sitemapEntry("/en/"), ...contactEntries);
    await expect(checkExport(options)).rejects.toThrow("Incorrect en-CA alternate");
  });

  test("rejects conflicting alternates for the same language", async () => {
    const duplicate = `<xhtml:link rel="alternate" hreflang="en-CA" href="${siteUrl}/"/>`;
    const conflictingEntry = sitemapEntry("/").replace("</url>", `${duplicate}</url>`);
    await writeSitemap(conflictingEntry, sitemapEntry("/en/"));
    await expect(checkExport(options)).rejects.toThrow("exactly one en-CA alternate");
  });

  test.each(["index.html", "404.html"])("rejects an empty exported %s", async file => {
    await writeFile(path.join(options.outDir, file), "");
    await expect(checkExport(options)).rejects.toThrow("Empty exported HTML");
  });
});
