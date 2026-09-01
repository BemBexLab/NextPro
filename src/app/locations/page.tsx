import React from "react";
import ServiceHero from "../service/seo-services/components/ServiceHero";
import LocationGrid from "@/components/LocationGrid";
import BlogsGridLocation from "@/components/BlogsGridLocation";

const page = () => {
  return (
    <section>
      <ServiceHero
        image={{
          src: "/service-testing/Local-SEO-Agency-LocalMighty.webp",
          alt: "SEO services hero background",
        }}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Locations" },
        ]}
        title="Explore Our Locations"
        description="WebsVent is dedicated to helping businesses across the USA achieve their online goals. With our team of expert web designers and developers, you can rest assured that your website will be responsive, user-friendly, and optimized for search engines."
        actions={[
          { label: "Contact Us", href: "/contact-us" },
        //   {
        //     label: "Get a Free Roofing SEO Audit",
        //     href: "/contact-us",
        //     variant: "secondary",
        //   },
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
          submitLabel: "Send",
        }}
      />
      <LocationGrid />
      <BlogsGridLocation />
    </section>
  );
};

export default page;
