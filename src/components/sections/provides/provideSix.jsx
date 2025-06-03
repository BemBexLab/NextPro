import React from 'react'
import Link from 'next/link'
import { Button } from '../../ui/button'
import Title from '../../ui/title'
import Category from '../../../../public/icons/category'
import Filter from '../../../../public/icons/filter'
import Shield from '../../../../public/icons/shield'
import { cn } from '@/lib/utils'
import RightArrow from '../../../../public/icons/rightArrow'
import SlideUp from '@/components/animations/slideUp'
import Image from 'next/image'

const ProvideSix = () => {
    return (
        <section className='lg:py-15 py-10'>
            <div className='container-fluid mx-auto px-[15px] pr-0'>
                <div className='grid lg:grid-cols-2 grid-cols-1 justify-between items-center lg:gap-x-4 gap-y-5'>
                    <div>
                        <div className='lg:max-w-[745px] lg:ms-auto'>
                            <SlideUp>
                                <Button variant="secondary">We Provide</Button>
                                <Title size={"5xl"} className="max-w-[703px] pt-6">Effortless Monitoring with Our Dashboard Solution</Title>
                                <div className='max-w-[563px]'>
                                    <p className='font-semibold text-muted-foreground pt-6'>Gain actionable insights and track the performance of your digital strategies with our comprehensive dashboard.</p>
                                    <p className='pt-7.5'>Visualize key metrics, monitor trends, and optimize your marketing and campaigns seamlessly, all in one centralized platform designed to drive your business forward.</p>
                                </div>
                                <div className='flex md:flex-row flex-col flex-wrap gap-3 lg:gap-6 xl:mt-10 mt-8 pb-12.5'>
                                    <Card bgColor={"after:bg-green"} color={"text-green"} icon={<Category />} title={"Seamless Connectivity"} />
                                    <Card bgColor={"after:bg-purple"} color={"text-purple"} icon={<Filter />} title={"Customized Solutions"} />
                                    <Card bgColor={"after:bg-red"} color={"text-red"} icon={<Shield />} title={"Optimized Performance"} />
                                </div>
                                <Button variant="outline" size="lg" asChild className="max-h-[64px] group">
                                    <Link href={"/about-us"}>  See all Integrations <span className='-rotate-45 group-hover:rotate-0 transition-all duration-75 ' ><RightArrow /></span></Link>
                                </Button>
                            </SlideUp>
                        </div>
                    </div>

                    <div className='h-full flex justify-end'>
                        <Image className='object-cover' src="/images/shapes/provide-img6-1.png" width={824} height={830} alt="provide image"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProvideSix


const Card = ({ icon, color, bgColor, title }) => {
    return (
        <div className='flex items-center gap-2.5 group'>
            <div className={cn(`${color} min-w-12.5 min-h-12.5 flex items-center justify-center relative z-[1] after:absolute after:left-0 after:top-0 after:w-full after:h-full ${bgColor} after:opacity-[0.08] group-hover:after:opacity-25 hover:transition-all after:duration-500 after:rounded-full after:z-[-1]`)}>
                <span className='group-hover:scale-90 transition-all duration-500'>{icon}</span>
            </div>
            <p className='font-bold md:max-w-[154px] leading-[120%] text-muted-foreground'>{title}</p>
        </div>
    )
}