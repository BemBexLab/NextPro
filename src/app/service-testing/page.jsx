import React from "react";
import ServiceHero from "../service/seo-services/components/ServiceHero";
import ExpertsPage from "../service/seo-services/components/ExpertsPage";
import OurPartners from "../service/seo-services/components/OurPartners";
import LocalSEOServices from "../service/seo-services/components/LocalSEOServices";
import AIDiscoveryChannels from "../service/seo-services/components/AIDiscoveryChannels";
import SEOProcess from "../service/seo-services/components/SEOProcess";
import SuccessStories from "../service/seo-services/components/SuccessStories";
import WhyChoose from "../service/seo-services/components/WhyChoose";
import SEOComparison from "../service/seo-services/components/SEOComparison";
import Testimonials from "../service/seo-services/components/Testimonials";
import ClaimFreeCall from "../service/seo-services/components/ClaimFreeCall";
import ServiceFAQs from "../service/seo-services/components/ServiceFAQs";
;
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
      <SuccessStories />
      <WhyChoose />
      <SEOComparison />
      <Testimonials />
      <ClaimFreeCall />
      <ServiceFAQs />
    </section>
  );
};

export default ServiceTesting;
