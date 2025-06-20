import React from 'react'
import PageTitle from '@/components/sections/pageTitle'
import ProjectArtical from '@/components/sections/projectArtical'
import SubscribeTwo from '@/components/sections/subscribes/subscribeTwo'

export const metadata = {
    title: "WebFoundersUSA",
    description: "WebFoundersUSA is a leading digital agency specializing in web development, digital marketing, SEO, branding, and e-commerce solutions. We help businesses grow online with custom websites, effective marketing strategies, and measurable results.",
};

const PortfolioDetails = () => {
  return (
    <main>
      {/* <PageTitle pageName={"Project Details"} breadcrumbLink={"Project Details"}/> */}
      <ProjectArtical/>
      <SubscribeTwo/>
    </main>
  )
}

export default PortfolioDetails