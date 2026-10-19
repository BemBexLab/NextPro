import ServiceHero from "@/app/service/seo-services/components/ServiceHero";
import type { Metadata } from "next";
import Link from "next/link";
import React from "react";
import ExploreOurServices from "./components/ExploreOurServices";
import ProfessionalSEO from "./components/ProfessionalSEO";
import ProfessionalSEOServices from "./components/ProfessionalSEOServices";
import QuincyBusinessTypes from "./components/QuincyBusinessTypes";
import QuincyFAQ from "./components/QuincyFAQ";
import QuincyLocalSEO from "./components/QuincyLocalSEO";
import QuincySEOProcess from "./components/QuincySEOProcess";
import QuincySEMPaidSearch from "./components/QuincySEMPaidSearch";
import QuincySEOMeasurement from "./components/QuincySEOMeasurement";
import QuincyWhyChoose from "./components/QuincyWhyChoose";
import { withEnUsHreflang } from "@/lib/metadata";

export const metadata: Metadata = withEnUsHreflang({
  title: "SEO Company Quincy, MA | Web Founders USA",
  description:
    "Web Founders USA helps businesses improve visibility with SEO services in Quincy, MA, including local SEO, technical SEO, and content optimization.",
  alternates: {
    canonical: "/locations/seo-company-quincy/",
  },
});

const page = () => {
  return (
    <section className="overflow-hidden bg-white text-[#202b3b]">
      <ServiceHero
        image={{
          src: "/service-testing/Local-SEO-Agency-LocalMighty.webp",
          alt: "SEO Company Quincy, MA | Web Founders USA",
          priority: true,
        }}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Locations", href: "/locations" },
          { label: "SEO Company Quincy, MA" },
        ]}
        title="SEO Company Quincy, MA | Web Founders USA"
        description={
          <>
            <p className="mb-4">
              Web Founders USA helps companies in increasing their visibility
              online, reaching the right customers, and acquiring a strong
              position on search engines. Our{" "}
              <Link
                className="text-blue-500 hover:underline"
                href="/service/seo-services/"
              >
                SEO services
              </Link>{" "}
              carried out in Quincy, MA concentrate on keyword analysis,
              technical SEO, on-page SEO, local SEO, and content creation, thus
              ensuring long term business success.
            </p>
            <p className="mb-4">
              We develop SEO strategies customized for small businesses, service
              professionals, and bigger businesses alike, based on their
              websites, target markets, competitors, and company vision. The
              goal is to help potential customers find them looking online.
            </p>
            <p className="mb-4">
              We focus on actionable SEO solutions that turn visits into leads
              by improving website organization as well as providing valuable
              content.
            </p>
          </>
        }
        actions={[
          {
            label: "Get a Free SEO Consultation",
            href: "/contact-us/",
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
          submitLabel: "Request a Quote",
        }}
      />
      <ExploreOurServices />
      <ProfessionalSEO />
      <ProfessionalSEOServices />
      <QuincyWhyChoose />
      <QuincySEOProcess />
      <QuincyLocalSEO />
      <QuincyBusinessTypes />
      <QuincySEMPaidSearch />
      <QuincySEOMeasurement />
      <QuincyFAQ />
    </section>
  );
};

export default page;
