import React from 'react'
import Link from "next/link"
import { Button } from '../ui/button'
import Title from '../ui/title'
import RightArrow from '../../../public/icons/rightArrow'
import Document from '../../../public/icons/document'
import Shield from '../../../public/icons/shield'
import Discount from '../../../public/icons/discount'
import Buy from '../../../public/icons/buy'
import SlideUp from '../animations/slideUp'

const ourItems = [
    {
        id: 1,
        title: "Market Research",
        icon: <Document />,
        desc: "Identify relevant and high-impact keywords for your industry."
    },
    {
        id: 2,
        title: "Digital Marketing",
        icon: <Shield height={"36"} width={"36"} />,
        desc: "Identify relevant and high-impact keywords for your industry."
    },
    {
        id: 3,
        title: "User Experience",
        icon: <Discount height={"36"} width={"36"} />,
        desc: "Identify relevant and high-impact keywords for your industry."
    },
    {
        id: 4,
        title: "SEO Optimization",
        icon: <Buy height={"36"} width={"36"} />,
        desc: "Identify relevant and high-impact keywords for your industry."
    },

]
const Solutions = () => {
    return (
        <section className='lg:py-15 py-9'>
            <div className='max-w-[1350px] mx-auto px-[15px]'>
                <div className='grid lg:grid-cols-2 grid-cols-1'>
                    <div>
                        <SlideUp>
                            <Button variant="secondary">One-stop Solutions</Button>
                            <Title size={"5xl"} className="max-w-[638px] pt-6">Smart solutions Real-time Results</Title>
                            <p className='font-semibold text-muted-foreground pt-7.5  max-w-[638px]'>RankFlow seamlessly integrates with a variety of industry-leading tools, ensuring a cohesive and efficient digital ecosystem for your business.</p>
                            <Button asChild variant="outline" size="lg" className="max-h-[64px] rounded-full group lg:mt-20 mt-8">
                                <Link href={"#services"}> View all Services <span className='-rotate-45 group-hover:rotate-0 transition-all duration-75' ><RightArrow /></span></Link>
                            </Button>
                        </SlideUp>
                    </div>
                    <div className='pt-14 lg:pt-0'>
                        <div className='grid sm:grid-cols-2 grid-cols-1 sm:gap-y-[72px] gap-y-10 [&>*:nth-child(2)>.icon]:text-[#5A5579] [&>*:nth-child(2)>.icon]:bg-[#5a55791a] [&>*:nth-child(3)>.icon]:text-[#FE2E79] [&>*:nth-child(3)>.icon]:bg-[#9a2e791a] [&>*:nth-child(4)>.icon]:text-[#009F96] [&>*:nth-child(4)>.icon]:bg-[#009f961a]'>
                            {
                                ourItems.map(({ desc, icon, id, title }) => <Card key={id} id={id} desc={desc} title={title} icon={icon} />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Solutions

const Card = ({ id, icon, title, desc }) => {
    return (
        <SlideUp id={id}>
            <div className='bg-[rgba(162,46,254,0.10)] icon rounded-2xl p-[22px] w-[85px] h-[85px] mb-7.5 flex justify-center items-center text-purple '>
                {icon}
            </div>
            <Link href={"/service-details"} className='text-xl font-extrabold text-muted-foreground relative hover-underline after:bg-muted after:h-[1px]'>{title}</Link>
            <p className='pt-5'>{desc}</p>
        </SlideUp>
    )
}