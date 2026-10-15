import React from "react";
import PageTitle from "@/components/sections/pageTitle";
import ProjectsTab from "@/components/sections/projectsTab";
import ContactFormTwo from "@/components/sections/ContactFormTwo";
import { withEnUsHreflang } from "@/lib/metadata";
import { isInvalidLegacyProjectHref } from "@/lib/invalidLegacyProjectSlugs";

export const revalidate = 900;

const PROJECTS_API_URL = "https://projects-api-bembexlab.vercel.app/api/images/";

async function getProjects() {
  try {
    const response = await fetch(PROJECTS_API_URL, {
      next: { revalidate },
    });

    if (!response.ok) {
      return [];
    }

    const data = await response.json();
    return (data.projects || []).filter(
      (post) =>
        (post.cover_image_url || post.images?.[0]?.image_url) &&
        !isInvalidLegacyProjectHref(post.href_url)
    );
  } catch {
    return [];
  }
}

export const metadata = withEnUsHreflang({
    title: "Our Portfolio - Web Founders USA",
    description: "Explore the Web Founders USA portfolio featuring successful web design, SEO, and digital marketing projects delivering real business growth.",

    keywords: [
    "Our Portfolio",
  ],

    alternates: {
    canonical: "https://www.webfoundersusa.com/portfolio",
  },
});

const Portfolio = async () => {
  const projects = await getProjects();

  return (
    <main>
      {/* <PageTitle pageName={"Portfolio"} breadcrumbLink={"Portfolio"} /> */}
      <ProjectsTab initialPosts={projects} />
      <ContactFormTwo />
    </main>
  );
};

export default Portfolio;
