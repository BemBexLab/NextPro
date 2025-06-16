import React from 'react'
import Title from '../ui/title'
import Input from '../ui/input'
import Link from 'next/link'
import { FiSearch } from "react-icons/fi";
import Image from 'next/image';
import { blogData } from '@/lib/fackData/blogData';

const SideBar = ({ search, blog, onCategorySelect, selectedCategory }) => {
  // Collect all unique categories from blogData
  const uniqueCategorys = []
  blogData.forEach(({ category }) => {
    category.forEach((item) => {
      if (!uniqueCategorys.includes(item)) {
        uniqueCategorys.push(item)
      }
    })
  })

  return (
    <aside className='sticky top-[var(--header-height)] transition-all duration-300'>
      {
        search &&
        <div className='pb-12.5'>
          <Title size={"4xl"} className={"pb-7.5"}>Search</Title>
          <div className='relative'>
            <Input type={"text"} placeholder={"Type & hit Enter"} className={"border-accent bg-[rgba(46,77,254,0.05)] w-full max-h-[69px] lg:py-[18px] py-3 font-semibold lg:text-1xl text-lg"} />
            <span className='absolute right-6 top-1/2 -translate-y-1/2'>
              <FiSearch className='text-[#7C848C] text-2xl' />
            </span>
          </div>
        </div>
      }

      <div>
        <Title size={"4xl"} className={"pb-7.5"}>Categories</Title>
        <ul className='bg-[rgba(46,77,254,0.05)] lg:p-5 p-3 rounded-lg flex flex-col gap-[15px]'>
          {
            uniqueCategorys.map((category, index) => {
              const isActive = selectedCategory === category;
              return (
                <li key={index}>
                  <button
                    type="button"
                    onClick={() => onCategorySelect(category)}
                    className={`w-full text-left lg:text-1xl text-lg font-semibold block bg-background rounded-lg lg:px-6 px-3 lg:pt-[18px] lg:pb-[22px] py-3 relative z-[1] after:absolute after:z-[-1] after:left-0 after:top-0 after:w-0 hover:after:w-full after:h-full after:bg-primary after:text-white after:rounded-lg after:transition-all after:duration-500 hover:text-white transition-all duration-500 overflow-hidden ${isActive ? "bg-primary text-white" : ""}`}
                  >
                    {category}
                  </button>
                </li>
              )
            })
          }
        </ul>
      </div>
      {
        blog &&
        <div className='pt-12.5'>
          <Title size={"4xl"} className={"pb-7.5"}>Recent Posts</Title>
          <div className='bg-[rgba(46,77,254,0.05)] lg:p-5 p-3 rounded-lg'>
            <div className='flex flex-col gap-9'>
              {
                blogData.slice(0, 5).map(({ id, date, thumb, title }) => {
                  return (
                    <div key={id} className='flex items-center gap-[14px]'>
                      <Image src={thumb} width={136} height={85} alt='blog' className='rounded-[5px] w-full lg:max-w-[136px] lg:min-w-[136px] min-w-25 max-w-25 max-h-[85px] object-cover' />
                      <div>
                        <span className='text-sm text-[#7C848C] block pb-2'>{date}</span>
                        <Link href={"/blog-single"} className='text-muted-foreground multiline-hover'>{title.length > 50 ? title.slice(0, 50) + '...' : title}</Link>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      }
    </aside>
  )
}

export default SideBar
