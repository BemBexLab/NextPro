import React from 'react'
import Approach from '@/components/sections/approach'
import BlogTwo from '@/components/sections/blogs/blogTwo'
import CountDown from '@/components/sections/countDown'
import Dashboard from '@/components/sections/dashboard'
import HeroFive from '@/components/sections/heroes/heroFive'
import StoryFive from '@/components/sections/ourStories/storyFive'
import PlatformRating from '@/components/sections/platformRating'
import PriceThree from '@/components/sections/pricing/priceThree'
import ProvideTwo from '@/components/sections/provides/provideTwo'
import ServiceSix from '@/components/sections/services/serviceSix'
import ServiceThree from '@/components/sections/services/servicesThree'
import SubscribeOne from '@/components/sections/subscribes/subscribeOne'
import SubscribeTwo from '@/components/sections/subscribes/subscribeTwo'
import TestimonialTwo from '@/components/sections/testimonials/testimonialTwo'

export const metadata = {
    title: "NextPro | Home-5",
    description: "NextPro is a modern Next.js and Tailwind CSS Template there features General Marketing, Social Media Marketing, AI in Marketing, Paid Advertising, Video Marketing, Analytics and Reporting, Industry news & Trends, E-commerce Marketing",
};

const HomeFive = () => {
    return (
        <main>
            <HeroFive />
            <PlatformRating />
            <div className='lg:pb-15 pb-9'></div>
            <ServiceSix />
            <StoryFive counter={true} />
            <ServiceThree />
            <Approach />
            <ProvideTwo order_0={"order-0"} order_1={"order-1"} />
            <Dashboard />
            <CountDown />
            <TestimonialTwo />
            <SubscribeTwo />
            <PriceThree />
            <BlogTwo />
            <SubscribeOne className={'-mb-40 lg:py-0 py-0 lg:pt-15 pt-15'} />
        </main>
    )
}

export default HomeFive