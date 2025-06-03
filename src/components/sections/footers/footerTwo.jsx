import Logo from '@/components/ui/logo'
import SocialIcons from '@/components/ui/socialIcons'
import React from 'react'
import ImportanceLinks from './importanceLinks'
import CopyRight from './copyRight'

const FooterTwo = () => {
    return (
        <footer className='bg-accent rounded-tr-[30px] rounded-tl-[30px] pt-[77px]'>
            <div className='container'>
                <div className='max-w-[1350px] mx-auto px-[15px]'>
                    <div className='grid xl:grid-cols-[auto_65%] lg:grid-cols-[auto_60%] grid-cols-1 gap-x-7 justify-between'>
                        <div>
                            <div className='pb-[33px] max-w-[178px]'>
                                <Logo />
                            </div>
                            <p className='pb-[38px]'>NextMarketing seamlessly integrates with a variety of industry-leading tools, ensuring a cohesive and efficient digital ecosystem for your business.</p>
                            <SocialIcons />
                        </div>
                        <div>
                            <ImportanceLinks />
                        </div>
                    </div>
                    <span className='inline-block bg-[#7C848C] h-[1px] w-full mt-[54px]'></span>
                    <CopyRight />
                </div>
            </div>
        </footer>
    )
}

export default FooterTwo