"uee client"
import { useContext} from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { IoSunnyOutline } from "react-icons/io5";
import { BsMoonStars } from "react-icons/bs";
import { CiGlobe } from 'react-icons/ci'
import { useTheme } from 'next-themes'

import Email from '../../../../public/icons/email'
import Call from '../../../../public/icons/call'
import SocialIcons from '@/components//ui/socialIcons'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { cn } from '@/lib/utils';
import { countriesList } from '@/lib/fackData/countriesList';
import { CountryContext } from '@/contextApi/countryProvider';


const TopHeader = ({ color, bgColor, darkBg }) => {
    const { theme, setTheme } = useTheme()
    const  {selectCountry, setSelectCountry}  = useContext(CountryContext)
    // The color, darkBg and bgcolor props are inherited from the header three, and these properties are passed down to different children of the 

    return (
        <div className='container hidden lg:block'>
            <div className='pt-[22px] pb-[23px] '>
                <div className='flex justify-between items-center'>
                    {/*  left side Start */}
                    <div className='flex items-center gap-7.5'>
                        <p className={cn(`flex items-center gap-4 ${color}`)}>
                            <Email />
                            <Link href={"mailto:info@webfoundersusa.com"} className='multiline-hover'>info@webfoundersusa.com</Link>
                        </p>
                        <p className='h-7.5 w-[1px] bg-accent dark:bg-[#717A83]'></p>
                        <p className={cn(`flex items-center gap-4 ${color}`)}>
                            <Call />
                            <Link href={"tel:(470) 205-2274"}><span className='font-semibold'>Call us:</span> <span className='multiline-hover'>(470) 205-2274</span> </Link>
                        </p>
                    </div>
                    {/*  left side end */}


                    <div className='flex items-center gap-7.5'>
                        <div className='flex items-center gap-7.5'>
                            <div className='hidden xl:block'>
                                <SocialIcons color={color} />
                            </div>
                            {/* dark and light btn */}
                            <div className='flex items-center gap-2'>
                                <div className={cn(`flex gap-3 bg-[#ccd2d9] dark:bg-[#2d343b] rounded-[29px] px-1 py-1`, darkBg)}>
                                    <div onClick={() => setTheme("light")} className='w-[26px] h-[26px] rounded-full flex justify-center items-center p-1 bg-background dark:bg-transparent text-muted-foreground cursor-pointer'>
                                        <IoSunnyOutline />
                                    </div>
                                    <div onClick={() => setTheme("dark")} className='w-[26px] h-[26px] rounded-full flex justify-center items-center p-1 dark:bg-[#001F3F] text-muted-foreground cursor-pointer'>
                                        <BsMoonStars />
                                    </div>
                                </div>
                                {
                                    theme === "dark" ? <span className={cn(`font-semibold ${color}`)}>Dark</span> : <span className={cn(`font-semibold ${color}`)}>Light</span>
                                }
                            </div>
                            {/* dark and light btn */}
                        </div>
                        <p className='h-7.5 w-[1px] bg-accent dark:bg-[#717A83]'></p>
                        {/* language select option */}
                        <div className='w-[75px]'>
                            <Select value={selectCountry} onValueChange={value => setSelectCountry(value)}>
                                <SelectTrigger className={cn(`p-0 h-auto font-semibold text-lg border-none bg-transparent ${color}`)}>
                                    <div className='flex items-center gap-1'>
                                        {selectCountry ? "" : <CiGlobe className='text-2xl' />}
                                        <SelectValue placeholder="EN" />
                                    </div>
                                </SelectTrigger>
                                <SelectContent className={cn(`min-w-max border-none bg-background ${bgColor}`)} >
                                    {
                                        countriesList.map(({code, flag}) => {
                                            return (
                                                <SelectItem key={code} value={code} className="text-lg focus:bg-inherit focus:text-inherit pl-2 cursor-pointer">
                                                    <Image src={flag} width={16} height={17} alt='uk flag' className='inline -inset -mt-1 mr-2' />
                                                    <span>{code}</span>
                                                </SelectItem>
                                            )
                                        })
                                    }
                                </SelectContent>
                            </Select>
                        </div>
                        {/* language select option */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopHeader