import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SlideUp from '@/components/animations/slideUp'
import { Button } from '@/components/ui/button'
import Highlight from '@/components/ui/highlight'
import Title from '@/components/ui/title'
import { servicesDataFour } from '@/lib/fackData/servicesDataFour'

const ServiceFour = () => {
    return (
        <section className='lg:py-15 py-9'>
            <div className='max-w-[1350px] mx-auto px-[15px]'>
                <SlideUp>
                    <div className='flex flex-col items-center'>
                        <Button variant="secondary">Our Services</Button>
                        <Title size={"5xl"} className="max-w-[803px] pt-6 text-center">Redefine <Highlight>Digital Excellence</Highlight> at next marketing</Title>
                    </div>
                </SlideUp>
                <div className='lg:pt-12.5 pt-7.5'>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7.5'>
                        {
                            servicesDataFour.map(({ description, icons, id, service_name }) => (
                                <Card key={id} id={id} description={description} service_name={service_name} icons={icons} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServiceFour

const Card = ({ id, service_name, description, icons }) => {
    return (
        <SlideUp id={id}>
            <div className='relative text-center lg:text-left rounded-[15px] pt-[200px] pb-20 px-6 bg-[rgba(226,231,255,0.6)] dark:bg-[#1d252d] border-2 border-[rgba(0,31,63,0.15)] dark:border-[#374049] overflow-hidden group'>
                <div className='bg-no-repeat opacity-[0.22] absolute top-0 left-0 w-full h-full group-hover:translate-y-[-65px] transition-all duration-500 bg-[center_top] lg:bg-left-top' style={{ backgroundImage: `url(${icons[0].src})` }}></div>
                <div className='relative flex justify-center lg:justify-start'>
                    <Image src={icons[1]} alt='icon' className='group-hover:rotate-[70deg] transition-all duration-500' />
                </div>
                <div className='pt-2 relative z-10'>
                    <Title size={"2xl"}><Link href={"/service-details"} className='multiline-hover'>{service_name}</Link></Title>
                    <p className='pt-5'>{description}</p>
                </div>
            </div>
        </SlideUp>
    )
}