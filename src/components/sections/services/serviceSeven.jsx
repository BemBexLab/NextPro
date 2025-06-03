import Link from 'next/link'
import React from 'react'
import SlideUp from '@/components/animations/slideUp'
import { Button } from '@/components/ui/button'
import Title from '@/components/ui/title'
import { servicesDataTwo } from '@/lib/fackData/servicesDataTwo'

const ServiceSeven = () => {
    return (
        <section className='lg:pt-[120px] pt-16 lg:pb-15 pb-9'>
            <div className='max-w-[1350px] mx-auto px-[15px]'>
                <SlideUp>
                    <div className='flex flex-col items-center'>
                        <Button variant="secondary">Our Services</Button>
                        <Title size={"5xl"} className="max-w-[869px] pt-6 text-center">Innovative Digital Marketing with SEO, PPC, and More</Title>
                    </div>
                </SlideUp>
                <div className='lg:pt-7.5 pt-2'>
                    <SlideUp>
                        <div className='grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-x-10'>
                            {
                                servicesDataTwo.map(({ id, description, icon_1, service_name }) => {
                                    return (
                                        <div key={id} className='lg:pt-15 pt-8 text-center flex flex-col items-center group'>
                                            <div className='md:w-[85px] md:h-[85px] w-16 h-16 md:p-6 p-4 rounded-full flex justify-center items-center lg:mb-7.5 mb-4 bg-primary text-secondary-foreground dark:text-muted-foreground icon mx-auto'>
                                                <span className='transition-all duration-500 group-hover:scale-90'>{icon_1}</span>
                                            </div>
                                            <h5 className='text-xl font-extrabold text-muted-foreground leading-[140%] text-center'>
                                                <Link href={"/service-details"} className='multiline-hover'>{service_name}</Link>
                                            </h5>
                                            <p className='lg:pt-6 pt-3 text-center'>{description}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </SlideUp>
                </div>
            </div>
        </section>
    )
}

export default ServiceSeven