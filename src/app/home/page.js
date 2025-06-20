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

export const metadata = {
    title: "WebFoundersUSA",
    description: "WebFoundersUSA is a leading digital agency specializing in web development, digital marketing, SEO, branding, and e-commerce solutions. We help businesses grow online with custom websites, effective marketing strategies, and measurable results.",
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
    </main>
  );
};

export default HomeFour;
