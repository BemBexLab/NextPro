import Link from 'next/link'
import React from 'react'
import { headerExtraInfo } from '@/lib/fackData/headerExtraInfo'
import SocialIcons from '@/components/ui/socialIcons'
import Logo from '@/components/ui/logo'


const HeaderShortInfo = () => {
    return (
        <div>
            <div className='bg-[#2E4DFE0D] p-12.5 rounded-tr-[30px] rounded-tl-[30px]'>
                <div className='flex justify-start mb-7.5'>
                    <Logo />
                </div>
                <p>
                    Choose Next Agency as your digital marketing agency and propel ur business to new heights with our award-winning digital marketing services.
                </p>
            </div>
            <ul className='px-12.5 pt-7.5 pb-12.5'>
                {
                    headerExtraInfo.map(({ icon, id, label, link }) => {
                        return (
                            <li key={id} className='px-4 py-3.5 rounded-lg transition-all duration-500 hover:bg-[rgba(46,77,254,0.05)]'>
                                <Link href={link} className='flex items-center gap-[15px] font-semibold text-muted-foreground'>
                                    {icon}
                                    <span className='font-semibold'>{label}</span>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
            <div className='px-12.5 pb-12.5'>
                <h1 className='text-muted-foreground font-semibold'>Get In Touch</h1>
                <div className='text-[#7C848C] mb-[26px]'>
                    <p>3021 Peachtree Rd NW Atlanta, GA 30305, USA</p>
                    <p> <Link href={"mailto:ask@next.com"}>info@webfoundersusa.com</Link></p>
                    <p>Ph:<Link href={"tel:+14704707392"}>+1 470-470-7392</Link></p>
                </div>
                <SocialIcons/>
            </div>
        </div>
    )
}

export default HeaderShortInfo
