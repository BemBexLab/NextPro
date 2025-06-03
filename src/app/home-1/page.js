import React from 'react'
import HeroOne from '@/components/sections/heroes/heroOne'
import StoryOne from '@/components/sections/ourStories/storyOne'
import PartnersSlider from '@/components/sections/partnersSlider'
import ServiceOne from '@/components/sections/services/serviceOne'
import { partnersData } from '@/lib/fackData/partnersData'
import ProvideOne from '@/components/sections/provides/provideOne'
import Dashboard from '@/components/sections/dashboard'
import WorkProcess from '@/components/sections/workProcess'
import Strategy from '@/components/sections/strategy'
import PriceOne from '@/components/sections/pricing/priceOne'
import BlogOne from '@/components/sections/blogs/blogOne'
import SubscribeOne from '@/components/sections/subscribes/subscribeOne'

export const metadata = {
  title: "NextPro | Home-1",
  description: "NextPro is a modern Next.js and Tailwind CSS Template there features General Marketing, Social Media Marketing, AI in Marketing, Paid Advertising, Video Marketing, Analytics and Reporting, Industry news & Trends, E-commerce Marketing",
};

const HomeOne = () => {
  return (
    <main>
      <HeroOne />
      <div className='max-w-[1350px] mx-auto px-[15px] lg:py-15 py-9'>
        <div className='lg:grid grid-cols-[25%_1fr]'>
          <div>
            <h5 className='text-muted-foreground font-extrabold text-2xl lg:max-w-[251px] w-full lg:text-start text-center pb-10 md:pb-0 '>Trusted by Companies all over the world</h5>
          </div>
          <div className='overflow-hidden'>
            <PartnersSlider data={partnersData} className={"lg:px-0 sm:px-0 px-0 lg:overflow-hidden w-full"} />
          </div>
        </div>
      </div>

      <StoryOne />
      <ServiceOne />
      <ProvideOne />
      <WorkProcess />
      <Dashboard />
      <Strategy />
      <PriceOne />
      <BlogOne />
      <SubscribeOne />
    </main>
  )
}

export default HomeOne