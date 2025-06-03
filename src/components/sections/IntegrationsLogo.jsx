"use client"
import React from 'react'
import Highlight from '../ui/highlight'
import Title from '../ui/title'
import Link from 'next/link'
import SlideUp from '../animations/slideUp'
import Image from 'next/image'

const integrationsLogosData = [
    {
        id: 1,
        name: "integrationsLogo",
        integrationsLogos: "/images/shapes/integrations1-1.png"
    },
    {
        id: 2,
        name: "integrationsLogo",
        integrationsLogos: "/images/shapes/integrations1-2.png"
    },
    {
        id: 3,
        name: "integrationsLogo",
        integrationsLogos: "/images/shapes/integrations1-3.png"
    },
    {
        id: 4,
        name: "integrationsLogo",
        integrationsLogos: "/images/shapes/integrations1-4.png"
    },
    {
        id: 5,
        name: "integrationsLogo",
        integrationsLogos: "/images/shapes/integrations1-5.png"
    },
    {
        id: 6,
        name: "integrationsLogo",
        integrationsLogos: "/images/shapes/integrations1-6.png"
    },
    {
        id: 7,
        name: "integrationsLogo",
        integrationsLogos: "/images/shapes/integrations1-7.png"
    },
    {
        id: 8,
        name: "integrationsLogo",
        integrationsLogos: "/images/shapes/integrations1-8.png"
    },
    {
        id: 9,
        name: "integrationsLogo",
        integrationsLogos: "/images/shapes/integrations1-9.png"
    },
    {
        id: 10,
        name: "integrationsLogo",
        integrationsLogos: "/images/shapes/integrations1-10.png"
    },
    {
        id: 11,
        name: "integrationsLogo",
        integrationsLogos: "/images/shapes/integrations1-11.png"
    },
    {
        id: 12,
        name: "integrationsLogo",
        integrationsLogos: "/images/shapes/integrations1-12.png"
    },
    {
        id: 13,
        name: "integrationsLogo",
        integrationsLogos: "/images/shapes/integrations1-13.png"
    },
    {
        id: 14,
        name: "integrationsLogo",
        integrationsLogos: "/images/shapes/integrations1-14.png"
    },
    {
        id: 15,
        name: "integrationsLogo",
        integrationsLogos: "/images/shapes/integrations1-15.png"
    },
    {
        id: 16,
        name: "integrationsLogo",
        integrationsLogos: "/images/shapes/integrations1-16.png"
    }
]
const IntegrationsLogo = () => {
    return (
        <section className=' py-15'>
            <div className='max-w-[1350px] mx-auto px-[15px]'>
                <SlideUp>
                    <div className='max-w-[860px] me-auto ms-auto mb-[50px]'>
                        <div className='flex flex-col items-center'>
                            <Title size={"5xl"} className="max-w-[872px] pb-7 text-center"> <Highlight>Get more value</Highlight> from your tools that integrate seamlessly</Title>
                            <p className='mb-0 text-center font-semibold'>At Next Agency, we understand that choosing the right partner for your digital marketing needs is crucial. Here's why we believe we should be your first choice:</p>
                        </div>
                    </div>
                </SlideUp>

                <SlideUp>
                    <ul className='flex flex-wrap justify-center gap-x-[90px] gap-y-[50px]'>
                        {
                            integrationsLogosData.map(({ id, name, integrationsLogos }) => (
                            <li key={id} className='w-[80px] h-[80px]'>  <Link href={'#'}>
                                <Image className='object-cover' src={integrationsLogos} alt={name} width={80} height={80} />
                                </Link>
                            </li>
                            ))
                        }
                    </ul>
                </SlideUp>
            </div>
        </section>
    )
}

export default IntegrationsLogo