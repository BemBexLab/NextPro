import React from 'react'
import PageTitle from '@/components/sections/pageTitle'
import ProjectArtical from '@/components/sections/projectArtical'
import SubscribeTwo from '@/components/sections/subscribes/subscribeTwo'

export const metadata = {
  title: "WebFoundersUSA",
  description: "NextPro is a modern Next.js and Tailwind CSS Template there features General Marketing, Social Media Marketing, AI in Marketing, Paid Advertising, Video Marketing, Analytics and Reporting, Industry news & Trends, E-commerce Marketing",
};

const PortfolioDetails = () => {
  return (
    <main>
      <PageTitle pageName={"Project Details"} breadcrumbLink={"Project Details"}/>
      <ProjectArtical/>
      <SubscribeTwo/>
    </main>
  )
}

export default PortfolioDetails