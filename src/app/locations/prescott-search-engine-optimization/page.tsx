import type { Metadata } from "next";
import { withEnUsHreflang } from "@/lib/metadata";
import ServiceHero from "@/app/service/seo-services/components/ServiceHero";
import PrescottServices from "./components/PrescottServices";
import PrescottBenefits from "./components/PrescottBenefits";
import PrescottProcess from "./components/PrescottProcess";
import PrescottCaseStudies from "./components/PrescottCaseStudies";
import PrescottWhyChoose from "./components/PrescottWhyChoose";
import PrescottFAQ from "./components/PrescottFAQ";
import PrescottNearbyAreas from "./components/PrescottNearbyAreas";

export const metadata: Metadata = withEnUsHreflang({
  title: "Prescott Search Engine Optimization Services - Web Founders USA",
  description:
    "Explore Prescott search engine optimization services from Web Founders USA, including local SEO, technical SEO, content strategy, and website optimization.",
  alternates: {
    canonical: "/locations/prescott-search-engine-optimization/",
  },
});

export default function PrescottSEOPage() {
  return (
    <main className="overflow-hidden bg-white text-[#202b3b]">
      <ServiceHero
        image={{
          src: "/service-testing/Local-SEO-Agency-LocalMighty.webp",
          alt: "Prescott Search Engine Optimization Services",
          priority: true,
        }}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Locations", href: "/locations" },
          { label: "Prescott Search Engine Optimization Services" },
        ]}
        title="Prescott Search Engine Optimization Services"
        description={
          <>
            <p className="mb-4">
              Is your Prescott business getting overlooked by customers who are searching for your services on Google?
            </p>
            <p className="mb-4">
              Your next customer could be searching for exactly what you offer but if your website isn&apos;t visible in search results, they may choose a competitor instead.
            </p>
            <p className="mb-4">
              Our Prescott search engine optimization services help local businesses improve online visibility, connect with the right audience, and turn relevant searches into real business opportunities.
            </p>
            <p>
              From local SEO and Google Business Profile optimization to <a href="https://www.webfoundersusa.com/blog/technical-seo-issues-that-kill-rankings/" className="underline decoration-[#0033CC] underline-offset-4 hover:text-[#0033CC]">technical improvements</a> and targeted content, we build strategies around how your customers search and what motivates them to take action. You run a home service company, professional practice, or retail business, our SEO services in Prescott, AZ, focus on helping your business stand out in local search and create a smoother experience for potential customers.
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
            { id: "hero-name", name: "name", label: "Full Name", placeholder: "John Doe", required: true, colSpan: 1 },
            { id: "hero-email", name: "email", type: "email", label: "Email Address", placeholder: "john@example.com", required: true, colSpan: 1 },
            { id: "hero-phone", name: "phone", type: "tel", label: "Phone Number", placeholder: "(555) 123-4567", required: false, colSpan: 1 },
            { id: "hero-company", name: "company", label: "Company Name", placeholder: "Your Company", required: false, colSpan: 1 },
            { id: "hero-message", name: "message", as: "textarea", label: "Project Details", placeholder: "Tell us about your SEO goals...", required: true, rows: 4, colSpan: 2 },
          ],
          submitLabel: "Get Free Consultation",
        }}
      />
      <PrescottServices />
      <PrescottBenefits />
      <PrescottProcess />
      <PrescottCaseStudies />
      <PrescottWhyChoose />
      <PrescottFAQ />
      <PrescottNearbyAreas />
    </main>
  );
}
