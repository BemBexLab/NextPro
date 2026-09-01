export const SITE_URL = "https://www.webfoundersusa.com";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/image123.webp`;

function normalizePathname(pathname) {
  if (!pathname || pathname === "/") {
    return "/";
  }

  if (pathname.endsWith("/")) {
    return pathname;
  }

  const lastSegment = pathname.split("/").pop() || "";

  // Leave asset-like paths unchanged.
  if (lastSegment.includes(".")) {
    return pathname;
  }

  return `${pathname}/`;
}

export function toAbsoluteUrl(value) {
  if (value instanceof URL) {
    const url = new URL(value.toString());
    url.pathname = normalizePathname(url.pathname);
    return url.toString();
  }

  const normalizedValue = String(value || "").trim();

  if (!normalizedValue || normalizedValue === "./") {
    return "./";
  }

  if (/^https?:\/\//i.test(normalizedValue)) {
    const url = new URL(normalizedValue);
    url.pathname = normalizePathname(url.pathname);
    return url.toString();
  }

  const normalizedPath = normalizedValue.startsWith("/")
    ? normalizedValue
    : `/${normalizedValue}`;

  const url = new URL(normalizedPath, SITE_URL);
  url.pathname = normalizePathname(url.pathname);

  return url.toString();
}

export function buildAlternates(canonical) {
  const canonicalUrl = toAbsoluteUrl(canonical);

  return {
    canonical: canonicalUrl,
    languages: {
      "en-us": canonicalUrl,
    },
  };
}

export function withEnUsHreflang(metadata = {}) {
  const canonical = metadata?.alternates?.canonical;
  const canonicalUrl = canonical ? toAbsoluteUrl(canonical) : undefined;

  return {
    ...metadata,
    metadataBase: metadata?.metadataBase || new URL(SITE_URL),
    openGraph: {
      ...(metadata?.openGraph || {}),
      images: [DEFAULT_OG_IMAGE],
    },
    alternates: {
      ...(metadata?.alternates || {}),
      ...(canonicalUrl ? { canonical: canonicalUrl } : {}),
      languages: {
        ...(metadata?.alternates?.languages || {}),
        "en-us": canonicalUrl || "./",
      },
    },
  };
}
