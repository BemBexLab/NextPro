import { getAllWpPosts } from "@/app/blog/wpPosts";
import { SITE_URL, toAbsoluteUrl } from "@/lib/metadata";
import { localStaticBlogSlugs } from "@/lib/localStaticBlogSlugs";
import { services } from "@/data/services";
import { services as seoServices } from "@/app/service/seo-services/components/subservices";
import { invalidLegacyProjectSlugs } from "@/lib/invalidLegacyProjectSlugs";

const PROJECTS_ENDPOINT =
  "https://olive-peafowl-546702.hostingersite.com/wp-json/wp/v2/posts";

const staticRoutes = [
  "/",
  "/about-us/",
  "/blog/",
  "/blog-list/",
  "/blog-single-no-siderbar/",
  "/blog-single-sidebar/",
  "/career/",
  "/contact-us/",
  "/faq/",
  "/modern-with-sidebar/",
  "/modern-without-sidebar/",
  "/portfolio/",
  "/portfolio-details/",
  "/pricing/",
  "/privacy/",
  "/service/",
  "/service/seo-services/",
  "/team-carousel/",
  "/terms/",
  "/testimonial/",
];

function toSitemapEntry(url, lastModified) {
  const entry = {
    url: toAbsoluteUrl(url),
  };

  if (lastModified) {
    entry.lastModified = new Date(lastModified);
  }

  return entry;
}

async function safeFetchJson(url, init) {
  try {
    const response = await fetch(url, init);

    if (!response.ok) {
      return null;
    }

    return response.json();
  } catch {
    return null;
  }
}

function getServiceEntries(serviceList = services) {
  const entries = [];

  for (const service of serviceList) {
    entries.push(toSitemapEntry(`/service/${service.id}/`));

    for (const subCategory of service.sub_categories || []) {
      const slug = subCategory.slug || subCategory.id;

      if (!slug) {
        continue;
      }

      entries.push(toSitemapEntry(`/service/${service.id}/${slug}/`));
    }
  }

  return entries;
}

function getLocalBlogEntries() {
  return localStaticBlogSlugs.map((slug) =>
    toSitemapEntry(`/blog/${slug}/`)
  );
}

async function getCmsBlogEntries() {
  const posts = await getAllWpPosts();

  return posts
    .filter((post) => post?.slug)
    .map((post) =>
      toSitemapEntry(`/blog/${post.slug}/`, post.modified || post.date)
    );
}

async function getProjectEntries() {
  const projects = await safeFetchJson(PROJECTS_ENDPOINT, {
    next: { revalidate: 900 },
  });

  if (!Array.isArray(projects)) {
    return [];
  }

  return projects
    .filter(
      (project) =>
        project?.slug && !invalidLegacyProjectSlugs.has(project.slug)
    )
    .map((project) =>
      toSitemapEntry(
        `/projects/${project.slug}/`,
        project.modified || project.date
      )
    );
}

export default async function sitemap() {
  const entries = [
    ...staticRoutes.map((route) => toSitemapEntry(route)),
    ...getServiceEntries(),
    ...getServiceEntries(seoServices),
    ...getLocalBlogEntries(),
    ...(await getCmsBlogEntries()),
    ...(await getProjectEntries()),
  ];

  const uniqueEntries = Array.from(
    new Map(entries.map((entry) => [entry.url, entry])).values()
  );

  return uniqueEntries.sort((a, b) => {
    if (a.url === SITE_URL || a.url === `${SITE_URL}/`) {
      return -1;
    }

    if (b.url === SITE_URL || b.url === `${SITE_URL}/`) {
      return 1;
    }

    return a.url.localeCompare(b.url);
  });
}
