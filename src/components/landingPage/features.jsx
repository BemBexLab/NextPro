import React from 'react'
import Title from '../ui/title'
import Image from 'next/image'
import icon_1 from "../../../public/images/shapes/seo-icon.png"
import icon_2 from "../../../public/images/shapes/social-media-icon.png"
import icon_3 from "../../../public/images/shapes/content-writing-icon.png"
import icon_5 from "../../../public/images/shapes/email-marketing-icon.png"
import icon_6 from "../../../public/images/shapes/pay-per-icon.png"
import icon_8 from "../../../public/images/shapes/e-commers-icon.png"

const featuresList = [
    {
        id: 1,
        icon: icon_1,
        service_name: "Well Documented",
        description: "Comprehensive guides and documentation make theme setup and customization a breeze."
    },
    {
        id: 2,
        icon: icon_2,
        service_name: "Clean Code",
        description: "Seamlessly adapts to various devices, delivering an optimal viewing experience on smartphones, tablets, and desktops."
    },
    {
        id: 3,
        icon: icon_5,
        service_name: "Optimized Code",
        description: "Clean and efficient coding ensures faster load times, better SEO, and smoother website operation."
    },
    {
        id: 4,
        icon: icon_6,
        service_name: "OpenStreet Map",
        description: " Integrated OpenStreet Map feature enhances location-based services, providing precise location of the Business."
    },
    {
        id: 5,
        icon: icon_3,
        service_name: "Smooth Animation",
        description: "Engage visitors with captivating animations that enhance the user experience and add a touch of elegance."
    },
    {
        id: 6,
        icon: icon_8,
        service_name: "Working Contact form",
        description: "Next's Contact Forms Ensure Seamless Communication and Lead Management, Empowering Your Business Growth."
    },
]

const Features = () => {
    return (
        <section id='features' className='max-w-[1480px] mx-auto px-[15px] py-[60px]'>
            <Title size={"6xl"} className={"max-w-[760px] text-center mx-auto lg:leading-normal"}>
                Core Features for Digital Marketing Mastery
            </Title>
            <p className='text-center text-1xl font-semibold pt-11 max-w-[860px] mx-auto'>Explore Next's Core Features: Maximize Your Digital Marketing Potential</p>
            <div className='grid lg:grid-cols-[630px_1fr] grid-cols-1 gap-15 pt-20'>
                <div>
                    <Image src={"/images/demos/feature-l.png"} width={630} height={700} sizes='(max-width:1024px) 100vw, 50vw' alt='features background' />
                </div>
                <div>
                    <div className='grid lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-x-7.5 gap-y-[70px]'>
                        {
                            featuresList.map(({ id, description, icon, service_name }) => {
                                return (
                                    <div key={id} className='text-center lg:text-start group'>
                                        <div className='mb-7.5 transition-all duration-500 group-hover:scale-105 overflow-hidden flex justify-center lg:justify-start'>
                                            <div className='max-w-12.5 h-12.5 flex items-end'>
                                                <Image src={icon} alt='icon' className='w-auto h-auto object-contain' />
                                            </div>
                                        </div>
                                        <h5 className='text-xl font-extrabold text-muted-foreground leading-[140%]'>{service_name}</h5>
                                        <p className='pt-[23px]'>{description}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features

