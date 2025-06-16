'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Title from '@/components/ui/title'
import Highlight from '@/components/ui/highlight'
import SlideUp from '@/components/animations/slideUp'
import SideBar from '../sideBar'
import { faqData } from '@/lib/fackData/faqData'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Document from '../../../../public/icons/document'
import Shield from '../../../../public/icons/shield'
import Discount from '../../../../public/icons/discount'
import Buy from '../../../../public/icons/buy'
import Send from '../../../../public/icons/send'
import Activity from '../../../../public/icons/activity'

// Data for each category's main content (top section)
const serviceDetailsData = {
  "Social Media Marketing": {
    image: '/images/resource/sergices-details1-1.jpg',
    title: "Why choose Next Agency as your Marketing Partner",
    paragraphs: [
      "At WebFounders USA, we understand the importance of having a strong online presence and ranking well in search engine results.",
      "Choosing us as your digital marketing partner means selecting a team committed to your success. With a proven track record, tailored solutions, and industry expertise, we prioritize your unique goals and objectives."
    ],
    features: [
      "Customized approach tailored to each client's unique business goals and target audience.",
      "Transparent communication and regular reporting to keep clients informed and engaged.",
      "Continuous optimization and adaptation to evolving search engine algorithms and industry trends.",
    ],
    outro: "Our transparent communication and unwavering dedication ensure that you receive the support needed to thrive in the digital landscape. When you partner with us, you're choosing a trusted ally dedicated to driving real, measurable results for your business."
  },
  "Marketing Strategy": {
    image: '/images/resource/sergices-details1-1.jpg',
    title: "Marketing Strategy That Delivers",
    paragraphs: [
      "Unlock business growth with data-driven strategy.",
      "We help define your objectives, map your market, and plan impactful campaigns tailored to your brand."
    ],
    features: [
      "Thorough market research",
      "Actionable roadmaps",
      "Measurable KPIs"
    ],
    outro: "Partner with us for actionable insights and strategies that evolve with the market."
  },
  "Social Media": {
    image: '/images/resource/sergices-details1-1.jpg',
    title: "Social Media Strategy That Delivers",
    paragraphs: [
      "Ignite your brand’s presence across every platform with targeted social media campaigns.",
      "We craft custom strategies, define your audience, and plan engaging content that boosts awareness and drives results."
    ],
    features: [
      "In-depth audience research",
      "Platform-specific content plans",
      "Real-time performance tracking"
    ],
    outro: "Let’s grow your community and maximize engagement with a social strategy built for today’s digital world."
  },
  "Content Writing": {
    image: '/images/servicesimages/content-writing.jpg',
    title: "Content That Converts",
    paragraphs: [
      "Fuel your growth with compelling, SEO-optimized content.",
      "We craft clear messaging, showcase your brand’s voice, and deliver valuable content designed to engage your audience and drive action."
    ],
    features: [
      "Audience-focused research",
      "Original, SEO-friendly copy",
      "Consistent brand voice"
    ],
    outro: "Partner with us for content that connects, builds authority, and grows your business online."
  },
  "Affiliate Marketing": {
    image: '/images/servicesimages/affiliate-marketing.jpg',
    title: "Affiliate Marketing That Delivers",
    paragraphs: [
      "Accelerate your growth with a performance-based affiliate strategy.",
      "We identify the right partners, develop customized commission models, and manage campaigns that drive quality leads and measurable sales for your brand."
    ],
    features: [
      "Curated affiliate partner networks",
      "Transparent tracking & reporting",
      "ROI-driven campaign management"
    ],
    outro: "Grow your revenue with scalable affiliate programs and expert management that adapts to your market."
  },
  "Email Marketing": {
    image: '/images/servicesimages/email-marketing.jpg',
    title: "Email Campaigns That Convert",
    paragraphs: [
      "Drive engagement and boost sales with targeted email marketing.",
      "We design personalized campaigns, segment your audience, and deliver high-impact emails that nurture leads and maximize ROI."
    ],
    features: [
      "Personalized email sequences",
      "Advanced list segmentation",
      "Detailed performance analytics"
    ],
    outro: "Stay top-of-mind and turn subscribers into loyal customers with expertly managed email campaigns."
  },
  "Pay-Per-Click Advertising": {
    image: '/images/resource/sergices-details1-1.jpg',
    title: "PPC Campaigns That Deliver Results",
    paragraphs: [
      "Get instant visibility and quality leads with targeted PPC advertising.",
      "We manage every step—from keyword research and ad creation to bid optimization and analytics—ensuring every dollar drives measurable returns."
    ],
    features: [
      "Data-driven keyword targeting",
      "High-converting ad creatives",
      "Continuous campaign optimization"
    ],
    outro: "Maximize your ROI and reach your audience at the right moment with expertly managed PPC campaigns."
  },
  "Conversion Optimization": {
    image: '/images/resource/sergices-details1-1.jpg',
    title: "Conversion Optimization That Delivers",
    paragraphs: [
      "Turn more visitors into customers with data-driven conversion strategies.",
      "We analyze your user journey, run A/B tests, and implement proven tactics to boost your website’s performance and maximize sales."
    ],
    features: [
      "Comprehensive user behavior analysis",
      "A/B and multivariate testing",
      "Funnel and landing page optimization"
    ],
    outro: "Unlock your website’s true potential with strategies designed to increase conversions and fuel sustainable growth."
  },
  "E-commerce Marketing": {
    image: '/images/resource/sergices-details1-1.jpg',
    title: "E-commerce Marketing That Drives Sales",
    paragraphs: [
      "Accelerate your online store’s growth with proven e-commerce marketing strategies.",
      "We boost your visibility, attract the right shoppers, and create campaigns that turn visitors into loyal customers."
    ],
    features: [
      "Shopper-focused digital advertising",
      "Conversion-driven email & social campaigns",
      "ROI-focused analytics & reporting"
    ],
    outro: "Partner with us to unlock scalable e-commerce growth and stay ahead in a competitive marketplace."
  },
  "Digital Marketing": {
  image: '/images/servicesimages/digital-marketing.jpg',
  title: "Digital Marketing That Gets Results",
  paragraphs: [
    "Supercharge your business growth with comprehensive digital marketing strategies.",
    "We enhance your online presence, reach your ideal audience, and create multi-channel campaigns that deliver measurable impact."
  ],
  features: [
    "Targeted online advertising",
    "Engaging social media & content strategies",
    "Data-driven performance analytics"
  ],
  outro: "Partner with us to unlock your brand’s full digital potential and achieve real, lasting results."
},
"Web Development": {
  image: '/images/servicesimages/ecommerce-website-development.jpg',
  title: "Web Development That Accelerates Growth",
  paragraphs: [
    "Build a powerful online presence with high-performing, visually stunning websites.",
    "We design, develop, and optimize custom websites that engage visitors, boost conversions, and drive your business forward."
  ],
  features: [
    "Responsive & user-friendly design",
    "Custom development for your business needs",
    "SEO and performance optimization"
  ],
  outro: "Partner with us to create a website that not only looks great but also delivers real results for your brand."
}


  // ...add other categories as needed...
}

