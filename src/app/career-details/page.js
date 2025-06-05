import React from 'react'
import JobDescription from '@/components/sections/jobs/jobDescription'
import PageTitle from '@/components/sections/pageTitle'

export const metadata = {
  title: "NextPro | Career-Details",
  description: "NextPro is a modern Next.js and Tailwind CSS Template there features General Marketing, Social Media Marketing, AI in Marketing, Paid Advertising, Video Marketing, Analytics and Reporting, Industry news & Trends, E-commerce Marketing",
};

const CareerDetails = () => {
  return (
    <main>
      <PageTitle pageName={"Job Description"} linkName={"Career"} className="lg:mb-0 mb-0" />
      <JobDescription />
    </main>
  )
}

export default CareerDetails