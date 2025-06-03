"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import Link from 'next/link'
import { IoIosArrowDown } from "react-icons/io";
import { Button } from '../../ui/button';

import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { MdMenu } from 'react-icons/md';
import MobileExtraInfo from './mobileExtraInfo';
import { usePathname } from 'next/navigation';

const MobileMenu = ({ data }) => {
    const pathName = usePathname()
    const [subDropDownActive, setSubDropDownActive] = useState(null)
    const [mainDropDownActive, setMainDropDownActive] = useState(null)
    const [open, setOpen] = useState(false)
    useEffect(() => {
        setMainDropDownActive(null)
        setOpen(false)
    }, [pathName])

    return (
        <div className='xl:hidden block '>
            <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger>
                    <MdMenu className='text-primary-foreground text-5xl -mb-2' />
                </SheetTrigger>
                <SheetContent side="left" className="bg-muted dark:bg-accent">
                    <div className='overflow-y-auto overflow-x-hidden no-scrollbar h-full px-0 py-7.5'>
                        <div className='flex justify-start mt-7'>
                            <Link href={"/"}>
                                <Image src={"/images/logo-light.png"} width={179} height={53} alt='logo-white' className='w-full h-full' />
                            </Link>
                        </div>
                        <ul className='pt-9 pb-8'>
                            {
                                data.map(({ id, path, lable, dropDown, megaMenu }) => {
                                    return (
                                        <li key={id} >
                                            <Link onClick={() => setMainDropDownActive(mainDropDownActive === id ? null : id)} href={path} className='flex justify-between items-center text-secondary-foreground dark:text-muted-foreground text-base leading-[100%] py-[11px] px-4 font-semibold z-1 relative after:z-[-1] after:absolute after:left-0 after:bottom-0 after:w-0 after:transition-all after:duration-300 hover:after:w-full after:h-full after:bg-secondary group-hover/subDropdwon:after:text-secondary-foreground'>
                                                {lable}
                                                {dropDown.length || megaMenu.length ? <span><IoIosArrowDown /></span> : ""}
                                            </Link>
                                            {
                                                dropDown.length &&
                                                <ul className={`transition-all duration-500 ${mainDropDownActive === id ? "max-h-[600px] overflow-auto pt-3 no-scrollbar" : "max-h-0 overflow-hidden"}`}>
                                                    { /* start dropdonw */
                                                        dropDown.map(({ id, lable, path, tag, subDropdonwn }) => {
                                                            return (
                                                                <li key={id} onClick={() => setSubDropDownActive(subDropDownActive === id ? null : id)} className=' relative px-7 group/subDropdwon'>
                                                                    <Link href={path} className='flex items-center justify-between font-semibold relative text-secondary-foreground dark:text-muted-foreground text-base leading-[100%] py-[11px] px-4 z-1 after:z-[-1] after:absolute after:left-0 after:bottom-0 after:w-0 after:transition-all after:duration-300 hover:after:w-full after:h-full after:bg-secondary group-hover/subDropdwon:after:text-secondary-foreground'>
                                                                        {lable}
                                                                        {subDropdonwn?.length ? <span><IoIosArrowDown /></span> : ""}
                                                                    </Link>
                                                                    {
                                                                        subDropdonwn &&
                                                                        <ul className={`transition-all duration-500 ${subDropDownActive === id ? "max-h-[300px] overflow-auto opacity-100 pt-3 no-scrollbar" : "max-h-0 overflow-hidden opacity-0"} `}>
                                                                            {
                                                                                subDropdonwn.map(({ id, lable, path, tag, }) => {
                                                                                    return (
                                                                                        <li key={id} className='pl-7.5 pr-12 '>
                                                                                            <Link href={path} className='whitespace-nowrap font-semibold text-secondary-foreground dark:text-muted-foreground text-base leading-[100%] py-[11px] px-2 block relative z-[1] after:z-[-1] after:absolute after:left-0 after:top-0 after:w-0 after:transition-all after:duration-300 hover:after:w-full after:h-full after:bg-secondary'>{lable}</Link>
                                                                                        </li>
                                                                                    )
                                                                                })
                                                                            }
                                                                        </ul>
                                                                    }
                                                                </li>
                                                            )
                                                        })
                                                        /* end dropdonw */
                                                    }
                                                </ul>
                                            }

                                            {/* mega menu start */
                                                megaMenu.length &&
                                                <ul className={`transition-all duration-500 ${mainDropDownActive === id ? "max-h-[2200px] overflow-auto pt-3 no-scrollbar" : "max-h-0 overflow-hidden"}`}>
                                                    {
                                                        megaMenu.map(({ id, lable, path, src }) => {
                                                            return (
                                                                <li key={id} className='group/homeImge bg-background rounded-xl mb-6 max-w-[230px] mx-auto'>
                                                                    <div className='relative overflow-x-hidden shadow-[0px_6px_20px_0px_rgba(0,31,63,0.06)] rounded-lg'>
                                                                        <Link href={path}> <Image src={src} alt={lable} className='rounded-lg' /> </Link>
                                                                    </div>
                                                                    <h5 className='pt-4 pb-3'>
                                                                        <Link href={path} className='font-semibold relative text-muted-foreground text-center block '>{lable}  </Link>
                                                                    </h5>
                                                                </li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                                /* mega menu end */
                                            }
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <MobileExtraInfo />
                    </div>
                </SheetContent>
            </Sheet>
        </div >
    )
}

export default MobileMenu