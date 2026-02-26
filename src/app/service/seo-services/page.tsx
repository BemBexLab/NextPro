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

const SERVICE_ID = "seo-services";

export function generateMetadata(): Metadata {
  const service = getServiceById(SERVICE_ID);
  const title = service?.seo?.title || service?.title || "SEO Services";
  const description = service?.seo?.description || service?.desc || "";

  return {
    title,
    description,
    keywords: service?.seo?.keyword
      ? String(service.seo.keyword)
          .split(",")
          .map((k) => k.trim())
      : undefined,
    alternates: {
      canonical: "https://www.webfoundersusa.com/service/seo-services",
    },
    openGraph: {
      title,
      description,
    },
  };
}

export default function SeoServicesPage() {
  return (
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
      <ClaimFreeCall />
      <ServiceFAQs />
    </section>
  );
}