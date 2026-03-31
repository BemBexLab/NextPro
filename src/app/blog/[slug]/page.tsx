import { notFound } from "next/navigation";
import {
  formatDate,
  getFirstImageFromHtml,
  getPostBySlug,
  getReadingTime,
} from "../wpPosts";

export default async function BlogSlugPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);
  if (!post) {
    notFound();
  }

  console.log("CMS blog post:", post);

  const htmlContent = post.content?.rendered || post.excerpt?.rendered || "";
  const featuredImage =
    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || getFirstImageFromHtml(htmlContent);
  const featuredAlt =
    post._embedded?.["wp:featuredmedia"]?.[0]?.alt_text || post.title?.rendered || "Blog image";
  const publishDate = formatDate(post.date);
  const readTime = getReadingTime(htmlContent);

  return (
    <main className="relative overflow-hidden bg-slate-950 text-slate-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.24),transparent_34%),radial-gradient(circle_at_85%_5%,rgba(14,165,233,0.18),transparent_30%)]" />

      <section className="relative mx-auto max-w-5xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_20px_60px_rgba(2,6,23,0.55)] backdrop-blur-md sm:p-10">
          <div className="mb-5 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.15em] text-sky-200/90">
            <span className="rounded-full border border-sky-300/40 bg-sky-400/15 px-3 py-1">
              CMS Blog
            </span>
            <span className="text-slate-300">{publishDate}</span>
            <span className="h-1 w-1 rounded-full bg-slate-400" />
            <span className="text-slate-300">{readTime}</span>
          </div>

          <h1
            className="text-balance text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl"
            dangerouslySetInnerHTML={{ __html: post.title?.rendered || "" }}
          />

          {featuredImage ? (
            <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70">
              <img
                src={featuredImage}
                alt={featuredAlt}
                className="h-auto w-full object-cover"
              />
            </div>
          ) : null}
        </div>
      </section>

      <section className="relative mx-auto max-w-4xl px-4 pb-20 sm:px-6 lg:px-8">
        <article
          className="cms-content rounded-3xl border border-white/10 bg-white px-5 py-8 text-slate-800 shadow-[0_18px_45px_rgba(2,6,23,0.25)] sm:px-8 sm:py-10"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </section>
    </main>
  );
}
