"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { MdMenu, MdClose } from 'react-icons/md'
import Logo from '../ui/logo'
import { Button } from '../ui/button'
import StickyHeader from '../ui/stickyHeader'

const menuList = [
  {
    id: 1,
    label: "Demo",
    path: "#demo"
  },
  {
    id: 2,
    label: "Features",
    path: "#features"
  },
  {
    id: 3,
    label: "Documentation",
    path: "/documentation/index.html"
  },
  {
    id: 4,
    label: "Friendly Support",
    path: "#friendly_support"
  },

]
const Header = () => {
  const [activeMobileMenu, setActiveMobileMenu] = useState(false)

  return (
    <StickyHeader>
      <div id='header' className='sticky top-0 z-50 w-full transition-[top] duration-300'>
        <div id='header-container' className='absolute left-0 w-full flex items-center justify-between lg:px-11 px-4 z-50 py-2 [.header-pinned_&]:bg-background [.header-pinned_&]:shadow-md transition-all duration-300'>
          <div>
            <Logo />
          </div>
          <MenuList activeMobileMenu={activeMobileMenu} setActiveMobileMenu={setActiveMobileMenu} />
          <div className='hidden lg:block'>
            <Button asChild className="px-[39px] py-2.5">
              <Link target='_blank' href={"https://themeforest.net/item/nextpro-multipurpose-react-nextjs-tailwindcss-template-for-digital-services-agency/52734604"}>
                Buy NextPro
              </Link>
            </Button>
          </div>
          <div className='lg:hidden '>
            <MdMenu onClick={() => setActiveMobileMenu(true)} className='text-muted-foreground text-4xl cursor-pointer' />
          </div>
        </div>
      </div>
    </StickyHeader>
  )
}

export default Header


const MenuList = ({ activeMobileMenu, setActiveMobileMenu }) => {
  return (


    <div className={`absolute z-50 lg:static min-h-screen lg:min-h-max lg:bg-transparent bg-background w-full lg:w-auto left-0 px-4 lg:px-0 transition-all duration-500 ${activeMobileMenu ? "top-0" : "-top-[100vh]"}`}>
      <div className='flex lg:hidden justify-between items-center pt-5'>
        <div>
          <Logo />
        </div>
        <div className='cursor-pointer' onClick={() => setActiveMobileMenu(false)}>
          <MdClose className='text-2xl text-muted-foreground' />
        </div>
      </div>
      <ul className='flex lg:flex-row flex-col lg:items-center items-start lg:gap-10 pt-10 lg:pt-0'>

        {
          menuList.map(({ id, label, path }) => {
            return (
              <li key={id} className='lg:py-[26px] py-2' onClick={() => setActiveMobileMenu(false)}>
                <Link href={`${path}`} className='font-bold relative hover:text-primary-foreground transition-all duration-500 text-muted-foreground inline-block'>{label}</Link>
              </li>
            )
          })
        }

      </ul>
    </div>

  )
}