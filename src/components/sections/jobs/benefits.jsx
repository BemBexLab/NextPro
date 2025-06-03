import SlideUp from '@/components/animations/slideUp'
import Title from '@/components/ui/title'
import Image from 'next/image'
import React from 'react'

const Benefits = () => {
    return (
        <div className='sticky top-20'>
            <SlideUp>
                <div className='bg-[rgba(46,77,254,0.05)] rounded-[30px] px-[25px] py-[43px]'>
                    <Title size={"4xl"}>Benefits</Title>
                    <ul className='pt-5 flex flex-col gap-[15px]'>
                        <li className='flex items-start gap-2'>
                            <Image src={"/images/shapes/job-feature-icon1-1.png"} width={18} height={17} alt='icon' />
                            <span className='text-base inline-block -mt-1'>Competitive salary commensurate with experience.</span>
                        </li>
                        <li className='flex items-start gap-2'>
                            <Image src={"/images/shapes/job-feature-icon1-2.png"} width={18} height={17} alt='icon' />
                            <span className='text-base inline-block -mt-1'>Comprehensive benefits package, including health insurance and retirement plans.</span>
                        </li>
                        <li className='flex items-start gap-2'>
                            <Image src={"/images/shapes/job-feature-icon1-3.png"} width={18} height={17} alt='icon' />
                            <span className='text-base inline-block -mt-1'>Flexible work schedule and remote work options.</span>
                        </li>
                        <li className='flex items-start gap-2'>
                            <Image src={"/images/shapes/job-feature-icon1-4.png"} width={18} height={17} alt='icon' />
                            <span className='text-base inline-block -mt-1'>Opportunities for professional development and advancement within the company.</span>
                        </li>
                        <li className='flex items-start gap-2'>
                            <Image src={"/images/shapes/job-feature-icon1-5.png"} width={18} height={17} alt='icon' />
                            <span className='text-base inline-block -mt-1'>Dynamic and collaborative work environment with a focus on creativity and innovation.</span>
                        </li>
                        <li className='flex items-start gap-2'>
                            <Image src={"/images/shapes/job-feature-icon1-6.png"} width={18} height={17} alt='icon' />
                            <span className='text-base inline-block -mt-1'>Dynamic and collaborative work environment with a focus on creativity and innovation.</span>
                        </li>
                    </ul>
                </div>
            </SlideUp>
        </div>
    )
}

export default Benefits