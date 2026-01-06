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
    title: "Complete 360 Online Marketing Services | Web Founders USA",
    description: "Web Founders USA provides Complete 360 Digital Marketing Services.",
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
