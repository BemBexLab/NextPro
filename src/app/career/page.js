import React from 'react'
import FaqTwo from '@/components/sections/faqs/faqTwo'
import JobsPost from '@/components/sections/jobs/jobsPost'
import PageTitle from '@/components/sections/pageTitle'
import SubscribeTwo from '@/components/sections/subscribes/subscribeTwo'
import TeamOne from '@/components/sections/teams/teamOne'

export const metadata = {
    title: "NextPro | Career",
    description: "NextPro is a modern Next.js and Tailwind CSS Template there features General Marketing, Social Media Marketing, AI in Marketing, Paid Advertising, Video Marketing, Analytics and Reporting, Industry news & Trends, E-commerce Marketing",
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