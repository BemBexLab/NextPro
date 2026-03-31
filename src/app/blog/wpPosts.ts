export type WPPost = {
  id: number;
  slug: string;
  date: string;
  title?: { rendered?: string };
  content?: { rendered?: string };
  excerpt?: { rendered?: string };
  _embedded?: {
    ["wp:featuredmedia"]?: Array<{
      source_url?: string;
      alt_text?: string;
    }>;
  };
};

const DEFAULT_CMS_ENDPOINT =
  "https://olive-peafowl-546702.hostingersite.com/wp-json/wp/v2/posts";

function normalizeCmsEndpoint() {
  const cmsEndpoint = process.env.CMS?.trim() || DEFAULT_CMS_ENDPOINT;
  return cmsEndpoint.endsWith("/") ? cmsEndpoint.slice(0, -1) : cmsEndpoint;
}

function buildEndpoint(params: Record<string, string>) {
  const base = normalizeCmsEndpoint();
  const separator = base.includes("?") ? "&" : "?";
  return `${base}${separator}${new URLSearchParams(params).toString()}`;
}

export async function getPostBySlug(slug: string): Promise<WPPost | null> {
  const endpoint = buildEndpoint({ slug, _embed: "" });
  const res = await fetch(endpoint, { cache: "no-store" });

  if (!res.ok) {
    return null;
  }

  const posts = (await res.json()) as WPPost[];
  return posts[0] ?? null;
}

export async function getAllWpPosts(): Promise<WPPost[]> {
  const posts: WPPost[] = [];
  let page = 1;

  while (true) {
    const endpoint = buildEndpoint({
      per_page: "100",
      page: String(page),
      _embed: "",
    });
    const res = await fetch(endpoint, { cache: "no-store" });

    if (!res.ok) {
      break;
    }

    const batch = (await res.json()) as WPPost[];
    if (!Array.isArray(batch) || batch.length === 0) {
      break;
    }

    posts.push(...batch);

    if (batch.length < 100) {
      break;
    }

    page += 1;
  }

  return posts;
}

export function formatDate(value: string) {
  return new Date(value).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function getTextFromHtml(html: string) {
  return html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

export function getReadingTime(html: string) {
  const words = getTextFromHtml(html).split(" ").filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 220));
  return `${minutes} min read`;
}

export function getFirstImageFromHtml(html: string) {
  const match = html.match(/<img[^>]+src=["']([^"']+)["'][^>]*>/i);
  return match?.[1] || null;
}

export function decodeHtmlEntities(value = "") {
  return value
    .replace(/&#8211;|&ndash;/g, "-")
    .replace(/&#8212;|&mdash;/g, "-")
    .replace(/&#8217;|&rsquo;/g, "'")
    .replace(/&#8220;|&#8221;|&ldquo;|&rdquo;/g, '"')
    .replace(/&#038;|&amp;/g, "&")
    .replace(/&#039;|&apos;/g, "'")
    .replace(/&hellip;/g, "...")
    .replace(/&nbsp;/g, " ")
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}
