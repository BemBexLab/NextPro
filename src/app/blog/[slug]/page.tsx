import type { Metadata } from "next";
import BlogSlugClient from "./BlogSlugClient";

type PageProps = {
  params: {
    slug: string;
  };
};

type WpPost = {
  slug: string;
  link?: string;
  title?: { rendered?: string };
  content?: { rendered?: string };
  excerpt?: { rendered?: string };
  yoast_head_json?: {
    title?: string;
    description?: string;
    canonical?: string;
    og_image?: Array<{
      url?: string;
      width?: number;
      height?: number;
      type?: string;
    }>;
  };
};

const WP_POSTS_ENDPOINT =
  "https://projectdemolink.com/webfounderstest/index.php/wp-json/wp/v2/posts";

function getPlainText(html = "") {
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&hellip;/g, "...")
    .replace(/&#8211;|&ndash;/g, "-")
    .replace(/&#8212;|&mdash;/g, "-")
    .replace(/&#8217;|&rsquo;/g, "'")
    .replace(/&#8220;|&#8221;|&ldquo;|&rdquo;/g, '"')
    .replace(/&#038;|&amp;/g, "&")
    .replace(/&#039;|&apos;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

async function getPostBySlug(slug: string): Promise<WpPost | null> {
  try {
    const res = await fetch(
      `${WP_POSTS_ENDPOINT}?slug=${encodeURIComponent(slug)}&_embed`,
      { cache: "no-store" }
    );

    if (!res.ok) {
      return null;
    }

    const posts = (await res.json()) as WpPost[];
    return posts[0] ?? null;
  } catch {
    return null;
  }
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);

  const title =
    post?.yoast_head_json?.title ||
    getPlainText(post?.title?.rendered) ||
    "Blog - Web Founders USA";
  const description =
    post?.yoast_head_json?.description ||
    getPlainText(post?.excerpt?.rendered || post?.content?.rendered).slice(0, 160) ||
    "Read expert insights from Web Founders USA on SEO, web design, and digital marketing growth.";
  const canonical = post?.yoast_head_json?.canonical || post?.link;
  const images = post?.yoast_head_json?.og_image
    ?.map((image) => ({
      url: image.url || "",
      width: image.width,
      height: image.height,
      type: image.type,
    }))
    .filter((image) => image.url);

  return {
    title,
    description,
    alternates: canonical ? { canonical } : undefined,
    openGraph: {
      title,
      description,
      type: "article",
      url: canonical,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: images?.map((image) => image.url),
    },
  };
}

export default function Page() {
  return <BlogSlugClient />;
}
