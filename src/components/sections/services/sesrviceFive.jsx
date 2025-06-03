import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SlideUp from '@/components/animations/slideUp'
import { Button } from '@/components/ui/button'
import Title from '@/components/ui/title'
import { servicesDataFive } from '@/lib/fackData/servicesDataFive'

const ServiceFive = () => {
    return (
        <section className='lg:pt-[120px] pt-16 lg:pb-15 pb-9'>
            <div className='max-w-[1350px] mx-auto px-[15px]'>
                <SlideUp>
                    <div className='flex flex-col items-center'>
                        <Button variant="secondary">Our Services</Button>
                        <Title size={"5xl"} className="max-w-[869px] pt-6 text-center">Innovative Digital Marketing with SEO, PPC, and More</Title>
                    </div>
                </SlideUp>
                <div className='lg:pt-11 pt-3'>
                    <div className='grid xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2'>
                        {
                            servicesDataFive.map(({ id, description, icon, service_name }) => {
                                return (
                                    <SlideUp key={id} id={id}>
                                        <div className='lg:mt-7.5 mt-5 p-[22px] flex flex-col items-center text-center group rounded-[15px] transition-all duration-500 hover:shadow-[0_5px_12px_rgba(0,31,63,0.16)]'>
                                            <div className='mb-7.5 relative overflow-hidden'>
                                                <Image src={icon[0]} alt='icon' />
                                                <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 transition-all duration-500 group-hover:-rotate-[33deg]'>
                                                    <Image src={icon[1]} alt='icon' />
                                                </div>
                                            </div>
                                            <Link href={"/service-details"} className='text-xl font-extrabold text-muted-foreground leading-[140%] multiline-hover'>{service_name}</Link>
                                            <p className='pt-5'>{description}</p>
                                        </div>
                                    </SlideUp>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServiceFive