// /app/service-details/page.jsx

import React, { Suspense } from 'react';
import PageTitle from '@/components/sections/pageTitle';
// DO NOT mark this file with "use client"

const ServiceArtical = React.lazy(() =>
  import('@/components/sections/services/serviceArtical')
);
// or just import directly if it's already a client component
// import ServiceArtical from '@/components/sections/services/serviceArtical';

export const metadata = {
  title: "WebFoundersUSA",
  description: "NextPro is a modern Next.js and Tailwind CSS Template that features General Marketing, Social Media Marketing, AI in Marketing, Paid Advertising, Video Marketing, Analytics and Reporting, Industry news & Trends, E-commerce Marketing",
};

const ServicesDetails = () => {
  return (
    <main>
      <PageTitle
        pageName="Services"
        breadcrumbLink="Services"
        breadcrumbCurrent=""
        bgImage="/images/servicebanner/services-image.jpg"
      />

      <Suspense fallback={<div className="py-20 text-center text-lg text-primary">Loading service details...</div>}>
        <ServiceArtical />
      </Suspense>

      {/* 
      <ContactForm 
        color={"text-white"} 
        inputColor={"bg-transparent border-white border text-white placeholder:text-white"} 
      />
      <div className='lg:pb-15 pb-9'></div>
      */}
    </main>
  );
};

export default ServicesDetails;
