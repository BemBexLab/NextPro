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

const seoProcess = {
  title: "Our SEO Framework: Built for Consistent, Trackable Results",
  steps: [
    {
      number: "1",
      title: "Site + Market Audit",
      description: (
        <>
          Start here see it all laid out. Your spot right now, who else is
          playing, what's holding you back. Dive into real SEO work with{" "}
          <strong>technical SEO consulting team:</strong> can search engines
          reach your pages? Are they saving them properly. What about those web
          performance markers people talk about in{" "}
          <strong>seo optimization services</strong>? Map every chance to move
          forward, both immediate fixes and moves that pay off later. No
          assumptions needed. A solid starting line shows up in full view.
        </>
      ),
    },
    {
      number: "2",
      title: "SEO Roadmap & Playbooks",
      description: (
        <>
          After that comes the strategy shaped by our findings through{" "}
          <strong>seo consulting services</strong>. This plan lays out your
          content path while defining solid targets for{" "}
          <strong>on page SEO on-page services</strong>. Whether you run a tiny
          shop or a large team, everything remains structured and trackable
          without confusion.
        </>
      ),
    },
    {
      number: "3",
      title: "Execution Sprints",
      description: (
        <>
          Because speed keeps changing, steps stay small and quick in our{" "}
          <strong>Organic growth services</strong> approach. Testing happens
          quickly, updates come out quickly, performance is closely watched, and
          changes are made based on what works. Better topic matches and smarter
          links within pages appear through focused{" "}
          <strong>on page Digital visibility services</strong>, and the purpose
          lines up more closely. This makes natural search support more solid,
          which increases visibility where it matters most. Each result
          immediately affects the next move.
        </>
      ),
    },
    {
      number: "4",
      title: "Content That Ranks & Converts",
      description: (
        <>
          If visitors don't buy, rankings don't matter. We use{" "}
          <strong>seo copywriting services</strong> to make landing pages,
          service pages, and supporting articles that match what people are
          really looking for and get them to take action. We offer{" "}
          <a
            href="/service/seo-services/shopify-seo/"
            className="font-bold text-blue-800 hover:underline"
            rel="noopener noreferrer"
          >
            seo shopify services
          </a>{" "}
          for collections and products if you're on{" "}
          <a
            href="/service/seo-services/ecommerce-seo/"
            className="text-blue-800 hover:underline"
            rel="noopener noreferrer"
          >
            eCommerce
          </a>
          . If you're on CMS, we offer{" "}
          <a
            href="/service/seo-services/wordpress-seo/"
            className="font-bold text-blue-800 hover:underline"
            rel="noopener noreferrer"
          >
            seo wordpress services
          </a>{" "}
          that are built for clean structure and growth.
        </>
      ),
    },
    {
      number: "5",
      title: "Authority Building & Trust Signals",
      description: (
        <>
          Start solid, then comes respect with{" "}
          <strong>Organic growth services</strong>. With steady effort, real
          visibility grows backed by genuine references and clear expertise.
          Pages rise when they're seen as reliable, guided by consistent signals
          instead of shortcuts. Strength builds slowly, but it lasts, just like
          with <strong>best Digital visibility services</strong>.
        </>
      ),
    },
    {
      number: "6",
      title: "Reporting, Learnings & Growth Loops",
      description: (
        <>
          Month by month, signs point upward with{" "}
          <strong>seo optimization services</strong> visitors grow, interest
          builds, outcomes take shape. What delivers gains focus. What falls
          short loses steam without needing a push. Reports tell the story
          behind our <strong>seo consulting services</strong>: effort matches
          outcome. Progress creeps forward, not in leaps but steady tweaks,
          reviewed again and again.
        </>
      ),
    },
  ],
};

const seoWhyChoose = {
  title: "Why Choose Our SEO Services?",
  paragraphs: [
    <>
      Fixing errors lifts rankings fast with focused{" "}
      <strong>on page Digital visibility services</strong>. Spotting hidden
      problems on your site uncovers roadblocks holding things back. Start with
      small changes - they deliver speedier outcomes without delay. Pages that
      run smoother pull in more visitors naturally. Progress shows when layout
      makes sense plus words say exactly what matters. People stay longer if
      they find what they need. Over time, interest naturally turns into action
      through steady <strong>Organic growth services</strong>. No tricks, just
      hard work behind the scenes.
    </>,
  ],
  features: [
    { text: "SEO Experts Certified for Real Results", color: "bg-[#0052cc]" },
    { text: "Proven Success Backed by Data", color: "bg-[#ff0000]" },
    { text: "Clear Reports with Continuous Improvements", color: "bg-[#fbbc05]" },
    { text: "SEO Strategies Customized for Your Audience", color: "bg-[#0052cc]" },
    { text: "Personal SEO Manager for Dedicated Support", color: "bg-[#00875a]" },
    { text: "Reliable Partners Committed to Your Growth", color: "bg-[#ff0000]" },
  ],
};

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
        <SEOProcess title={seoProcess.title} steps={seoProcess.steps} />
        <SuccessStories />
        <WhyChoose
          title={seoWhyChoose.title}
          paragraphs={seoWhyChoose.paragraphs}
          features={seoWhyChoose.features}
        />
        <SEOComparison />
        <Testimonials />
        <ContactFormTwo />
        <div className="h-10"></div>
        <div className="h-20"></div>
        <ServiceFAQs faqs={seoServiceFaqs} />
      </section>
    </main>
  );
}
