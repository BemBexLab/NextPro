import React from "react";
import PageTitle from "@/components/sections/pageTitle";
import ProjectsTab from "@/components/sections/projectsTab";
import ContactFormTwo from "@/components/sections/ContactFormTwo";

export const metadata = {
    title: "OUR PORTFOLIO  | Web Founders USA",
    description: "Explore the Web Founders USA portfolio featuring successful web design, SEO, and digital marketing projects delivering real business growth.",
};

const Portfolio = () => {
  return (
    <main>
      {/* <PageTitle pageName={"Portfolio"} breadcrumbLink={"Portfolio"} /> */}
      <ProjectsTab />
      <ContactFormTwo />
    </main>
  );
};

export default Portfolio;