// Default: first service
const defaultCategory = Object.keys(serviceDetailsData)[0]

const ServiceArtical = () => {
  const [selectedCategory, setSelectedCategory] = useState(defaultCategory)
  const mainData = serviceDetailsData[selectedCategory]

  return (
    <div className='lg:py-15 py-9'>
      <div className='max-w-[1350px] mx-auto px-[15px]'>
        <div className='grid lg:grid-cols-[33%_66%] grid-cols-1 gap-12.5'>
          <div>
            <SideBar
              search={false}
              blog={false}
              onCategorySelect={setSelectedCategory}
              selectedCategory={selectedCategory}
            />
          </div>
          <article>
            {/* ---- DYNAMIC SERVICE MAIN SECTION ---- */}
            <Image src={mainData.image} width={872} height={472} alt='service-bg' className='rounded-[30px]' />
            <div className='pt-7.5'>
              <Title size={"5xl"}>{mainData.title.includes("Next Agency")
                ? <>Why choose <Highlight>WebFounders USA</Highlight> as your Marketing Partner</>
                : mainData.title
              }</Title>
              <div className='pt-7.5'>
                {mainData.paragraphs.map((txt, i) => (
                  <p key={i} className={i === 0 ? "" : "pt-6"}>{txt}</p>
                ))}
              </div>
              <ul className='pt-7.5 flex flex-col gap-[15px]'>
                {mainData.features.map((item, i) => (
                  <li key={i} className='flex items-center gap-2'>
                    <Image src={"/images/shapes/check-icon-blue.svg"} width={20} height={20} alt='check-icon' />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className='pt-7.5'>
                <p>{mainData.outro}</p>
              </div>
            </div>

            {/* ---- KEEP ALL YOUR STATIC/DYNAMIC BOTTOM SECTIONS ---- */}
            <div className='pt-12.5'>
              <Title size={"4xl"}>Strategic Approach</Title>
              <p className='pt-7.5'>We believe in taking a strategic approach to digital marketing that focuses on delivering tangible results for our clients. Our methodology is built on a foundation of data-driven insights, industry expertise, and innovative techniques to ensure maximum impact and ROI.</p>
              <div className='grid md:grid-cols-2 grid-cols-1 gap-x-6 gap-y-12.5 pt-12.5'>
                <Card icon={<Document width={42} height={45} />} title={"Data-Driven Insights"} desc={"Through thorough analysis of key metrics and market trends, we uncover valuable insights."} />
                <Card icon={<Shield width={42} height={45} />} title={"Customized Strategies"} desc={"We develop customized plans that align with your specific goals and budget."} />
                <Card icon={<Discount width={42} height={45} />} title={"Better ROI"} desc={"Maximize returns with optimized campaigns and budget allocation."} />
                <Card icon={<Buy width={42} height={45} />} title={"Conversion Focused"} desc={"Every tactic is designed to convert visitors into leads and customers."} />
                <Card icon={<Activity width={42} height={45} />} title={"Continuous Improvement"} desc={"We constantly test, analyze, and refine our strategies."} />
                <Card icon={<Send width={42} height={45} />} title={"Proactive Communication"} desc={"You stay informed and in control at every stage."} />
              </div>
            </div>
            <div className='pt-12.5'>
              <Title size={"4xl"}>Your Digital Journey Clarified (FAQ)</Title>
              <p className='pt-7.5'>Explore essential information about Next Agency and our services. Find quick answers to common queries in our FAQ section, ensuring a clear understanding of your digital journey with us.</p>
              <div className='pt-15'>
                <Accordion type="single" defaultValue="one" collapsible>
                  {faqData.slice(0, 5).map(({ ans, id, question }) => (
                    <SlideUp key={id} id={id}>
                      <AccordionItem value={id} className='mb-2.5 bg-gray rounded-[15px] border-none'>
                        <AccordionTrigger className="font-semibold text-primary-foreground border-none lg:px-7.5 px-4 lg:py-7.5 py-4 text-left">{question}</AccordionTrigger>
                        <AccordionContent className="lg:px-7.5 px-4 text-muted-foreground">
                          {ans}
                        </AccordionContent>
                      </AccordionItem>
                    </SlideUp>
                  ))}
                </Accordion>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}

export default ServiceArtical

const Card = ({ icon, title, desc }) => {
  return (
    <div className='grid grid-cols-[83px_auto] items-start gap-7.5'>
      <div className='bg-primary w-[83px] h-[83px] rounded-[15px] flex justify-center items-center text-white'>
        {icon}
      </div>
      <div>
        <h5 className='text-xl font-extrabold text-muted-foreground pb-2'>{title}</h5>
        <p>{desc}</p>
      </div>
    </div>
  )
}
