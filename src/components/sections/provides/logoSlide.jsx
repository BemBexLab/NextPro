"use client"
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Marquee from "react-fast-marquee";
import hubSpot3 from "../../../../public/images/shapes/hubSpot3-2.png"
import shopify3 from "../../../../public/images/shapes/shopify3-1.png"
import zapier3 from "../../../../public/images/shapes/zapier3-3.png"
import jira3 from "../../../../public/images/shapes/jira3-4.png"
import slack3 from "../../../../public/images/shapes/slack3-6.png"
import analytics3 from "../../../../public/images/shapes/google-analytics3-5.png"
import notion3 from "../../../../public/images/shapes/notion3-9.png"
import paypal3 from "../../../../public/images/shapes/paypal3-7.png"
import hotjar3 from "../../../../public/images/shapes/hotjar3-8.png"
import mailchimp3 from "../../../../public/images/shapes/mailchimp3-11.png"
import stripe3 from "../../../../public/images/shapes/stripe3-12.png"
import googledrive3 from "../../../../public/images/shapes/googledrive3-10.png"

const softwareList = [
    {
        id: 1,
        logo: hubSpot3,
        link: ""
    },
    {
        id: 2,
        logo: shopify3,
        link: ""
    },
    {
        id: 3,
        logo: zapier3,
        link: ""
    },
    {
        id: 4,
        logo: jira3,
        link: ""
    },
    {
        id: 5,
        logo: slack3,
        link: ""
    },
    {
        id: 6,
        logo: analytics3,
        link: ""
    },
    {
        id: 7,
        logo: notion3,
        link: ""
    },
    {
        id: 8,
        logo: paypal3,
        link: ""
    },
    {
        id: 9,
        logo: hotjar3,
        link: ""
    },
    {
        id: 10,
        logo: mailchimp3,
        link: ""
    },
    {
        id: 11,
        logo: stripe3,
        link: ""
    },
    {
        id: 12,
        logo: googledrive3,
        link: ""
    },
    {
        id: 13,
        logo: hubSpot3,
        link: ""
    },
    {
        id: 14,
        logo: shopify3,
        link: ""
    },
    {
        id: 15,
        logo: zapier3,
        link: ""
    },
    {
        id: 16,
        logo: jira3,
        link: ""
    },
    {
        id: 17,
        logo: slack3,
        link: ""
    },
    {
        id: 18,
        logo: hotjar3,
        link: ""
    },
    {
        id: 19,
        logo: mailchimp3,
        link: ""
    },
    {
        id: 20,
        logo: stripe3,
        link: ""
    },
]
const LogoSlide = () => {
    return (
        <div className='flex flex-col gap-y-1'>
            <Marquee speed={35} className='py-3'>
                {
                    softwareList.map(({ id, link, logo }) =>
                        <Link href={""} key={id} className='h-[58px] min-w-[140px] px-[42px] rounded-[10px] bg-white shadow-4xl flex justify-center items-center mr-5'>
                            <Image src={logo} alt='logo' className='w-full h-auto' />
                        </Link>
                    )
                }
            </Marquee>
            <Marquee direction='right' className='py-3' speed={35}>
                {
                    softwareList.map(({ id, link, logo }) =>
                        <Link href={""} key={id} className='h-[58px] min-w-[140px] px-[42px] rounded-[10px] bg-white shadow-4xl flex justify-center items-center mr-5'>
                            <Image src={logo} alt='logo' className='w-full h-auto' />
                        </Link>
                    )
                }
            </Marquee>
            <Marquee speed={30} className='py-3'>
                {
                    softwareList.map(({ id, link, logo }) =>
                        <Link href={""} key={id} className='h-[58px] min-w-[140px] px-[42px] rounded-[10px] bg-white shadow-4xl flex justify-center items-center mr-5'>
                            <Image src={logo} alt='logo' className='w-full h-auto' />
                        </Link>
                    )
                }
            </Marquee>
            <Marquee direction='right' className='py-3' speed={30}>
                {
                    softwareList.map(({ id, link, logo }) =>
                        <Link href={""} key={id} className='h-[58px] min-w-[140px] px-[42px] rounded-[10px] bg-white shadow-4xl flex justify-center items-center mr-5'>
                            <Image src={logo} alt='logo' className='w-full h-auto' />
                        </Link>
                    )
                }
            </Marquee>
            <Marquee speed={25} className='py-3'>
                {
                    softwareList.map(({ id, link, logo }) =>
                        <Link href={""} key={id} className='h-[58px] min-w-[140px] px-[42px] rounded-[10px] bg-white shadow-4xl flex justify-center items-center mr-5'>
                            <Image src={logo} alt='logo' className='w-full h-auto' />
                        </Link>
                    )
                }
            </Marquee>
        </div>
    )
}

export default LogoSlide