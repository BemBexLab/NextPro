import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { menuList } from '@/lib/fackData/menuList'
import { IoIosArrowDown } from "react-icons/io";
import MobileMenu from './mobileMenu';
import MegaMenu from "./megaMenu"
import DropDownMenu from "./dropDownMenu"
import Logo from '@/components/ui/logo'
import StickyHeader from '@/components/ui/stickyHeader'

const HeaderOne = () => {

  return (
    <StickyHeader top='20px'>
      <header id='header' className='sticky transition-[top] duration-300 z-50 w-full'>
        <div id='header-container' className='lg:mt-[51px] mt-5'>
          <div className='container mx-auto'>
            <div className='flex justify-between items-center bg-background xl:rounded-2.5xl rounded-xl drop-shadow-3xl '>
              <div className='pl-4.5 py-5'>
                <Logo />
              </div>
              <nav className='xl:block hidden'>
                <ul className='flex items-center 2xl:gap-12.5 gap-7'>
                  {
                    menuList.map(({ id, lable, path, dropDown, megaMenu }) => {
                      return (
                        <li className='pt-[43px] pb-[42px] group' key={id}>
                          <Link href={path} className='font-semibold leading-[22px] flex items-center gap-1 text-muted-foreground relative transition-all duration-500 group-hover:text-primary-foreground'>
                            {lable}
                            <span className='group-hover:rotate-180 group-hover:text-primary-foreground transition-all duration-500'><IoIosArrowDown /></span>
                          </Link>
                          {
                            megaMenu.length && <MegaMenu data={megaMenu} />
                          }
                          {
                            dropDown.length && <DropDownMenu data={dropDown} />
                          }
                        </li>
                      )
                    })
                  }
                </ul>
              </nav>
              <div className='hidden bg-primary xl:flex 2xl:gap-[22px] gap-4 pt-[25px] pb-[22px] pr-4.5 pl-[17px] rounded-tr-[20px] rounded-br-[20px]'>
                <Image src={"/images/shapes/Calling1-1.svg"} width={46} height={49} alt='call icon' />
                <div >
                  <p className='text-foreground dark:text-white leading-[160%]'>Call Us anytime:</p>
                  <h4>
                    <a href="tel:04125589745" className='text-foreground dark:text-white font-extrabold text-2xl leading-[140%]'>(0412) 558 9745</a>
                  </h4>
                </div>
              </div>
              <div className='xl:hidden block pr-4.5'>
                <MobileMenu data={menuList} />
              </div>
            </div>
          </div>
        </div>
      </header>
    </StickyHeader>
  )
}

export default HeaderOne