import Image from "next/image";
import Link from "next/link";
import {
  decodeHtmlEntities,
  formatDate,
  getAllWpPosts,
  getFeaturedImageFromPost,
  getTextFromHtml,
} from "@/app/blog/wpPosts";

const fallbackBlogCards = [
  {
    image: "/blogs/blog 22.webp",
    imageAlt: "Common ecommerce design and development mistakes in 2026",
    title: "Common Ecommerce Design & Development Mistakes in 2026 – USA Edition",
    excerpt:
      "Discover common ecommerce design and development mistakes in 2026 USA and learn how to avoid them for better growth and conversions.",
    date: "March 21, 2026",
    href: "/blog/common-ecommerce-design-development-mistakes-in-2026-usa-edition",
  },
  {
    image: "/blogs/blog 21.webp",
    imageAlt: "Advanced ecommerce design and development in 2026",
    title:
      "Advanced Ecommerce Design & Development USA 2026 – Create High-Converting Online Stores",
    excerpt:
      "Advanced ecommerce design and development services in USA 2026 to build fast, user-friendly, and high-converting online stores for growth.",
    date: "March 21, 2026",
    href: "/blog/advanced-ecommerce-design-development-usa-2026-create-high-converting-online-stores",
  },
  {
    image: "/blogs/blog 20.webp",
    imageAlt: "Ecommerce website errors that hurt sales",
    title:
      "The Biggest Ecommerce Website Errors Killing Sales in 2026 (USA)",
    excerpt:
      "Biggest ecommerce mistakes in 2026 that hurt sales in the USA—fix issues fast and boost conversions with smart strategies today.",
    date: "March 21, 2026",
    href: "/blog/the-biggest-ecommerce-website-errors-killing-sales-in-2026-usa",
  },
];

function mapWpPostToCard(post: Awaited<ReturnType<typeof getAllWpPosts>>[number]) {
  const title = decodeHtmlEntities(post.title?.rendered || "");
  const excerpt = decodeHtmlEntities(
    getTextFromHtml(post.excerpt?.rendered || post.content?.rendered || "")
  );

  return {
    image: getFeaturedImageFromPost(post) || "/blogs/1.webp",
    imageAlt: title || "Web Founders USA blog post",
    title,
    excerpt: excerpt.length > 190 ? `${excerpt.slice(0, 187)}...` : excerpt,
    date: formatDate(post.date),
    href: `/blog/${post.slug}`,
  };
}

const BlogsGridLocation = async () => {
  const wpPosts = await getAllWpPosts();
  const blogCards = wpPosts
    .filter((post) => post.title?.rendered && post.slug && post.date)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3)
    .map(mapWpPostToCard);
  const cards = blogCards.length ? blogCards : fallbackBlogCards;

  return (
    <section className="bg-white px-5 pb-20 text-[#0b2e50] sm:px-8">
      <div className="mx-auto max-w-[1335px]">
        <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
          <div>
            <h2 className="text-[28px] font-bold leading-tight tracking-[-0.035em] sm:text-[29px]">
              Tech Trends &amp; Innovations
            </h2>
            <p className="mt-[27px] max-w-[1010px] text-[16px] leading-[1.62] tracking-[0.04em] sm:text-[17px]">
              Discover the latest trends in website design, web development, and tech breakthroughs. Stay inspired with fresh articles
              <br className="hidden sm:block" />
              and in-depth case studies to fuel your digital creativity every day.
            </p>
          </div>

          <Link
            href="/blog"
            className="inline-flex h-[41px] w-full shrink-0 items-center justify-center rounded-[10px] bg-[#ffa719] px-8 text-[14px] font-medium uppercase leading-none text-black shadow-sm transition-colors hover:bg-[#f49a0d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffa719] focus-visible:ring-offset-2 sm:w-[199px]"
          >
            See All Blogs
          </Link>
        </div>

        <div className="mt-[63px] grid grid-cols-1 gap-[30px] md:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.title}
              className="flex min-h-[629px] flex-col overflow-hidden rounded-[10px] border-2 border-[#ff71a2] bg-[#e9eef3] shadow-[8px_8px_16px_rgba(255,113,162,0.12)]"
            >
              <Link
                href={card.href}
                className="relative block h-[225px] shrink-0 overflow-hidden bg-[#e9eef3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#ff71a2]"
              >
                <Image
                  src={card.image}
                  alt={card.imageAlt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
              </Link>

              <div className="flex flex-1 flex-col px-[30px] pb-[35px] pt-[28px]">
                <h3 className="text-[25px] font-bold leading-[1.28] tracking-[-0.035em] text-[#173b61]">
                  <Link href={card.href} className="transition-colors hover:text-[#0b2e50]">
                    {card.title}
                  </Link>
                </h3>

                <p className="mt-[49px] text-[17px] leading-[1.42] tracking-[0.015em] text-[#8da1b8]">
                  {card.excerpt}
                </p>

                <div className="mt-auto flex items-center justify-between gap-4 pt-8 text-[16px] font-bold leading-none">
                  {/* <span className="inline-flex min-w-0 items-center gap-1.5 whitespace-nowrap text-[#173b61]">
                    <span aria-hidden="true" className="text-[16px]">
                      🧑🏻‍💻
                    </span>
                    Seo Manager
                  </span> */}
                  <time className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap font-medium text-[#ff3045]">
                    <span aria-hidden="true" className="text-[14px]">
                      🗓️
                    </span>
                    {card.date}
                  </time>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsGridLocation;
