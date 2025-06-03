import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import Title from '../ui/title'
import Highlight from '../ui/highlight'
import Document from '../../../public/icons/document'
import Shield from '../../../public/icons/shield'
import Discount from '../../../public/icons/discount'
import Buy from '../../../public/icons/buy'
import SlideLeft from '../animations/slideLeft'
import SlideUp from '../animations/slideUp'

const data = [
    {
        id: 1,
        icon: <Document />,
        title: "Proven Track Record",
        desc: "With years of experience we have a proven our track record."
    },
    {
        id: 2,
        icon: <Shield height={35} width={35} />,
        title: "Tailored Solutions",
        desc: "We take the time to understand your unique goals and challenges."
    },
    {
        id: 3,
        icon: <Discount height={35} width={35} />,
        title: "Transparent Communication",
        desc: "We pride ourselves on our transparent communication."
    },
    {
        id: 4,
        icon: <Buy />,
        title: "Dedicated Support",
        desc: "Our team of dedicated experts is here to support you every step."
    },

]
const ChooseUs = () => {
    return (
        <section className='lg:py-15 py-9'>
            <div className='max-w-[1350px] mx-auto px-[15px]'>
                <div className='grid lg:grid-cols-[42%_auto] grid-cols-1 gap-7.5'>
                    <div>
                        <Image src={'/images/resource/why-choose-img4-1.png'} sizes='(max-width:1024px) 100vw, 50vw' style={{ width: '100%' }} width={486} height={633} alt='bg' />
                    </div>
                    <div>
                        <SlideUp>
                            <div>
                                <Title size={"5xl"} className={"max-w-[645px]"}>Why <Highlight>Next Agenecy</Highlight> is your First choice?</Title>
                                <p className='pt-7.5 font-semibold'>At Next Agency, we understand that choosing the right partner for your digital marketing needs is crucial. Here's why we believe we should be your first choice:</p>
                            </div>
                        </SlideUp>
                        <div className='pt-[38px] grid sm:grid-cols-2 grid-cols-1 gap-[38px] 
                        [&>*:nth-child(1)>.icon]:text-[#A22EFE]
                        [&>*:nth-child(2)>.icon]:text-[#5A5579]
                        [&>*:nth-child(3)>.icon]:text-[#FE2E79]
                        [&>*:nth-child(4)>.icon]:text-[#009F96]
                        '>
                            {
                                data.map(({ desc, icon, id, title }) => {
                                    return (
                                        <div key={id} className='text-center lg:text-start'>
                                            <span className='icon flex justify-center lg:justify-start'>{icon}</span>
                                            <Link href={"/services"} className='text-xl font-extrabold text-muted-foreground pt-2 inline-block multiline-hover'>{title}</Link>
                                            <p className='pt-2'>{desc}</p>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ChooseUs