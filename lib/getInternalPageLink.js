const internalPagePaths = {
  index: {
    fr: "/",
    en: "/en/",
  },
  programming: {
    fr: "/programmation/",
    en: "/en/programming/",
  },
  about: {
    fr: "/a-propos/",
    en: "/en/about/",
  },
  contact: {
    fr: "/contact/",
    en: "/en/contact/",
  },
  resume: {
    fr: "/resume/",
    en: "/en/resume/",
  },
};

function splitPathAndSuffix(path = "/") {
  const matchedPath = String(path).match(/^([^?#]*)(.*)$/);

  return {
    pathname: matchedPath?.[1] || "/",
    suffix: matchedPath?.[2] || "",
  };
}

function normalizePath(path = "/") {
  const {pathname} = splitPathAndSuffix(path);

  if (!pathname || pathname === "/") {
    return "/";
  }

  const trimmedPath = pathname.replace(/\/+$/, "");
  return trimmedPath || "/";
}

function isEnglishPath(path = "/") {
  const normalizedPath = normalizePath(path);
  return normalizedPath === "/en" || normalizedPath.startsWith("/en/");
}

function getAlternateInternalPath(path = "/") {
  const {pathname, suffix} = splitPathAndSuffix(path);
  const normalizedPath = normalizePath(pathname);

  for (const localizedPaths of Object.values(internalPagePaths)) {
    if (normalizePath(localizedPaths.en) === normalizedPath) {
      return `${localizedPaths.fr}${suffix}`;
    }

    if (normalizePath(localizedPaths.fr) === normalizedPath) {
      return `${localizedPaths.en}${suffix}`;
    }
  }

  const fallbackPath = isEnglishPath(normalizedPath)
    ? internalPagePaths.index.fr
    : internalPagePaths.index.en;

  return `${fallbackPath}${suffix}`;
}

const pages = Object.fromEntries(
  Object.entries(internalPagePaths).map(([pageName, localizedPaths]) => ([
    pageName,
    (isEnglish) => (isEnglish ? localizedPaths.en : localizedPaths.fr),
  ]))
);

export {getAlternateInternalPath, isEnglishPath, normalizePath};

export default pages;
