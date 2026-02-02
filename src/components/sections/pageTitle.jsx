import React from 'react'
import Link from 'next/link'
import { FaChevronRight } from "react-icons/fa";
import Title from '../ui/title'
import { cn } from '@/lib/utils';

// Add bgImage as a prop with a default valu
const PageTitle = ({
  pageName,
  breadcrumbLink,
  breadcrumbCurrent,
  className,
  bgImage = "/images/servicebanner/portfolio-image.jpg"
}) => {
  return (
    <div
      className={cn(
        `relative z-[1] bg-no-repeat bg-cover bg-[center_bottom] overflow-hidden
        h-[400px] max-h-[400px]
        after:absolute after:w-full after:h-full after:top-0 after:left-0 after:bg-[rgba(0,31,63,0.4)] after:backdrop-blur after:z-[-1]`,
        className
      )}
      style={{
        backgroundImage: `url('${bgImage}')`
      }}
    >
      <div className='h-full flex flex-col items-center justify-center px-[15px]'>
        <Title size={"5xl"} className={"text-white"}>{pageName}</Title>
        <div className='flex items-center flex-wrap gap-[15px] pt-6'>
          <Link href={"/"} className='text-1xl font-semibold text-white'>Home</Link>
          <span className='text-white'><FaChevronRight /></span>
          {breadcrumbCurrent ?
            <>
              <Link href={`/${breadcrumbLink}`} className='text-1xl font-semibold text-white capitalize'>{breadcrumbLink}</Link>
              <span className='text-white'><FaChevronRight /></span>
            </>
            :
            <p className='text-1xl font-semibold text-[#C0C0C0] capitalize'>{breadcrumbLink}</p>
          }
          <p className='text-1xl font-semibold text-[#C0C0C0]'>{breadcrumbCurrent}</p>
        </div>
      </div>
    </div>
  )
}

export default PageTitle
