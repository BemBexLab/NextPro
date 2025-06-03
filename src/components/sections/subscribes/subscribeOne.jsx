import React from 'react'
import RightArrow from '../../../../public/icons/rightArrow'
import Title from '@/components/ui/title'
import { cn } from '@/lib/utils'

const SubscribeOne = ({className}) => {
    return (
        <section className={cn(`lg:py-15 py-9 ${className}`)}>
            <div className='max-w-[1350px] mx-auto px-[15px] relative overflow-x-hidden'>
                <div className='absolute top-0 w-[95%] md:w-full h-full object-contain bg-no-repeat bg-right rounded-[30px]' style={{ "backgroundImage": `url(/images/background/services-bg1-1.png)` }}></div>
                <div className='rounded-[30px] bg-primary lg:px-12.5 px-7.5 lg:pt-14 pt-7.5 lg:pb-16 pb-7.5 flex lg:flex-row flex-col justify-between lg:items-center'>
                    <div className='pb-6'>
                        <Title size={"5xl"} className={"max-w-[420px] text-secondary-foreground dark:text-white"}>Subscribe to our Newsletter</Title>
                    </div>
                    <div className='relative lg:max-w-[594px] w-full'>
                        <form>
                            <input type='text' placeholder='Enter your email' className='border-[3px] border-accent rounded-full pt-7.5 pb-7 pl-11 max-h-[70px] w-full outline-blue-200' required />
                            <div className='absolute right-[3px] top-1/2 -translate-y-1/2 '>
                                <button className="group rounded-full sm:px-[38px] sm:py-[18px] border-2 border-primary font-bold sm:min-w-[198px] sm:max-h-[64px] h-[64px] w-[64px] bg-primary text-secondary-foreground dark:text-white flex justify-center items-center gap-2.5 transition-all duration-500 hover:bg-transparent hover:text-primary-foreground"> <span className='hidden sm:block'>Subscribe</span> <span className='-rotate-45 group-hover:rotate-0 transition-all' ><RightArrow /></span></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SubscribeOne