import React from 'react'
import FaqTwo from '@/components/sections/faqs/faqTwo'
import JobsPost from '@/components/sections/jobs/jobsPost'
import PageTitle from '@/components/sections/pageTitle'
import SubscribeTwo from '@/components/sections/subscribes/subscribeTwo'
import TeamOne from '@/components/sections/teams/teamOne'

export const metadata = {
    title: "WebFoundersUSA",
    description: "WebFoundersUSA is a leading digital agency specializing in web development, digital marketing, SEO, branding, and e-commerce solutions. We help businesses grow online with custom websites, effective marketing strategies, and measurable results.",
};
  
const Career = () => {
    return (
        <main>
            <PageTitle pageName={"Career"} breadcrumbLink={"Career"} />
            <TeamOne />
            <JobsPost />
            <FaqTwo />
            <SubscribeTwo />
        </main>
    )
}

export default Career