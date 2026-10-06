import Link from "next/link";
import type { Metadata } from "next";
import { withEnUsHreflang } from "@/lib/metadata";
import ServiceHero from "@/app/service/seo-services/components/ServiceHero";
import CaseStudies from "./components/CaseStudy01";
import CaseStudy01 from "./components/CaseStudy01";
import CaseStudy02 from "./components/CaseStudy02";
import AlexandriaServices from "./components/AlexandriaServices";
import Chips from "./components/Chips";
import AlexandriaProcess from "./components/AlexandriaProcess";
import AlexandriaPhilosophy from "./components/AlexandriaPhilosophy";
import AlexandriaSEOIntro from "./components/AlexandriaSEOIntro";
import LocalSEOA_Alexandria from "./components/LocalSEOA_Alexandria";
import AlexandriaNearbyAreas from "./components/AlexandriaNearbyAreas";
import AlexandriaFAQ from "./components/AlexandriaFAQ";

const serviceNames = [
  "Healthcare SEO",
  "Medical SEO",
  "Dental SEO",
  "Employment Lawyer SEO",
  "E-commerce SEO",
  "Shopify SEO",
  "WooCommerce SEO",
  "WordPress SEO",
  "Automotive SEO",
  "Construction SEO",
  "Roofing SEO",
  "Hotel & Hospitality SEO",
  "Insurance SEO",
  "Locksmith SEO",
  "Local Business SEO",
  "Professional Services SEO",
  "Enterprise SEO",
  "Multilingual SEO",
];

const processSteps = [
  {
    title: "Website & SEO Audit",
    description:
      "We analyze your website's technical health, content, structure, indexing, internal links, existing visibility, and important SEO opportunities.",
  },
  {
    title: "Keyword Research",
    description:
      "We identify commercial, local, informational, and long-tail keywords relevant to your services and target customers.",
  },
  {
    title: "Competitor Analysis",
    description:
      "We study competing websites to understand their keyword targeting, content, website structure, local presence, and potential gaps that your business can address.",
  },
  {
    title: "SEO Strategy",
    description:
      "We organize the research into a practical roadmap covering technical SEO, on-page optimization, content, local search, internal linking, and other relevant improvements.",
  },
  {
    title: "Implementation",
    description:
      "We optimize priority pages and address the issues that can have the greatest impact on your website's organic search performance.",
  },
  {
    title: "Monitoring & Improvement",
    description:
      "SEO is an ongoing process. We monitor performance, identify new opportunities, and refine the strategy as your website, competitors, and search landscape change.",
  },
];

const faqs = [
  {
    question: "What is Alexandria SEO?",
    answer:
      "Alexandria SEO is the process of optimizing a business website and online presence to improve visibility for relevant searches from customers in Alexandria, Virginia, and surrounding areas.",
  },
  {
    question: "What does an Alexandria SEO company do?",
    answer:
      "An SEO company can provide keyword research, local SEO, technical SEO, on-page optimization, content optimization, competitor analysis, SEO audits, and Google Business Profile optimization.",
  },
  {
    question: "How can local SEO help my Alexandria business?",
    answer:
      "Local SEO can help your business become more visible for location-based searches and connect with customers searching for your services nearby.",
  },
  {
    question: "How long does SEO take?",
    answer:
      "SEO timelines vary depending on your website, competition, industry, target keywords, content, authority, and the amount of optimization required. SEO is generally an ongoing process rather than a one-time activity.",
  },
];

export const metadata: Metadata = withEnUsHreflang({
  title: "Alexandria Search Engine Optimization - Web Founders USA",
  description:
    "Get expert Alexandria search engine optimization services from Web Founders USA. Improve rankings, traffic, leads, and local visibility.",
  alternates: {
    canonical: "/locations/alexandria-search-engine-optimization/",
  },
});

function SectionHeading({
  eyebrow,
  children,
}: {
  eyebrow?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-10 max-w-3xl sm:mb-14">
      {eyebrow ? (
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#bf0b30] sm:text-sm">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-balance text-3xl font-semibold leading-[1.08] tracking-[-0.035em] text-[#072d7f] sm:text-4xl lg:text-5xl">
        {children}
      </h2>
    </div>
  );
}

export default function AlexandriaSEOPage() {
  return (
    <main className="overflow-hidden bg-white text-[#202b3b]">
      {/* Hero Section */}
      <ServiceHero
        image={{
          src: "/service-testing/Local-SEO-Agency-LocalMighty.webp",
          alt: "Alexandria Search Engine Optimization - Web Founders USA",
          priority: true,
        }}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "SEO Company Gwinnett County" },
        ]}
        title="Alexandria Search Engine Optimization - Web Founders USA"
        description={
          <>
            <p className="mb-4">
              Web Founders USA provides professional SEO services in Alexandria,
              VA for businesses that want to improve organic visibility, attract
              qualified local customers, and generate more leads from Google.
            </p>
            <p>
              Our Alexandria SEO company combines local SEO, technical SEO,
              keyword research, on-page optimization, content strategy, and
              competitor analysis to create a strategy based on your business,
              audience, competition, and service area.
            </p>
          </>
        }
        actions={[
          {
            label: "Start Your SEO Project",
            href: "#contact-form",
            variant: "primary",
          },
        ]}
        form={{
          action: "/api/contact",
          method: "post",
          ariaLabel: "SEO Contact Form",
          fields: [
            {
              id: "hero-name",
              name: "name",
              label: "Full Name",
              placeholder: "John Doe",
              required: true,
              colSpan: 1,
            },
            {
              id: "hero-email",
              name: "email",
              type: "email",
              label: "Email Address",
              placeholder: "john@example.com",
              required: true,
              colSpan: 1,
            },
            {
              id: "hero-phone",
              name: "phone",
              type: "tel",
              label: "Phone Number",
              placeholder: "(555) 123-4567",
              required: false,
              colSpan: 1,
            },
            {
              id: "hero-company",
              name: "company",
              label: "Company Name",
              placeholder: "Your Company",
              required: false,
              colSpan: 1,
            },
            {
              id: "hero-message",
              name: "message",
              as: "textarea",
              label: "Project Details",
              placeholder: "Tell us about your SEO goals...",
              required: true,
              rows: 4,
              colSpan: 2,
            },
          ],
          submitLabel: "Get Free Consultation",
        }}
      />
      <CaseStudy01 />
      <CaseStudy02 />
      <AlexandriaServices />
      <Chips />
      <AlexandriaProcess />
      <AlexandriaPhilosophy />
      <AlexandriaSEOIntro />
      <LocalSEOA_Alexandria />
      <AlexandriaNearbyAreas />
      <AlexandriaFAQ />
    </main>
  );
}
