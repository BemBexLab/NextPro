import type { Metadata } from "next";
import ServiceDetailClient from "../[id]/ServiceDetailClient";
import { getServiceById } from "@/data/services";

import ServiceHero from "./components/ServiceHero";
import ExpertsPage from "./components/ExpertsPage";
import OurPartners from "./components/OurPartners";
import LocalSEOServices from "./components/LocalSEOServices";
import AIDiscoveryChannels from "./components/AIDiscoveryChannels";
import SEOProcess from "./components/SEOProcess";
import SuccessStories from "./components/SuccessStories";
import WhyChoose from "./components/WhyChoose";
import SEOComparison from "./components/SEOComparison";
import Testimonials from "./components/Testimonials";
import ClaimFreeCall from "./components/ClaimFreeCall";
import ServiceFAQs from "./components/ServiceFAQs";
import ContactFormTwo from "@/components/sections/ContactFormTwo";

const SERVICE_ID = "seo-services";

export function generateMetadata(): Metadata {
  const service = getServiceById(SERVICE_ID);
  const title = service?.seo?.title || service?.title || "SEO Services - Web Founders USA";
  const description = service?.seo?.description || service?.desc || "Expert SEO services by Web Founders USA. We offer technical audits and strategic solutions to grow your online presence and visibility.";

  return {
    title,
    description,
    keywords: service?.seo?.keyword
      ? String(service.seo.keyword)
          .split(",")
          .map((k) => k.trim())
      : undefined,
    alternates: {
      canonical: "https://www.webfoundersusa.com/service/seo-services/",
    },
    openGraph: {
      title,
      description,
    },
  };
}

export default function SeoServicesPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.webfoundersusa.com/seo-services/#service",
  "name": "Complete SEO Services",
  "alternateName": "Full-Service Search Engine Optimization Agency",
  "url": "https://www.webfoundersusa.com/seo-services/",
  "description": "Web Founders USA provides complete SEO services including Technical SEO, On-Page SEO, Off-Page SEO, Local SEO, Enterprise SEO, E-commerce SEO, SEO Audits, Keyword Research, Content Optimization, Link Building, and Conversion Optimization for businesses of all sizes.",
  "provider": {
    "@type": "Organization",
    "name": "Web Founders USA",
    "url": "https://www.webfoundersusa.com/"
  },
  "serviceType": [
    "SEO Audit",
    "Technical SEO",
    "On-Page SEO",
    "Off-Page SEO",
    "Local SEO",
    "Enterprise SEO",
    "E-commerce SEO",
    "Keyword Research",
    "Competitor Analysis",
    "Content Optimization",
    "Link Building",
    "Backlink Strategy",
    "Conversion Rate Optimization",
    "Mobile SEO",
    "Core Web Vitals Optimization",
    "Schema Markup Implementation",
    "International SEO",
    "SEO Consulting"
  ],
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  },
  "audience": {
    "@type": "Audience",
    "audienceType": "Small Businesses, Startups, Corporations, Enterprises and Online Brands"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://www.webfoundersusa.com/seo-services/",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock"
  }
}`,
        }}
      />
    <section className="text-black">
      <ServiceHero />
      <ExpertsPage params={undefined} />
      <OurPartners />
      <LocalSEOServices />
      <AIDiscoveryChannels />
      <SEOProcess />
      <SuccessStories />
      <WhyChoose />
      <SEOComparison />
      <Testimonials />
      {/* <ClaimFreeCall /> */}
      <ContactFormTwo />
      <ServiceFAQs />
    </section>
    </main>
  );
}
