export const SITE_URL = "https://www.webfoundersusa.com";

function toAbsoluteUrl(value) {
  if (value instanceof URL) {
    return value.toString();
  }

  const normalizedValue = String(value || "").trim();

  if (!normalizedValue || normalizedValue === "./") {
    return "./";
  }

  if (/^https?:\/\//i.test(normalizedValue)) {
    return normalizedValue;
  }

  const normalizedPath = normalizedValue.startsWith("/")
    ? normalizedValue
    : `/${normalizedValue}`;

  return new URL(normalizedPath, SITE_URL).toString();
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
