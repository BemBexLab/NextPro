import React from 'react'
import SocialIcons from '@/components/ui/socialIcons'
import ImportanceLinks from './importanceLinks'
import CopyRight from './copyRight'
import FooterContact from './footerContact'
import { cn } from '@/lib/utils'

const FooterThree = ({ className }) => {
    return (
        <footer className={cn(`lg:pt-15 pt-9`)}>
            <div className='container '>
                <div className={cn(`bg-[rgba(46,77,254,0.05)] rounded-tr-[30px] rounded-tl-[30px] pt-12.5 pb-[54px]  ${className}`)}>
                    <div className='max-w-[1350px] mx-auto px-[15px]'>
                        <FooterContact />
                        <span className='inline-block bg-[#7C848C] h-[1px] w-full mb-12.5 mt-[45px]'></span>
                        <div className='grid xl:grid-cols-[auto_65%] lg:grid-cols-[auto_60%] grid-cols-1 gap-x-7 justify-between'>
                            <div>
                                <h3 className='text-1xl font-semibold text-muted-foreground lg:pb-7.5 pb-3'>About</h3>
                                <p className='pb-[38px]'>NextMarketing seamlessly integrates with a variety of industry-leading tools, ensuring a cohesive and efficient digital ecosystem for your business.</p>
                                <SocialIcons prantBorder={"text-2xl text-muted-foreground"} />
                            </div>
                            <div>
                                <ImportanceLinks />
                            </div>
                        </div>
                    </div>
                </div>
                <CopyRight className={`max-w-[1350px] mx-auto px-[15px]`} />
            </div>
        </footer>
    )
}

export default FooterThree