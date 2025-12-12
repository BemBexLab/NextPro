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

export const metadata = {
    title: "Web Founders USA: Responsive Website Design, Development and Digital Marketing Services.",
    description: "Web Founders USA is a website design and development company. We are also a digital marketing agency. We help brands grow with smart SEO, effective strategies, and creative solutions.",
};

const HomeFour = () => {
  return (
    <main>
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
