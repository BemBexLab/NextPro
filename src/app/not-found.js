import React from 'react'
import bg_img from "../../public/images/banner/hero-404.jpg"
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import RightArrow from '../../public/icons/rightArrow'
const NotFound = () => {
  return (
    <section className='h-screen'>
      <div className='relative h-full z-10 after:absolute after:left-0 after:top-0 after:w-full after:h-full after:bg-[rgba(0,31,63,0.4)] after:backdrop-blur-sm after:bg-blend-overlay after:z-[-1] bg-cover bg-no-repeat' style={{ backgroundImage: `url(${bg_img.src})`, backgroundPosition: "center bottom" }}>
        <div className='mx-auto max-w-[1200px] h-full'>
          <div className='flex flex-col items-center justify-center h-full'>
            <h1 className='[font-size:_clamp(3.125rem,-12.0192rem+57.6923vw,31.25rem)] font-bold leading-[110%] text-secondary-foreground'>404</h1>
            <h4 className='[font-size:_clamp(1.875rem,1.2692rem+2.3077vw,3rem)] font-extrabold text-secondary-foreground leading-[140%] text-center'>OOPS!! Looks like your are LOST</h4>
            <p className='text-secondary-foreground text-1xl mt-7.5 max-w-[772px] text-center'>The page you are looking is not available or has been removed. Try going to Home Page by using the button below.</p>
            <Link href={"home"} className='mt-[55px] inline-block'><Button size={"xl"}> <span className='-rotate-[134deg]'><RightArrow /></span> Back to Home page</Button></Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NotFound