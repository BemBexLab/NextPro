import React from 'react'
import Link from 'next/link'
import { Button } from '../../ui/button'
import Title from '../../ui/title'
import Category from '../../../../public/icons/category'
import Filter from '../../../../public/icons/filter'
import Shield from '../../../../public/icons/shield'
import { cn } from '@/lib/utils'
import RightArrow from '../../../../public/icons/rightArrow'
import SoftwareLogo from './softwareLogo'
import SlideUp from '@/components/animations/slideUp'

const ProvideOne = () => {
    return (
        <section className='lg:py-15 py-9'>
            <div className='max-w-[1350px] mx-auto px-[15px]'>
                <div className='grid lg:grid-cols-2 grid-cols-1 justify-between'>
                    <div className=''>
                        <SlideUp>
                            <Button variant="secondary">We Provide</Button>
                            <Title size={"5xl"} className="max-w-[703px] pt-6">Integration Solutions: Connect Seamlessly with Leading Tools</Title>
                            <div className='max-w-[563px]'>
                                <p className='font-semibold text-muted-foreground pt-6'>Discover the power of streamlined operations and enhanced performance through our integration solutions.</p>
                                <p className=' font-semibold pt-7.5'> <strong>WebFounders USA</strong> seamlessly integrates with a variety of industry-leading tools, ensuring a cohesive and efficient digital ecosystem for your business.</p>
                            </div>
                            <div className='flex md:flex-row flex-col gap-6 xl:mt-10 mt-8 pb-12.5'>
                                <Card bgColor={"after:bg-green"} color={"text-green"} icon={<Category />} title={"Seamless Connectivity"} />
                                <Card bgColor={"after:bg-purple"} color={"text-purple"} icon={<Filter />} title={"Customized Solutions"} />
                                <Card bgColor={"after:bg-red"} color={"text-red"} icon={<Shield />} title={"Optimized Performance"} />
                            </div>
                            <Button variant="outline" size="lg" asChild className="max-h-[64px] group">
                                <Link href={"/about-us"}>  See all Integrations <span className='-rotate-45 group-hover:rotate-0 transition-all duration-75 ' ><RightArrow /></span></Link>
                            </Button>
                        </SlideUp>
                    </div>
                    <div className='h-full'>
                        <SoftwareLogo />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProvideOne


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