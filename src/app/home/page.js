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

export const metadata = {
  title: "WebFounder USA | Home",
  description:
    "WebFounder USA is a leading web development company that provides custom web development services to businesses of all sizes. We are a team of experienced web developers who are dedicated to providing the best possible web development services to our clients.",
};

const HomeFour = () => {
  return (
    <main>
      <HeroFour />
      <ServiceTwo />
      <StoryOne />
      <Approach />
      <CountDown />
      <ChooseUs />
      <Study />
      <TestimonialThree />
      <div className="mt-[-80px]"></div>
      <SubscribeTwo />
      <BlogOne />
      <ContactFormTwo />
    </main>
  );
};

export default HomeFour;
