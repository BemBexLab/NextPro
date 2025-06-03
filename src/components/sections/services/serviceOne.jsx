import { Button } from '@/components/ui/button'
import Title from '@/components/ui/title'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Edit from '../../../../public/icons/edit'
import Discount from '../../../../public/icons/discount'
import RightArrow from '../../../../public/icons/rightArrow'
import SlideUp from '@/components/animations/slideUp'

const ServiceOne = () => {
    return (
        <section className='lg:py-15 py-9'>
            <div className='max-w-[1350px] mx-auto px-[15px]'>
                <SlideUp>
                    <div className='lg:pb-[90px] pb-10'>
                        <Button variant="secondary">Our Services</Button>
                        <Title size={"5xl"} className="max-w-[869px] pt-6">Transforming Your Presence: Innovative Digital Marketing with SEO, PPC, and More</Title>
                    </div>
                </SlideUp>
                <SlideUp>
                    <div className='bg-primary rounded-2.5xl lg:pt-16 pt-10 lg:pb-20 pb-14 lg:px-12.5 px-7.5 flex items-center relative'>
                        <div className='sm:max-w-[560px]'>
                            <Title size={"5xl"} className={"text-secondary-foreground dark:text-white max-w-[502px]"}>Improve your website's visibility</Title>
                            <p className='pt-[15px] text-secondary-foreground font-semibold pb-11 dark:text-white'>Boost your online visibility and reach a wider audience by implementing strategic techniques to optimize your website for top-notch performance on search engines.</p>

                            <Button size="lg" variant={"destructive"} asChild className="hover:bg-transparent hover:text-secondary-foreground dark:bg-white dark:border-white dark:hover:bg-transparent dark:hover:text-white">
                                <Link href={"/pricing"}>  Get started for Free </Link>
                            </Button>

                        </div>
                        <div className='absolute right-0'>
                            <Image src={"/images/background/services-bg1-1.png"} width={720} height={421} alt='service-map-background' />
                        </div>
                    </div>
                </SlideUp>
                <SlideUp>
                    <div className='grid md:grid-cols-2 grid-cols-1 gap-8 pt-7.5'>
                        <BigCard title={"Amplify Your Reach with Social Media Marketing"} src={"/images/resource/services1-1.png"} desc={"Boost your online visibility and reach a wider audience by implementing strategic techniques to optimize your website for top-notch performance on search engines."} />
                        <BigCard title={"Drive Conversions through Pay-Per-Click Advertising"} src={"/images/resource/services1-2.png"} desc={"Maximize your online impact with targeted ads, strategically placed to drive relevant traffic and conversions."} />
                    </div>
                </SlideUp>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-between gap-8 pt-7.5'>
                    <SlideUp>
                        <SmallCard title={"Craft Compelling Content for Content Marketing Success"} src={<Edit />} />
                    </SlideUp>
                    <SlideUp id={2}>
                        <SmallCard title={"Harness the Power of Email Marketing for Direct Engagement"} src={<Discount />} />
                    </SlideUp>
                    <SlideUp id={3}>
                        <SmallCardBackground title={"Know more about our Services"} link="/services" />
                    </SlideUp>
                </div>
            </div>
        </section>
    )
}

export default ServiceOne


const BigCard = ({ title, desc, src }) => {
    return (
        <div className='bg-accent lg:px-12.5 px-6 lg:pt-16 pt-10 rounded-2.5xl relative h-full flex flex-col '>
            <Title size={"4xl"}>{title} </Title>
            <p className='pt-[15px]'>{desc}</p>
            <div className='mt-14 flex items-end h-full '>
                <Image src={src} width={507} height={317} alt='service-bg' className=' bottom-0' />
            </div>
        </div>
    )
}

const SmallCard = ({ title, src }) => {
    return (
        <div className='bg-accent lg:px-7.5 px-5 pt-7.5 pb-[90px] rounded-2.5xl group h-full'>
            {src && <div className='bg-primary text-white w-15 h-15 rounded-full flex justify-center items-center group-hover:opacity-70 transition-all duration-500'> <span className='group-hover:scale-95'>{src}</span></div>}
            <h5 className='lg:text-[32px] text-2xl font-bold leading-[120%] text-muted-foreground pt-7.5'>{title}</h5>
        </div>
    )
}

const SmallCardBackground = ({ title, src, link }) => {
    return (
        <div className='bg-primary lg:px-7.5 px-5 pt-7.5 pb-[90px] rounded-2.5xl bg-contain bg-center bg-no-repeat h-full' style={{ backgroundImage: `url(/images/shapes/service-shape1-1.png)` }}>
            {src && <div className='bg-primary text-white w-15 h-15 rounded-full flex justify-center items-center'>{src}</div>}
            <h5 className='lg:text-[32px] text-2xl font-bold leading-[120%] text-secondary-foreground pt-7.5 dark:text-white'>{title}</h5>
            <Button asChild className="rounded-full bg-background border-background text-primary-foreground mt-[34px] hover:text-secondary-foreground dark:bg-white dark:border-white dark:hover:bg-transparent dark:text-primary-foreground dark:hover:text-white">
                <Link href={link}> View More <RightArrow /></Link>
            </Button>

        </div>
    )
}