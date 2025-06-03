import Link from 'next/link'
import React from 'react'
import { Button } from '@/components/ui/button'
import PlayIcon from '@/components/ui/playIcon'
import Title from '@/components/ui/title'

const HeroFive = () => {
    return (
        <section className='lg:pb-15 pb-9'>
            <div className='bg-cover bg-no-repeat bg-center bg-blend-overlay bg-[rgba(0,0,0,0.3)] h-full w-full md:h-screen flex items-center flex-wrap lg:pt-[192px] pt-40 lg:pb-[74px] pb-32' style={{ backgroundImage: `url(/images/banner/hero-img5-1.jpg)` }}>
                <div className='container'>
                    <div className='max-w-[1350px] mx-auto'>
                        <div className='max-w-[754px]'>
                            <Title size={"7.5xl"} className={"text-white"}>Transforming Visions into Digital Excellence</Title>
                            <p className='font-semibold text-white pt-7.5'>Choose Next as your digital marketing agency and propel ur business to new heights with our award-winning digital marketing services.</p>

                            <div className='flex sm:flex-row flex-col sm:items-center gap-[32px] pt-[55px] pb-[22px]'>
                                <div>
                                    <Button asChild className="dark:text-white hover:border-white hover:text-white">
                                        <Link href="/pricing"> Get Started for Free </Link>
                                    </Button>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <PlayIcon playOne={false} color="text-white" />
                                    <p className='font-semibold text-white'>How It works?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroFive