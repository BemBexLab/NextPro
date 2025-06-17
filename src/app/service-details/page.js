
// /app/service-details/page.jsx

import React from 'react';
import PageTitle from '@/components/sections/pageTitle';
import ServiceArtical from '@/components/sections/services/serviceArtical';
// import ContactForm from '@/components/sections/contactForm'; // Uncomment if needed

// export const metadata = {
//   title: "WebFoundersUSA",
//   description: "NextPro is a modern Next.js and Tailwind CSS Template that features General Marketing, Social Media Marketing, AI in Marketing, Paid Advertising, Video Marketing, Analytics and Reporting, Industry news & Trends, E-commerce Marketing",
// };

const ServicesDetails = () => {
  return (
    <main>
      <PageTitle
        pageName="Services"
        breadcrumbLink="Services"
        breadcrumbCurrent=""
        bgImage="/images/servicebanner/services-image.jpg"
      />

      <ServiceArtical />

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
