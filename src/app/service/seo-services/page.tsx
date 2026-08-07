import type { Metadata } from "next";
import { getServiceById } from "@/data/services";
import { withEnUsHreflang } from "@/lib/metadata";

import ContactFormTwo from "@/components/sections/ContactFormTwo";
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
import ServiceFAQs from "./components/ServiceFAQs";

const SERVICE_ID = "seo-services";

const seoServiceFaqs = [
  {
    question: "Which industries do you serve?",
    answer: (
      <>
        We offer professional{" "}
        <a
          href="/service/seo-services/b2b-seo/"
          className="font-bold text-blue-800 hover:underline"
          rel="noopener noreferrer"
        >
          b2b seo services
        </a>{" "}
        and{" "}
        <a
          href="/service/seo-services/dental-seo/"
          className="font-bold text-blue-800 hover:underline"
          rel="noopener noreferrer"
        >
          dental seo services
        </a>{" "}
        for businesses in the{" "}
        <a
          href="/service/seo-services/healthcare-seo/"
          className="text-blue-800 hover:underline"
          rel="noopener noreferrer"
        >
          health
        </a>
        ,{" "}
        <a
          href="/service/seo-services/dental-seo/"
          className="text-blue-800 hover:underline"
          rel="noopener noreferrer"
        >
          dental
        </a>
        , law,{" "}
        <a
          href="/service/seo-services/b2b-seo/"
          className="text-blue-800 hover:underline"
          rel="noopener noreferrer"
        >
          B2B
        </a>
        ,{" "}
        <a
          href="/service/seo-services/ecommerce-seo/"
          className="text-blue-800 hover:underline"
          rel="noopener noreferrer"
        >
          eCommerce
        </a>
        ,{" "}
        <a
          href="/service/seo-services/shopify-seo/"
          className="text-blue-800 hover:underline"
          rel="noopener noreferrer"
        >
          shopify
        </a>
        ,{" "}
        <a
          href="/service/seo-services/wordpress-seo/"
          className="text-blue-800 hover:underline"
          rel="noopener noreferrer"
        >
          WordPress
        </a>
        ,{" "}
        <a
          href="/service/seo-services/hotel-seo/"
          className="text-blue-800 hover:underline"
          rel="noopener noreferrer"
        >
          hotels
        </a>
        ,{" "}
        <a
          href="/service/seo-services/automotive-seo/"
          className="text-blue-800 hover:underline"
          rel="noopener noreferrer"
        >
          automotive
        </a>
        ,{" "}
        <a
          href="/service/seo-services/construction-seo/"
          className="text-blue-800 hover:underline"
          rel="noopener noreferrer"
        >
          construction
        </a>
        , SaaS, and other areas.
      </>
    ),
  },
  {
    question: "How long before SEO shows results?",
    answer:
      "Most businesses get to see some kind of improvement in a few months, depending on how much competition there is and how healthy the website is.",
  },
  {
    question: "Do you offer services for small businesses?",
    answer: (
      <>
        That&apos;s right! Our <strong>small business seo services</strong> and{" "}
        <strong>affordable local seo service</strong> are all about providing
        you with effective solutions.
      </>
    ),
  },
  {
    question: "Can you optimize Shopify, WordPress, or WooCommerce websites?",
    answer: (
      <>
        Surely! Each platform&apos;s SEO services are personalized for Shopify,{" "}
        <a
          href="/service/seo-services/wordpress-seo/"
          className="text-blue-800 hover:underline"
          rel="noopener noreferrer"
        >
          WordPress
        </a>
        ,{" "}
        <a
          href="/service/seo-services/woocommerce-seo/"
          className="text-blue-800 hover:underline"
          rel="noopener noreferrer"
        >
          WooCommerce
        </a>
        , and{" "}
        <a
          href="/service/seo-services/bigcommerce-seo/"
          className="text-blue-800 hover:underline"
          rel="noopener noreferrer"
        >
          BigCommerce
        </a>
        .
      </>
    ),
  },
  {
    question: "Do you provide agency support?",
    answer:
      "Yes, the support that we offer to the agencies and partners comes in the form of white label SEO services, private label SEO services, and SEO consulting services for seamless collaboration with the agencies.",
  },
];

export function generateMetadata(): Metadata {
  const service = getServiceById(SERVICE_ID);
  const title =
    service?.seo?.title ||
    service?.title ||
    "SEO Services - Get Quick Ranking Just 30 Days!";
  const description =
    service?.seo?.description ||
    service?.desc ||
    "Expert SEO services by Web Founders USA. We offer technical audits and strategic solutions to grow your online presence and visibility.";

  return withEnUsHreflang({
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
  });
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
	  "@id": "https://www.webfoundersusa.com/service/seo-services/#service",
	  "name": "Complete SEO Services",
	  "alternateName": "Full-Service Search Engine Optimization Agency",
	  "url": "https://www.webfoundersusa.com/service/seo-services/",
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
	    "url": "https://www.webfoundersusa.com/service/seo-services/",
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
        <ContactFormTwo />
        <ServiceFAQs faqs={seoServiceFaqs} />
      </section>
    </main>
  );
}
