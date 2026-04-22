import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { WPPost } from "../wpPosts";
import { getAllWpPosts, getPostBySlug, getTextFromHtml } from "../wpPosts";
import BlogSlugClient from "./BlogSlugClient";

type PageProps = {
  params: {
    slug: string;
  };
};

export const revalidate = 900;

function getPlainText(html = "") {
  return getTextFromHtml(html)
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

function getClientPost(post: WPPost): WPPost {
  return {
    id: post.id,
    slug: post.slug,
    date: post.date,
    class_list: post.class_list,
    title: post.title,
    content: post.content,
    excerpt: post.excerpt,
    yoast_head_json: post.yoast_head_json
      ? {
          og_image: post.yoast_head_json.og_image,
        }
      : undefined,
    _embedded: post._embedded?.["wp:featuredmedia"]?.[0]
      ? {
          "wp:featuredmedia": [
            {
              source_url:
                post._embedded["wp:featuredmedia"][0]?.source_url,
              alt_text: post._embedded["wp:featuredmedia"][0]?.alt_text,
            },
          ],
        }
      : undefined,
  };
}

export async function generateStaticParams() {
  const posts = await getAllWpPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
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

export default async function Page({ params }: PageProps) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return <BlogSlugClient post={getClientPost(post)} />;
}
