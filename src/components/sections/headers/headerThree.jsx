"use client"
import React from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { IoIosArrowDown } from 'react-icons/io'

import { Button } from '@/components/ui/button'
import { menuList } from '@/lib/fackData/menuList'
import MegaMenu from './megaMenu'
import DropDownMenu from './dropDownMenu'
import MobileMenu from './mobileMenu'
import HeaderShortInfo from './headerShortInfo'
import { Offcanvas, OffcanvasClose, OffcanvasContent, OffcanvasOverlay, OffcanvasTrigger } from '@/components/ui/offcanvas'
import StickyHeader from '@/components/ui/stickyHeader'
import Image from 'next/image'
import TopHeader from './topHeader'

const HeaderThree = () => {
    return (
        <StickyHeader>
            <header id='header' className='sticky top-0 z-50 w-full transition-[top] duration-300'>
                <div id='header-container' className='absolute top-0 left-0 z-50 w-full bg-transparent'>
                    <div id='top-header'>
                        <TopHeader bgColor={"bg-white"} color={"text-white"} darkBg={'dark:bg-[rgba(242,244,251,0.2)]'} />
                    </div>

                    <div className={`[.header-pinned_&]:bg-[rgba(0,31,63,0.9)] transition-all duration-300`}>
                        <div className='container mx-auto'>
                            <div className='relative'>
                                <span className='border-t border-[#FFFFFF26] block [.header-pinned_&]:hidden'></span>
                                <div className={`flex justify-between items-center`}>
                                    <div className='py-5 flex items-center gap-8'>
                                        <Offcanvas>
                                            <OffcanvasTrigger>
                                                <div className={`flex flex-col gap-2.5 cursor-pointer`}>
                                                    <span className='h-[4px] w-10 bg-white rounded-lg block'></span>
                                                    <span className='h-[4px] w-10 bg-white rounded-lg block'></span>
                                                    <span className='h-[4px] w-5 bg-white rounded-lg block'></span>
                                                </div>
                                            </OffcanvasTrigger>
                                            <OffcanvasOverlay />
                                            <OffcanvasContent side={"left"} className="top-0">
                                                <OffcanvasClose />
                                                <HeaderShortInfo />
                                            </OffcanvasContent>
                                        </Offcanvas>

                                        <Link href={"/"}>
                                            <Image src={"/images/logo-light2.png"} width={500} height={200} alt='logo-white' unoptimized="true" className={`w-full h-full block dark:hidden`} />
                                            <Image src={"/images/logo-next.png"} width={179} height={53} alt='logo-original' unoptimized="true" className='w-full h-full dark:block hidden' />
                                        </Link>
                                    </div>
                                    <div className='flex items-center gap-16'>
                                        <nav className='xl:block hidden'>
                                            <ul className='flex items-center 2xl:gap-12.5 gap-7'>
                                                {
                                                    menuList.map(({ id, lable, path, dropDown, megaMenu }) => {
                                                        return (
                                                            <li className='pt-[43px] pb-[42px] group' key={id}>
                                                                <Link href={path} className='font-semibold leading-[22px] flex items-center gap-1 text-white relative transition-all duration-500 group-hover:text-[#E2E7FF]'>
                                                                    {lable}
                                                                    <span className='group-hover:rotate-180 group-hover:text-[#E2E7FF] transition-all duration-500'><IoIosArrowDown /></span>
                                                                </Link>
                                                                {
                                                                    megaMenu.length && <MegaMenu data={megaMenu} bgColor="bg-white" color="text-foreground" />
                                                                }
                                                                {
                                                                    dropDown.length && <DropDownMenu data={dropDown} bgColor="bg-white" color="text-foreground" />
                                                                }
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </nav>
                                        <div className='hidden xl:flex items-center gap-5 '>
                                            <Button asChild size="xl" className="dark:text-white hover:text-white hover:border-white">
                                                <Link href={"/contact-us"}> Let’s Talk </Link>
                                            </Button>
                                        </div>
                                        <MobileMenu data={menuList} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </StickyHeader>
    )
}

export default HeaderThree