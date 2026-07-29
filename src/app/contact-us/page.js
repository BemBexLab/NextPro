import React from 'react'
import ContactForm from '@/components/sections/contactForm'
import PageTitle from '@/components/sections/pageTitle'
import SubscribeTwo from '@/components/sections/subscribes/subscribeTwo'
import FreelancerMatchForm from "@/components/sections/contact/contactForm";
import ContactMap from '@/components/sections/map'
import { withEnUsHreflang } from "@/lib/metadata";

export const metadata = withEnUsHreflang({
    title: "Contact Us - Web Founders USA",
    description: "WebFoundersUSA is a leading digital agency specializing in web development, digital marketing, SEO, branding, and e-commerce solutions. We help businesses grow online with custom websites, effective marketing strategies, and measurable results.",
    alternates: {
    canonical: "https://www.webfoundersusa.com/contact-us",
  },
});

const ContactUs = () => {
  return (
    <main>
      
      {/* <PageTitle pageName={"Contact Us"} breadcrumbLink={"Contact"} /> */}
      <ContactMap />
      {/* <FreelancerMatchForm /> */}
      {/* <ContactForm color={"text-white"} inputColor={"bg-transparent border-white border text-white placeholder:text-white"} /> */}
      {/* <div className='lg:pt-15 pt-9'></div> */}
      <SubscribeTwo />
    </main>
  )
}

export default ContactUs
