import ServicesSection from "./ServicesSection.client";

export const metadata = {
  title: "Service - Web Founders USA",
  description:
    "Explore Web Founders USA services including SEO, web design, and digital marketing solutions built to grow your business.",
    
    keywords: [
    "service",
  ],
    
    alternates: {
    canonical: "https://www.webfoundersusa.com/service",
  },
};

export default function Page() {
  return <ServicesSection />;
}
