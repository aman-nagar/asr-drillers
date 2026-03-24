export const LOCALES = ["en", "hi"] as const;

export type Locale = (typeof LOCALES)[number];

export function getLocaleFromPath(pathname: string) {
  return pathname === "/hi" || pathname.startsWith("/hi/") ? "hi" : "en";
}

export function stripLocalePrefix(pathname: string) {
  if (!pathname || pathname === "/") {
    return "/";
  }

  if (pathname === "/hi" || pathname === "/hi/") {
    return "/";
  }

  if (pathname.startsWith("/hi/")) {
    return pathname.slice(3) || "/";
  }

  return pathname;
}

export function withLocalePrefix(pathWithSuffix: string, locale: Locale) {
  const match = pathWithSuffix.match(/^([^?#]*)(.*)$/);
  const rawPath = match?.[1] || "/";
  const suffix = match?.[2] || "";
  const normalizedPath = rawPath === "" ? "/" : rawPath;

  if (locale === "en") {
    return `${normalizedPath === "/" ? "/" : normalizedPath}${suffix}`;
  }

  return `${normalizedPath === "/" ? "/hi/" : `/hi${normalizedPath}`}${suffix}`;
}

export function getAlternateLocalePath(pathname: string) {
  const locale = getLocaleFromPath(pathname);
  const basePath = stripLocalePrefix(pathname);

  return withLocalePrefix(basePath, locale === "en" ? "hi" : "en");
}
