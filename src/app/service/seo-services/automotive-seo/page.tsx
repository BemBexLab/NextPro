import type { Metadata } from "next";
import ServiceHero from "../components/ServiceHero";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";
import Section7 from "./components/Section7";
import Section8 from "./components/Section8";
import Section9 from "./components/Section9";
import Section10 from "./components/Section10";
import Section11 from "./components/Section11";
import Section12 from "./components/Section12";
import CaseStudy from "../components/CaseStudy";
import CaseStudy2 from "../components/CaseStudy2";
import InfiniteLogoSlider from "./components/InfiniteLogoSlider";
import Testimonials2 from "./components/Testimonials2";
import InfiniteToolSlider from "./components/InfiniteToolSlider";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Automotive SEO Services | Web Founders USA",
  description:
    "Automotive SEO services for dealerships, repair shops, auto parts businesses, and other automotive brands.",
  alternates: {
    canonical: "/service/seo-services/automotive-seo/",
  },
};

export default function AutomotiveSeoPage() {
  return (
    <section>
      <ServiceHero
        image={{
          src: "/service-testing/Local-SEO-Agency-LocalMighty.webp",
          alt: "SEO services hero background",
        }}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Service", href: "/service" },
          { label: "SEO Services", href: "/service/seo-services" },
          { label: "Automotive SEO Services" },
        ]}
        title="Automotive SEO Services That Drive More Traffic, Leads & Sales"
        description={<div className="space-y-3">
            <p><Link className="font-semibold text-white hover:text-slate-400 underline" href="/">Web Founders USA</Link> delivers specialized automotive <Link className="font-semibold text-white hover:text-slate-400 underline" href={"/service/seo-services/"}>SEO services</Link> for car dealerships, auto repair shops, mechanics, auto body shops, auto parts businesses, trucking companies, and other automotive brands. We help automotive businesses improve their visibility on Google, reach high-intent customers, and turn organic traffic into calls, appointments, inquiries, and sales.</p>
            <p>Today, customers search online before buying a vehicle, finding a dealership, booking a repair, comparing services, or purchasing automotive parts. Our automotive search engine optimization strategies help your business appear when those searches happen.</p>
        </div>}
        actions={[
          {
            label: "GET YOUR FREE AUTOMOTIVE SEO AUDIT",
            href: "/contact-us",
            variant: "Primary",
          },
        ]}
        form={{
          ariaLabel: "Contact Web Founders USA",
          fields: [
            {
              name: "firstName",
              placeholder: "First Name",
              autoComplete: "given-name",
              colSpan: 1,
            },
            {
              name: "lastName",
              placeholder: "Last Name",
              autoComplete: "family-name",
              colSpan: 1,
            },
            {
              name: "email",
              type: "email",
              placeholder: "Email Address",
              autoComplete: "email",
            },
            {
              name: "website",
              type: "url",
              placeholder: "Website URL",
              autoComplete: "url",
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Phone",
              autoComplete: "tel",
            },
            {
              as: "textarea",
              name: "message",
              placeholder: "Message",
            },
          ],
          submitLabel: "Contact Us",
        }}
      />
      <InfiniteLogoSlider />
      <InfiniteToolSlider />
      <CaseStudy />
      {/* <CaseStudy2 /> */}
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <Section10 />
      <Section11 />
      <Section12 />
      <Testimonials2 />
    </section>
  );
}
