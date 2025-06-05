import React from 'react' 
import ContactForm from '@/components/sections/contactForm'
import PageTitle from '@/components/sections/pageTitle'
import ServiceArtical from '@/components/sections/services/serviceArtical'

export const metadata = {
  title: "NextPro | Service-Details",
  description: "NextPro is a modern Next.js and Tailwind CSS Template there features General Marketing, Social Media Marketing, AI in Marketing, Paid Advertising, Video Marketing, Analytics and Reporting, Industry news & Trends, E-commerce Marketing",
};

const ServicesDetails = () => {
  return (
    <main>
      <PageTitle pageName={"Social Media Marketing"} breadcrumbLink={"services"} breadcrumbCurrent={"Social Media Marketing"} />
      <ServiceArtical />
      <ContactForm color={"text-white"} inputColor={"bg-transparent border-white border text-white placeholder:text-white"} />
      <div className='lg:pb-15 pb-9'></div>
    </main>
  )
}

export default ServicesDetails