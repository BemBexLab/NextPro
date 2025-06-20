import React from 'react'
import JobDescription from '@/components/sections/jobs/jobDescription'
import PageTitle from '@/components/sections/pageTitle'
import { jobsData } from '@/lib/fackData/jobsData'

export const metadata = {
    title: "WebFoundersUSA",
    description: "WebFoundersUSA is a leading digital agency specializing in web development, digital marketing, SEO, branding, and e-commerce solutions. We help businesses grow online with custom websites, effective marketing strategies, and measurable results.",
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
