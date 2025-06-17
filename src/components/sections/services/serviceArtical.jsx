'use client'
import React, { useState, useEffect, useRef } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import Title from '@/components/ui/title'
import Highlight from '@/components/ui/highlight'
import SlideUp from '@/components/animations/slideUp'
import SideBar from '../sideBar'
import { faqData } from '@/lib/fackData/faqData'
import { serviceDetailsData } from "@/lib/fackData/serviceDetailsData"
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

// Default: first service
const defaultCategory = Object.keys(serviceDetailsData)[0]

const ServiceArtical = () => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [selectedCategory, setSelectedCategory] = useState(defaultCategory)

  // Ref for main section scroll
  const detailSectionRef = useRef(null)

  // Sync with ?category= from the URL
  useEffect(() => {
    const catFromUrl = searchParams.get('category')
    if (catFromUrl && serviceDetailsData[catFromUrl]) {
      setSelectedCategory(catFromUrl)
      // Scroll to section when param changes (short timeout for smoother UX)
      setTimeout(() => {
        detailSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
      }, 50)
    } else {
      setSelectedCategory(defaultCategory)
    }
    // eslint-disable-next-line
  }, [searchParams])

  // On sidebar click, update the URL (will trigger effect above)
  const handleCategorySelect = (cat) => {
    router.push(`/service-details?category=${encodeURIComponent(cat)}`)
  }

  const mainData = serviceDetailsData[selectedCategory]

  return (
    <div className='lg:py-15 py-9' id="service-detail-main">
      <div className='max-w-[1350px] mx-auto px-[15px]'>
        <div className='grid lg:grid-cols-[33%_66%] grid-cols-1 gap-12.5'>
          <div>
            <SideBar
              search={false}
              blog={false}
              onCategorySelect={handleCategorySelect}
              selectedCategory={selectedCategory}
            />
          </div>
          <article>
            {/* ---- DYNAMIC SERVICE MAIN SECTION ---- */}
            <div ref={detailSectionRef}>
              <Image src={mainData.image} width={872} height={472} alt='service-bg' className='rounded-[30px]' />
              <div className='pt-7.5'>
                <Title size={"5xl"}>
                  {mainData.title.includes("Next Agency")
                    ? <>Why choose <Highlight>WebFounders USA</Highlight> as your Marketing Partner</>
                    : mainData.title
                  }
                </Title>
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
            </div>
            {/* ---- KEEP ALL YOUR STATIC/DYNAMIC BOTTOM SECTIONS ---- */}
            <div className='pt-12.5'>
              <Title size={"4xl"}>Strategic Approach</Title>
              <p className='pt-7.5'>
                We believe in taking a strategic approach to digital marketing that focuses on delivering tangible results for our clients. Our methodology is built on a foundation of data-driven insights, industry expertise, and innovative techniques to ensure maximum impact and ROI.
              </p>
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

const Card = ({ icon, title, desc }) => (
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
