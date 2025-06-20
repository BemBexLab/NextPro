"use client"
import React, { useContext } from 'react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import Image from 'next/image'

import { BsMoonStars, BsQuestionLg } from 'react-icons/bs'
import { IoSunnyOutline } from 'react-icons/io5'
import { CiGlobe } from 'react-icons/ci'
import { FiPhone } from 'react-icons/fi'
import { MdOutlineEmail } from 'react-icons/md'
import SocialIcons from './socialIcons'

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { countriesList } from '@/lib/fackData/countriesList'
import { Offcanvas, OffcanvasClose, OffcanvasContent, OffcanvasTrigger } from '@/components/ui/offcanvas'
import { CountryContext } from '@/contextApi/countryProvider'


const Setting = () => {
    const { theme, setTheme } = useTheme()
    const { selectCountry, setSelectCountry } = useContext(CountryContext)

    return (
        <div className='fixed z-30 bottom-7.5 left-[15px] bg-[#e5e8eb] dark:bg-[#2d343b] rounded-full py-1 px-1 flex flex-col gap-2 items-center'>

            {/* Call Icon */}
            <Link href="tel:+1 470-469-7096" target="_blank">
                <div className='w-7 h-7 rounded-full flex justify-center items-center p-[5px] bg-background dark:text-muted-foreground cursor-pointer hover:bg-[#f0f4fa] transition'>
                    <FiPhone className='text-xl' />
                </div>
            </Link>

            {/* Email Icon */}
            <Link href="mailto:hello@webfounder.com" target="_blank">
                <div className='w-7 h-7 rounded-full flex justify-center items-center p-[5px] bg-background dark:text-muted-foreground cursor-pointer hover:bg-[#f0f4fa] transition'>
                    <MdOutlineEmail className='text-xl' />
                </div>
            </Link>

            {/* Theme Toggle */}
            {/* <div className='w-7 h-7 rounded-full flex justify-center items-center p-[5px] bg-background text-muted-foreground cursor-pointer'>
                {
                    theme === 'dark' ?
                        <div onClick={() => setTheme("light")}>
                            <IoSunnyOutline />
                        </div>
                        :
                        <div onClick={() => setTheme("dark")}>
                            <BsMoonStars />
                        </div>
                }
            </div> */}

            {/* Country Selector */}
            {/* <Select value={selectCountry} onValueChange={value => setSelectCountry(value)}>
                <SelectTrigger isArrow={false} className={cn(`p-0 h-auto font-semibold text-lg border-none bg-transparent [&_.icon-flag]:hidden`)}>
                    <div className='w-7 h-7 rounded-full flex justify-center items-center p-[5px] bg-background dark:text-muted-foreground cursor-pointer'>
                        <SelectValue placeholder={<CiGlobe className='text-xl ' />} />
                    </div>
                </SelectTrigger>
                <SelectContent className={cn(`min-w-max border-none bg-background`)} >
                    {
                        countriesList.map(({ code, flag }) => (
                            <SelectItem key={code} value={code} className="text-lg focus:bg-inherit focus:text-inherit pl-2 cursor-pointer">
                                <Image src={flag} width={16} height={17} alt='uk flag' className='inline -inset -mt-1 mr-2' />
                                <span className='icon-flag'>{code}</span>
                            </SelectItem>
                        ))
                    }
                </SelectContent>
            </Select> */}


            {/* Help/Question Icon */}
            <Offcanvas>
                <OffcanvasTrigger>
                    <div className='w-7 h-7 rounded-full flex justify-center items-center p-[5px] bg-background dark:text-muted-foreground cursor-pointer'>
                        <BsQuestionLg className='text-xl ' />
                    </div>
                </OffcanvasTrigger>
                <OffcanvasContent className={"rounded-[10px] bottom-4 data-[state=open]:left-4"} side="left">
                    <OffcanvasClose className={"text-xl top-2 right-2"} />
                    <div className='pt-4.5 pb-[22px] px-[22px] max-w-[300px]'>
                        <h3 className='text-2xl font-extrabold text-muted-foreground pb-2'>Connect for more information</h3>
                        <p>We are here, ready to answer any types of questions</p>
                        <ul className='py-4'>
                            <li><Link href={"mailto:info@webfoundersusa.com"} className='multiline-hover'>info@webfoundersusa.com</Link></li>
                            <li><Link href={"tel:+1470205-2274"}><span className='font-semibold'>Call us:</span> <span className='multiline-hover'>+1 (470) 205-2274 </span> </Link></li>
                        </ul>
                        <SocialIcons />
                    </div>
                </OffcanvasContent>
            </Offcanvas>
        </div>
    )
}

export default Setting
