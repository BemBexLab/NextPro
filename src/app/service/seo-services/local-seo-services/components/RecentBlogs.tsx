import Image from "next/image";
import Link from "next/link";
import {
  decodeHtmlEntities,
  formatDate,
  getAllWpPosts,
  getFeaturedImageFromPost,
  getTextFromHtml,
} from "@/app/blog/wpPosts";

const RecentBlogs = async () => {
  const posts = await getAllWpPosts();
  const recentPosts = posts
    .filter((post) => post.title?.rendered && post.slug && post.date)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-[92%] max-w-7xl">
        <div className="mb-9 sm:mb-12">
          <div aria-hidden="true" className="mb-5 h-1 w-12 bg-[#c8102e]" />
          <h2 className="text-3xl font-bold leading-tight tracking-[-0.035em] text-slate-950 sm:text-4xl lg:text-5xl">
            Local Search Engine Optimization Insights
          </h2>
        </div>

        {recentPosts.length > 0 ? (
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-3 lg:gap-x-10">
            {recentPosts.map((post) => {
              const title = decodeHtmlEntities(post.title?.rendered || "");
              const rawExcerpt = getTextFromHtml(
                post.excerpt?.rendered || post.content?.rendered || ""
              );
              const excerpt = decodeHtmlEntities(rawExcerpt);
              const image = getFeaturedImageFromPost(post) || "/blogs/1.webp";

              return (
                <article key={post.id} className="group min-w-0">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="relative mb-5 block aspect-[16/9] overflow-hidden bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b63b8] focus-visible:ring-offset-2"
                    aria-label={title}
                  >
                    <Image
                      src={image}
                      alt={title}
                      fill
                      sizes="(min-width: 768px) 33vw, 92vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </Link>

                  <time
                    dateTime={post.date}
                    className="text-xs font-semibold uppercase tracking-[0.12em] text-[#0b63b8]"
                  >
                    {formatDate(post.date)}
                  </time>
                  <h3 className="mt-3 text-xl font-semibold leading-snug tracking-[-0.02em] text-slate-950 sm:text-2xl">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="transition-colors group-hover:text-[#0b63b8] focus-visible:text-[#0b63b8] focus-visible:outline-none"
                    >
                      {title}
                    </Link>
                  </h3>
                  {excerpt ? (
                    <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                      {excerpt.length > 170
                        ? `${excerpt.slice(0, 167).trimEnd()}...`
                        : excerpt}
                    </p>
                  ) : null}
                </article>
              );
            })}
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default RecentBlogs;
