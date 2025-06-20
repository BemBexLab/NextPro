import React from "react";
import PageTitle from "@/components/sections/pageTitle";
import ProjectsTab from "@/components/sections/projectsTab";

export const metadata = {
    title: "WebFoundersUSA",
    description: "WebFoundersUSA is a leading digital agency specializing in web development, digital marketing, SEO, branding, and e-commerce solutions. We help businesses grow online with custom websites, effective marketing strategies, and measurable results.",
};

const Portfolio = () => {
  return (
    <main>
      {/* <PageTitle pageName={"Portfolio"} breadcrumbLink={"Portfolio"} /> */}
      <ProjectsTab />
    </main>
  );
};

export default Portfolio;
