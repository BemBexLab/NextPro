import React from 'react'
import JobDescription from '@/components/sections/jobs/jobDescription'
import PageTitle from '@/components/sections/pageTitle'
import { jobsData } from '@/lib/fackData/jobsData'

export const metadata = {
  title: "WebFoundersUSA",
  description: "NextPro is a modern Next.js and Tailwind CSS Template there features General Marketing, Social Media Marketing, AI in Marketing, Paid Advertising, Video Marketing, Analytics and Reporting, Industry news & Trends, E-commerce Marketing",
};

// Accept params prop (from dynamic route)
const CareerDetails = ({ params }) => {
  // Find the job using the dynamic param from the URL
  const job = jobsData.find(j => j.id.toString() === params.jobId);

  // If job is not found, show an error
  if (!job) {
    return (
      <main>
        <PageTitle pageName="Job Not Found" linkName="Career" />
        <div className="text-center py-10 text-2xl text-red-500">Sorry, this job does not exist.</div>
      </main>
    );
  }

  // Pass the found job as a prop
  return (
    <main>
      <PageTitle pageName={job.position.position_name} breadcrumbLink={"Career"} />
      <JobDescription job={job} />
    </main>
  );
};

export default CareerDetails;
