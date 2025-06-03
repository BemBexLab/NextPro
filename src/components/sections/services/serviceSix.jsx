import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import SlideUp from '@/components/animations/slideUp'
import { Button } from '@/components/ui/button'
import Title from '@/components/ui/title'
import { servicesDataSix } from '@/lib/fackData/servicesDataSix'


const ServiceSix = () => {
    return (
        <section className='lg:py-15 py-9'>
            <div className='max-w-[1350px] mx-auto px-[15px]'>
                <SlideUp>
                    <div className='flex flex-col items-center'>
                        <Button variant="secondary">Our Services</Button>
                        <Title size={"5xl"} className="max-w-[869px] pt-6 text-center">Redefine Digital Excellence at NextPro</Title>
                    </div>
                </SlideUp>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7.5 pt-12.5'>
                    {servicesDataSix.slice(0, 3).map(({ id, description, service_name, icon }) => {
                        return (
                            <div key={id} className='border border-accent rounded-[15px] px-[15px] py-4 text-center lg:text-left'>
                                <SlideUp id={id}>
                                    <div className='pb-15 flex justify-center'>
                                        <Image src={icon} alt={service_name} />
                                    </div>
                                    <div className='bg-[rgba(46,77,254,0.05)] rounded-[10px] px-[16px] py-10'>
                                        <Title size={"2xl"}>
                                            <Link href={""} className='multiline-hover'>{service_name}</Link>
                                        </Title>
                                        <p className='pt-5'>{description}</p>
                                    </div>
                                </SlideUp>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default ServiceSix