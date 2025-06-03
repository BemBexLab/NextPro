import Image from 'next/image'
import React from 'react'
// import Title from '@//ui/title'
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


const ServiceArtical = () => {
    return (
        <div className='lg:py-15 py-9'>
            <div className='max-w-[1350px] mx-auto px-[15px]'>
                <div className='grid lg:grid-cols-[33%_66%] grid-cols-1 gap-12.5'>
                    <div>
                        <SideBar search={false} blog={false} />
                    </div>
                    <article>
                        <Image src={'/images/resource/sergices-details1-1.jpg'} width={872} height={472} alt='service-bg' className='rounded-[30px]' />
                        <div className='pt-7.5'>
                            <Title size={"5xl"}>Why choose <Highlight>Next Agency</Highlight> as your Marketing Partner</Title>
                            <div className='pt-7.5'>
                                <p>At Next Agency, we understand the importance of having a strong online presence and ranking well in search engine results. </p>
                                <p className='pt-6'>Choosing us as your digital marketing partner means selecting a team committed to your success. With a proven track record, tailored solutions, and industry expertise, we prioritize your unique goals and objectives.</p>
                            </div>
                            <ul className='pt-7.5 flex flex-col gap-[15px]'>
                                <li className='flex items-center gap-2'>
                                    <Image src={"/images/shapes/check-icon-blue.svg"} width={20} height={20} alt='check-icon' />
                                    <span>Customized approach tailored to each client's unique business goals and target audience.</span>
                                </li>
                                <li className='flex items-center gap-2'>
                                    <Image src={"/images/shapes/check-icon-blue.svg"} width={20} height={20} alt='check-icon' />
                                    <span>Transparent communication and regular reporting to keep clients informed and engaged.</span>
                                </li>
                                <li className='flex items-center gap-2'>
                                    <Image src={"/images/shapes/check-icon-blue.svg"} width={20} height={20} alt='check-icon' />
                                    <span>Continuous optimization and adaptation to evolving search engine algorithms and industry trends.</span>
                                </li>
                            </ul>
                            <div className='pt-7.5'>
                                <p>
                                    Our transparent communication and unwavering dedication ensure that you receive the support needed to thrive in the digital landscape. When you partner with us, you're choosing a trusted ally dedicated to driving real, measurable results for your business.
                                </p>
                            </div>
                        </div>
                        <div className='pt-12.5'>
                            <Title size={"4xl"}>Strategic Approach</Title>
                            <p className='pt-7.5'>We believe in taking a strategic approach to digital marketing that focuses on delivering tangible results for our clients. Our methodology is built on a foundation of data-driven insights, industry expertise, and innovative techniques to ensure maximum impact and ROI.</p>
                            <div className='grid md:grid-cols-2 grid-cols-1 gap-x-6 gap-y-12.5 pt-12.5'>
                                <Card icon={<Document width={42} height={45}/>} title={"Data-Driven Insights"} desc={"Through thorough analysis of key metrics and market trends, we uncover valuable insights."} />
                                <Card icon={<Shield width={42} height={45}/>} title={"Customized Strategies"} desc={"We develop customized plans that align with your specific goals and budget."} />
                                <Card icon={<Discount width={42} height={45}/>} title={"Data-Driven Insights"} desc={"Through thorough analysis of key metrics and market trends, we uncover valuable insights."} />
                                <Card icon={<Buy width={42} height={45}/>} title={"Data-Driven Insights"} desc={"Through thorough analysis of key metrics and market trends, we uncover valuable insights."} />
                                <Card icon={<Activity width={42} height={45}/>} title={"Data-Driven Insights"} desc={"Through thorough analysis of key metrics and market trends, we uncover valuable insights."} />
                                <Card icon={<Send width={42} height={45}/>} title={"Data-Driven Insights"} desc={"Through thorough analysis of key metrics and market trends, we uncover valuable insights."} />
                            </div>
                        </div>
                        <div className='pt-12.5'>
                            <Title size={"4xl"}>Your Digital Journey Clarified (FAQ)</Title>
                            <p className='pt-7.5'>Explore essential information about Next Agency and our services. Find quick answers to common queries in our FAQ section, ensuring a clear understanding of your digital journey with us.</p>
                            <div className='pt-15'>
                                <Accordion type="single" defaultValue="one" collapsible>
                                    {
                                        faqData.slice(0, 5).map(({ ans, id, question }) => {
                                            return (
                                                <SlideUp key={id} id={id}>
                                                    <AccordionItem value={id} className='mb-2.5 bg-gray rounded-[15px] border-none'>
                                                        <AccordionTrigger className="font-semibold text-primary-foreground border-none lg:px-7.5 px-4 lg:py-7.5 py-4 text-left">{question}</AccordionTrigger>
                                                        <AccordionContent className="lg:px-7.5 px-4 text-muted-foreground">
                                                            {ans}
                                                        </AccordionContent>
                                                    </AccordionItem>
                                                </SlideUp>
                                            )
                                        })
                                    }
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