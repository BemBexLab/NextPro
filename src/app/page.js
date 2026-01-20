import Approach from "@/components/sections/approach";
import BlogOne from "@/components/sections/blogs/blogOne";
import ChooseUs from "@/components/sections/chooseUs";
import CountDown from "@/components/sections/countDown";
import HeroFour from "@/components/sections/heroes/heroFour";
import Study from "@/components/sections/study";
import SubscribeTwo from "@/components/sections/subscribes/subscribeTwo";
import TestimonialThree from "@/components/sections/testimonials/testimonialThree";
import ContactFormTwo from "@/components/sections/ContactFormTwo";
import ServiceTwo from "@/components/sections/services/serviceTwo";
import StoryOne from "@/components/sections/ourStories/storyOne";
import PriceThree from '@/components/sections/pricing/priceThree'
import CompaniesSlideer from "@/components/sections/companiesslide/slider";
import FAQSection from "@/components/sections/faqs/HomeFaqs";
import Script from "next/script";

export const metadata = {
    title: "Complete 360 Online Marketing Services | Web Founders USA",
    description: "Web Founders USA provides complete 360 online Digital marketing services to help US businesses boost rankings, traffic, leads, and growth.",
    alternates: {
    canonical: "https://www.webfoundersusa.com/",
  },
};
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.webfoundersusa.com/#organization",
      "name": "Web Founders USA",
      "alternateName": "WebFoundersUSA",
      "url": "https://www.webfoundersusa.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.webfoundersusa.com/wp-content/uploads/2024/01/logo.png",
        "width": "200",
        "height": "60"
      },
      "description": "Web Founders USA is a digital marketing and web development agency helping businesses grow online with web design, SEO, branding & marketing strategies tailored for measurable results.",
      "foundingDate": "2012",
      "email": "info@webfoundersusa.com",
      "telephone": "+1-470-470-7520",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1014 Garner Rd SW",
        "addressLocality": "Lilburn",
        "addressRegion": "GA",
        "postalCode": "30047",
        "addressCountry": "US"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-470-470-7520",
        "contactType": "customer support",
        "email": "info@webfoundersusa.com",
        "availableLanguage": "English"
      },
      "sameAs": [
        "https://www.facebook.com/WebfoundersUSA/",
        "https://www.instagram.com/webfoundersusa/",
        "https://x.com/webfounders_usa",
        "https://www.youtube.com/@WebFoundersUSA",
        "https://www.pinterest.com/WebFoundersUSA/"
      ],
      "knowsAbout": [
        "Web Design",
        "SEO Services",
        "Digital Marketing",
        "Branding",
        "Logo Design",
        "Web Development",
        "E-commerce Solutions"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://www.webfoundersusa.com/#website",
      "url": "https://www.webfoundersusa.com/",
      "name": "Web Founders USA",
      "description": "Web Founders USA provides professional digital solutions including web design, SEO, branding, and marketing to help businesses grow online.", 
      "publisher": {
        "@id": "https://www.webfoundersusa.com/#organization"
      },
      "inLanguage": "en-US",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://www.webfoundersusa.com/?s={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://www.webfoundersusa.com/#webpage",
      "url": "https://www.webfoundersusa.com/",
      "name": "Web Founders USA | Digital Marketing & Web Design Agency",
      "isPartOf": {
        "@id": "https://www.webfoundersusa.com/#website"
      },
      "about": {
        "@id": "https://www.webfoundersusa.com/#organization"
      },
      "description": "Web Founders USA helps brands grow through customized digital solutions like web design, SEO, branding and marketing services for measurable online success.",
      "breadcrumb": {
        "@id": "https://www.webfoundersusa.com/#breadcrumb"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.webfoundersusa.com/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.webfoundersusa.com/"
        }
      ]
    }
  ]
};


const HomeFour = () => {
  return (
    <main>
      <Script
  id="home-schema"
  type="application/ld+json"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
/>

      <HeroFour />
      <CompaniesSlideer />
      <ServiceTwo />
      {/* <StoryOne /> */}
      <Approach />
      <CountDown />
      {/* <ChooseUs /> */}
      <Study />
      {/* <TestimonialThree /> */}
      {/* <div className="mt-[-80px]"></div> */}
      <PriceThree />
      <SubscribeTwo />
      {/* <BlogOne /> */}
      <ContactFormTwo />
      <br />
      <br />
      <br />
      <br />
      <br />
      <FAQSection />
    </main>
  );
};

export default HomeFour;
