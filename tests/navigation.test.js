import {describe, expect, test} from "bun:test";
import getInternalPageLink, {getAlternateInternalPath, isEnglishPath, normalizePath} from "../lib/getInternalPageLink";

describe("bilingual navigation", () => {
  test.each([
    ["index", "/", "/en/"],
    ["programming", "/programmation/", "/en/programming/"],
    ["about", "/a-propos/", "/en/about/"],
    ["contact", "/contact/", "/en/contact/"],
  ])("resolves and switches the %s routes", (page, fr, en) => {
    expect(getInternalPageLink(page, false)).toBe(fr);
    expect(getInternalPageLink(page, true)).toBe(en);
    expect(getAlternateInternalPath(fr)).toBe(en);
    expect(getAlternateInternalPath(en)).toBe(fr);
  });

  test("preserves query strings and page anchors", () => {
    expect(getAlternateInternalPath("/programmation?from=home#projects")).toBe("/en/programming/?from=home#projects");
    expect(getAlternateInternalPath("/en/about///#details")).toBe("/a-propos/#details");
  });

  test("unknown pages switch to the other language's homepage", () => {
    expect(getAlternateInternalPath("/en/missing/")).toBe("/");
    expect(getAlternateInternalPath("/missing/")).toBe("/en/");
  });

  test("only an actual English path segment selects English", () => {
    expect(isEnglishPath("/en?from=home")).toBe(true);
    expect(isEnglishPath("/en/contact/")).toBe(true);
    expect(isEnglishPath("/english/")).toBe(false);
    expect(isEnglishPath("/?redirect=/en/")).toBe(false);
  });

  test("active links ignore trailing slashes, queries, and fragments", () => {
    expect(normalizePath("/contact///?source=header#email")).toBe("/contact");
    expect(normalizePath("/?source=header")).toBe("/");
  });
});
