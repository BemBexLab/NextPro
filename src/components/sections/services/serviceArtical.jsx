'use client'
import React, { useState, useEffect, useRef } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import Title from '@/components/ui/title'
import Highlight from '@/components/ui/highlight'
import SlideUp from '@/components/animations/slideUp'
import SideBar from '../sideBar'
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

// Icons array for cycling through or customizing per step
const icons = [
  <Document width={42} height={45} />,
  <Shield width={42} height={45} />,
  <Discount width={42} height={45} />,
  <Buy width={42} height={45} />,
  <Activity width={42} height={45} />,
  <Send width={42} height={45} />
]

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

            {/* --- STRATEGIC APPROACH (DYNAMIC) --- */}
            <div className='pt-12.5'>
              <Title size={"4xl"}>Strategic Approach</Title>
              <div className='grid md:grid-cols-2 grid-cols-1 gap-x-6 gap-y-12.5 pt-12.5'>
                {(mainData.strategicApproach || []).map((item, i) => (
                  <Card
                    key={i}
                    icon={icons[i % icons.length]}
                    title={item.title}
                    desc={item.desc}
                  />
                ))}
              </div>
            </div>

            {/* --- FAQ (DYNAMIC) --- */}
            <div className='pt-12.5'>
              <Title size={"4xl"}>Frequently Asked Questions</Title>
              <div className='pt-15'>
                <Accordion type="single" defaultValue="one" collapsible>
                  {(mainData.faqs || []).map(({ question, answer }, idx) => (
                    <SlideUp key={idx} id={idx}>
                      <AccordionItem value={String(idx)} className='mb-2.5 bg-gray rounded-[15px] border-none'>
                        <AccordionTrigger className="font-semibold text-primary-foreground border-none lg:px-7.5 px-4 lg:py-7.5 py-4 text-left">
                          {question}
                        </AccordionTrigger>
                        <AccordionContent className="lg:px-7.5 px-4 text-muted-foreground">
                          {answer}
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
