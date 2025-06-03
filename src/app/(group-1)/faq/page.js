import React from 'react'
import FaqOne from '@/components/sections/faqs/faqOne'
import FaqTwo from '@/components/sections/faqs/faqTwo'
import PageTitle from '@/components/sections/pageTitle'
import SubscribeTwo from '@/components/sections/subscribes/subscribeTwo'

export const metadata = {
    title: "NextPro | Faq's",
    description: "NextPro is a modern Next.js and Tailwind CSS Template there features General Marketing, Social Media Marketing, AI in Marketing, Paid Advertising, Video Marketing, Analytics and Reporting, Industry news & Trends, E-commerce Marketing",
};

const Faq = () => {
    return (
        <main>
            <PageTitle pageName={"Faq"} breadcrumbLink={"Faq"} />
            <FaqOne />
            <FaqTwo />
            <SubscribeTwo />
        </main>
    )
}

export default Faq