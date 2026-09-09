import internalPagePaths from "./page-paths.json";

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

export default function getInternalPageLink(page, isEnglish) {
  const paths = internalPagePaths[page];
  return isEnglish ? paths.en : paths.fr;
}

export {getAlternateInternalPath, isEnglishPath, normalizePath};
