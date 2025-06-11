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
import PriceTwo from '@/components/sections/pricing/priceTwo'
import CompaniesSlideer from "@/components/sections/companiesslide/slider";

export const metadata = {
  title: "WebFoundersUSA",
  description:
    "WebFounder USA is a leading web development company that provides custom web development services to businesses of all sizes. We are a team of experienced web developers who are dedicated to providing the best possible web development services to our clients.",
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
      <PriceTwo />
      <SubscribeTwo />
      {/* <BlogOne /> */}
    </main>
  );
};

export default HomeFour;
