import Chips from "./components/Chips";
import ChipCarousel from "./components/ChipCarousel";
import CustomerReviews from "./components/CustomerReviews";
import Hero from "./components/Hero";
import HiddenStrategy from "./components/HiddenStrategy";
import LocalSEOFAQs from "./components/LocalSEOFAQs";
import OurLocalSEO from "./components/OurLocalSEO";
import RecentBlogs from "./components/RecentBlogs";
import RemodelingContractor from "./components/RemodelingContractor";
import ReviewGeneration from "./components/ReviewGeneration";
import WhatIsLocalSEO from "./components/WhatIsLocalSEO";

const Page = () => {
  return (
    <main>
      <Hero />
      <Chips />
      <WhatIsLocalSEO />
      <HiddenStrategy />
      <RemodelingContractor />
      <CustomerReviews />
      <ReviewGeneration />
      <OurLocalSEO />
      <RecentBlogs />
      <ChipCarousel />
      <LocalSEOFAQs />
    </main>
  );
};

export default Page;
