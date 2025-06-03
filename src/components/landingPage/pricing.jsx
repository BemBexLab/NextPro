import React from 'react'
import Title from '../ui/title'
import CheckCircle from '../../../public/icons/checkCircle'
import { Button } from '../ui/button'
import Link from 'next/link'
import RightArrow from '../../../public/icons/rightArrow'

const Pricing = () => {
    return (
        <section className='max-w-[1350px] mx-auto px-[15px] pt-[60px]'>
            <div className='xl:px-[54px] px-6 xl:pt-[120px] pt-16 xl:pb-[85px] pb-12 flex xl:flex-row flex-col justify-between xl:items-center bg-[#2E4DFE0D] rounded-[30px]'>
                <div className='relative after:absolute xl:after:-right-[70px] after:bg-transparent after:top-0 after:h-full after:w-[1px] after:bg-[#B0C2E2]'>
                    <Title size={"6xl"} className="max-w-[726px] font-medium"> Buy <span className='font-extrabold'>NextPro</span> for Unforgettable Digital Marketing Experiences!</Title>
                </div>
                <p className='bg-[#B0C2E2] h-[268px] w-[1px] xl:block hidden'></p>
                <div className='xl:mr-28 mt-8 xl:mt-0'>
                    <ul className='flex flex-col gap-4.5 xl:mb-12.5 mb-10'>
                        <li className='flex items-center gap-3'><CheckCircle /> <span className='font-medium text-muted-foreground'>One-Time Payment</span></li>
                        <li className='flex items-center gap-3'><CheckCircle /> <span className='font-medium text-muted-foreground'>6 Months Support</span></li>
                        <li className='flex items-center gap-3'><CheckCircle /> <span className='font-medium text-muted-foreground'>No Monthly Fees</span></li>
                    </ul>
                    <Button asChild size={"lg"} className="rounded-full">
                        <Link target='_blank' href={"https://themeforest.net/item/nextpro-multipurpose-react-nextjs-tailwindcss-template-for-digital-services-agency/52734604"}>
                            Purchase NextPro <RightArrow />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default Pricing