"use client"
import Link from 'next/link'
import React from 'react'
import Logo from '../ui/logo'

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <div className='max-w-[1350px] mx-auto px-[15px]'>
            <div className='flex xl:flex-row flex-col justify-between gap-4 items-center py-12.5'>
                <p className='order-1 xl:order-0'>© {year} <Link href={"https://themeforest.net/user/themeperch"} className='text-primary-foreground relative after:h-[1px] hover-underline'>Themeperch</Link> . All Rights Reserved.</p>
                <div className='order-0 xl:order-1'><Logo /></div>
                <ul className='flex items-center gap-8 order-2'>
                    <li>
                        <Link href={"#"} className='hover:text-primary-foreground transition-all'>Privacy policy</Link>
                    </li>
                    <li>
                        <Link href={"#"} className='hover:text-primary-foreground transition-all'>Terms & Condition</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer