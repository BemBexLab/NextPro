import React from 'react'
import CardOne from '@/components/sections/blogs/cardOne'
import PageTitle from '@/components/sections/pageTitle'
import SideBar from '@/components/sections/sideBar'
import { blogData } from '@/lib/fackData/blogData'

export const metadata = {
    title: "WebFoundersUSA",
    description: "NextPro is a modern Next.js and Tailwind CSS Template there features General Marketing, Social Media Marketing, AI in Marketing, Paid Advertising, Video Marketing, Analytics and Reporting, Industry news & Trends, E-commerce Marketing",
};

const Blog2 = () => {
    return (
        <main>
            <PageTitle pageName={"Blog"} breadcrumbLink={"Blog"} />
            <div className='lg:py-15 py-9'>
                <div className='max-w-[1350px] mx-auto px-[15px]'>
                    <div className='grid lg:grid-cols-[33%_66%] grid-cols-1 gap-12.5'>
                        <div>
                            <SideBar blog={true} search={true} />
                        </div>
                        <div className='grid lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-7.5 justify-between'>
                            {
                                blogData.slice(0, 8).map(({ id, author, date, thumb, title, category }) => <CardOne key={id} id={id} title={title} thumb={thumb} author={author} date={date} category={category} />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Blog2