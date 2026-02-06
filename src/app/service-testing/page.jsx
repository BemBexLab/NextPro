import React from "react";
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
import FAQSection from "@/components/sections/faqs/HomeFaqs";
import ContactFormTwo from "@/components/sections/ContactFormTwo";
import WhyChooseUs from "./components/WhyChooseUs";
// import NavBar from './components/NavBar'

const ServiceTesting = () => {
  return (
    <section className="text-black">
      <ServiceHero />
      <ExpertsPage />
      <OurPartners />
      <LocalSEOServices />
      <AIDiscoveryChannels />
      <SEOProcess />
      {/* <SuccessStories /> */}
      {/* <WhyChoose /> TODO: Replace with other New UI */}
      <WhyChooseUs />
      <SEOComparison />
      <Testimonials />
      {/* <ClaimFreeCall /> */}
      <ContactFormTwo />
      {/* <ServiceFAQs /> */}
      <FAQSection />
    </section>
  );
};

export default ServiceTesting;
