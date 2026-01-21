import React from 'react'
import FaqTwo from '@/components/sections/faqs/faqTwo'
import PageTitle from '@/components/sections/pageTitle'
import PriceOne from '@/components/sections/pricing/priceOne'
import PriceThree from '@/components/sections/pricing/priceThree'
import SubscribeTwo from '@/components/sections/subscribes/subscribeTwo'
import ContactFormTwo from "@/components/sections/ContactFormTwo";

export const metadata = {
    title: "Pricing  | Web Founders USA",
    description: "Explore Web Founders USA pricing plans for SEO, web design, and digital marketing services designed to deliver value and results",
    
    keywords: [
    "pricing",
  ],
    
    alternates: {
    canonical: "https://www.webfoundersusa.com/pricing",
  },
};

const Pricing = () => {
    return (
        <min>
            {/* <PageTitle pageName={"Pricing Plan"} breadcrumbLink={"Pricing Plan"} /> */}
            <PriceThree/>
            {/* <PriceOne/>
            <FaqTwo/> */}
            <SubscribeTwo/>
            <ContactFormTwo />
        </min>
    )
}

export default Pricing