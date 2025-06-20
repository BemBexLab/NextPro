import React from 'react'
import FaqOne from '@/components/sections/faqs/faqOne'
import FaqTwo from '@/components/sections/faqs/faqTwo'
import PageTitle from '@/components/sections/pageTitle'
import SubscribeTwo from '@/components/sections/subscribes/subscribeTwo'

export const metadata = {
    title: "WebFoundersUSA",
    description: "WebFoundersUSA is a leading digital agency specializing in web development, digital marketing, SEO, branding, and e-commerce solutions. We help businesses grow online with custom websites, effective marketing strategies, and measurable results.",
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